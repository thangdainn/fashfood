var showCart = document.querySelector('.cart');
var showOrder = document.querySelector('.order');
var notUser = document.querySelector('.header__none-user');
var showcartQuantity = document.querySelector('.header__cart-quantity');
var mobileQuantity = document.querySelector('.mobile-cart-quantity');

function htmlCartProduct(product) {  
    var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
    var html = `
        <li class="cart__product-item">
            <div class="cart__product-box">
                <div class="cart__product-img-box">
                    <img class="cart__product-img" src="${product.img}">
                    <button class="cart__product-delete" onclick="removeProduct('${tmpName}')">
                        <i class="cart__product-delete-icon fa-solid fa-xmark"></i>
                        Xóa
                    </button>
                </div>
                <div class="cart__product-info-box">
                    <p class="cart__procduct-name">${product.name}</p>
                    <div class="cart__product-price-box">
                        <div class="cart__prodcut-price">
                            <p class="cart__product-current-price">${product.currentPrice}</p>
                            <p class="cart__product-old-price">${product.oldPrice}</p>
                        </div>
                        <div class="cart__product-quantity-box">
                            <button class="cart_product-minus cart__product-quantity-btn" onclick="minusProduct('${tmpName}')">-</button>
                            <span value="${product.quantity}" class="cart__product-quantity">${product.quantity}</span>
                            <button class="cart_product-plus cart__product-quantity-btn" onclick="plusProduct('${tmpName}')">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `;
    return html;
}

function htmlOrderProduct(orderItem, array) {
    var total = getTotalPrice(array);
    var quantity = 0;

    var productList = '';
    for (var i = 0; i < array.length; i++) {
        productList += `
            <li class="order__item">
                <img src="${array[i].product.img}" alt="" class="order__item-img">
                <span class="order__item-name">${array[i].product.name}</span>
                <span class="order__item-price">${array[i].product.currentPrice}</span>
                <span class="order__item-quantity">${array[i].quantity}</span>
            </li>
        `;
        quantity += array[i].quantity;
    }

    var statusText, status;
    if (orderItem.orderStatus == 'not') {
        statusText = 'Chưa xử lý';
        status = '';
    } else {
        statusText = 'Đã xử lý';
        status = 'active';
    }

    var html = `
        <div class="order__box">
            <div class="order__box-title" onclick="showOrderProduct(${orderItem.orderID})">
                <div class="order__box-item">
                    <i class="uil uil-arrow-down"></i>
                </div>
                <div class="order__box-item">
                    <h3>Đơn hàng #${orderItem.orderID}</h3>
                    <span>${quantity} sản phẩm</span>
                </div>
                <div class="order__box-item">
                    <h3>Tổng tiền</h3>
                    <span>${total}</span>
                </div>
                <div class="order__box-item">
                    <h3>Ngày đặt hàng</h3>
                    <span>${orderItem.orderDate}</span>
                </div>
                <div class="order__box-item">
                    <span class="status ${status}">${statusText}</span>
                </div>
            </div>

            <ul class="order__list scrollbar" value="${orderItem.orderID}">
                ${productList}
            </ul>
        </div>
    `;
    return html;
}

function getProductName() {
    var url = window.location.href;
    var s = url.split('?');
    return s[2];
}

function showCartPage() {
    if (notUser.style.display == 'block') {
        showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để xem giỏ hàng!');
        setTimeout(function() {
            document.getElementById('account__modal').style.display = 'flex';
        }, 1000);
    } else {
        window.location.href = 'index.html?cart';
    }
}

//Add product to cart
var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var index = localStorage.userAccountIndex;

function addToCart() {
    var addCartBtn = document.querySelector('.product__detail-add-cart');
    var productName = getProductName();

    var cartProduct = products.find(function(product) {
        var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
        return tmpName == productName;
    });

    addCartBtn.addEventListener('click', function() {
        if (notUser.style.display == 'block') {
            showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để thêm thêm vào giỏ!');
            setTimeout(function() {
                document.getElementById('account__modal').style.display = 'flex';
            }, 1000);
        } else {
            showToast('success', 'Thành công!', 'Thêm vào giỏ thành công!');

            userAccount[index].cartList.push(cartProduct);
            localStorage.setItem('userAccount', JSON.stringify(userAccount));

            showCartQuantity();
        }
    });
}

//Update cart product
function updateCartProduct(name) {
    var index = localStorage.userAccountIndex;
    userAccount[index].cartList = userAccount[index].cartList.filter(function(product) {
        var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
        return tmpName != name;
    }) 
    
    if (userAccount[index].cartList.length == 0) {
        document.querySelector('.cart__wrapper').style.display = 'none';
        document.querySelector('.cart__empty').style.display = 'block';
    } 
    
    showCartQuantity();
    showCartProduct();
}

//Delete product
function removeProduct(name) {
    var tmpArray = userAccount[index].cartList;

    var newArray = tmpArray.filter(function(product) {
        var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
        return tmpName != name;
    });

    var html = newArray.map(function(product) {
        return htmlCartProduct(product);
    });

    document.querySelector('.cart__product-list').innerHTML = html.join('');
    document.querySelector('.cart__product-total-price').innerHTML = getTotalPrice(newArray);

    updateCartProduct(name);
    userAccount[index].cartList = newArray;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
    location.reload();
}

//xử lý cart quantity ở trang product
showCartQuantity();
function showCartQuantity() {
    var index = localStorage.userAccountIndex;
    if (userAccount[index]) {
        var quantity = userAccount[index].cartList.length;
        
        if (quantity > 0) {
            if (showcartQuantity) {
                showcartQuantity.style.display = 'block';
                showcartQuantity.innerHTML = quantity;
            }
            
            // Movbile
            if (mobileQuantity) {
                mobileQuantity.style.display = 'block';
                mobileQuantity.innerHTML = quantity;
            }
        } else {
            if (showcartQuantity) {
                showcartQuantity.style.display = 'none';
            }

            // Mobile
            if (mobileQuantity) {
                mobileQuantity.style.display = 'none';
            }
        }
    } else {
        if (showcartQuantity) {
            showcartQuantity.style.display = 'none';
        }
    }
}
 
function getTotalPrice(array) {
    var s = 0;
    for (var i = 0; i < array.length; i++) {
        var price = array[i].product.currentPrice;
        price = parseFloat(price.replace(/\./g, ''));
        s += price * array[i].quantity;
    }

    var tmp = Intl.NumberFormat('en-US');
    var strPrice = tmp.format(s);
    strPrice = strPrice.replaceAll(',', '.');
    return strPrice;
}

//tạo array mới có thuộc tính quantity là số lượng của product 
function createNewCartProductArray(array) {
    sortID(array);   
    var tmpArray = [];
    var k = 0;
    var quantity = 1;
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] != null && array[i].id == array[i + 1].id) {
            quantity++;
            if (i == array.length - 1) { 
                tmpArray[k] = array[i];
                tmpArray[k++]['quantity'] = quantity;
            }
        } else {
            tmpArray[k] = array[i];
            tmpArray[k++]['quantity'] = quantity;
            quantity = 1;
        }
    }
    return tmpArray;
}

// show cart 
function showCartProduct() {
    document.querySelector('html').style.backgroundColor = '#f0f0f0';
    document.getElementById('body').style.display = 'none';

    var index = localStorage.userAccountIndex;
    showCart.style.display = 'block';
    showOrder.style.display = 'none';

    var tmpArray = createNewCartProductArray(userAccount[index].cartList);
    
    if (tmpArray.length == 0) {
        tmpArray = null;
    }

    if (tmpArray != null) {
        document.querySelector('.cart__wrapper').style.display = 'block';
        document.querySelector('.cart__empty').style.display = 'none';
        
        var html = tmpArray.map(function(product) {
            return htmlCartProduct(product);
        });

        document.querySelector('.cart__product-list').innerHTML = html.join('');
        document.querySelector('.cart__product-total-price').innerHTML = getTotalPrice(tmpArray);
    } else {
        document.querySelector('.cart__wrapper').style.display = 'none';
        document.querySelector('.cart__empty').style.display = 'block';
    }
}

//show order
// Lấy danh sách đơn hàng từ localStorage
var orderList = JSON.parse(localStorage.getItem('orderList'));
// Nếu không có danh sách đơn hàng thì khởi tạo mảng trống
if (orderList == null) {
    orderList = [];
    localStorage.setItem('orderList', JSON.stringify(orderList));
}


function checkUser() {
    // Kiểm tra xem có đơn hàng nào trong danh sách orderList không
    if (orderList.length > 0) {
        // Lặp qua các đơn hàng để kiểm tra email người dùng có trùng khớp
        for (var i = 0; i < orderList.length; i++) {
            if (userAccount[index].userEmail == orderList[i].userAccount.userEmail) {
                return true; // Đã có đơn hàng của người dùng
            }
        }
    }
    return false; // Không có đơn hàng của người dùng
}


function showOrderPage() {
    // Thay đổi màu nền của trang
    document.querySelector('html').style.backgroundColor = '#f0f0f0';
    document.getElementById('body').style.display = 'none';
    showCart.style.display = 'none';
    showOrder.style.display = 'block';
    
    // Kiểm tra người dùng đã có đơn hàng chưa
    if (checkUser()) {
        document.querySelector('.order__wrapper').style.display = 'block';
        document.querySelector('.order__empty').style.display = 'none';
        orderList.sort((a, b) => {
            let dateA = new Date(a.orderDate.split('/').reverse().join('-'));
            let dateB = new Date(b.orderDate.split('/').reverse().join('-'));
            return dateB - dateA;
        });
        var html = orderList.map(function(orderItem) {
            if(orderItem.userAccount.userEmail == userAccount[index].userEmail) {
                // var tmpArray = createNewCartProductArray(orderItem.userAccount.cartList);
                return htmlOrderProduct(orderItem, orderItem.orderDetails);
            }
        });

        document.querySelector('.show-order').innerHTML = html.join('');
    } else {
        // Nếu người dùng chưa có đơn hàng
        document.querySelector('.order__wrapper').style.display = 'none';
        document.querySelector('.order__empty').style.display = 'block';
    }
}

//set order id
setOrderId();
function setOrderId() {
    for (var i = 0; i < orderList.length; i++) {
        orderList[i].orderID = i + 1;
        localStorage.setItem('orderList', JSON.stringify(orderList));
    }
}

//Xử lý thêm, bớt sản phẩm
var tmpArray;
if (userAccount[index]) {
    tmpArray = userAccount[index].cartList;
}

function minusProduct(name) {
    // Lọc sản phẩm trong giỏ theo tên
    var newArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') == name;
    }); 

    // Giảm số lượng sản phẩm
    newArray.length--;

    // Cập nhật lại giỏ hàng
    tmpArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') != name;
    });

    tmpArray = tmpArray.concat(newArray);

    userAccount[index].cartList = tmpArray;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartQuantity(); // Cập nhật số lượng giỏ hàng
    showCartProduct();  // Cập nhật danh sách sản phẩm trong giỏ
}

function plusProduct(name) {
    // Lọc sản phẩm trong giỏ theo tên
    var newArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') == name;
    }); 

    // Tăng số lượng sản phẩm
    newArray.length++;
    newArray[newArray.length - 1] = newArray[newArray.length - 2];

    // Cập nhật lại giỏ hàng
    tmpArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') != name;
    });
    
    tmpArray = tmpArray.concat(newArray);

    userAccount[index].cartList = tmpArray;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartQuantity(); // Cập nhật số lượng giỏ hàng
    showCartProduct();  // Cập nhật danh sách sản phẩm trong giỏ
}


// get user info
var fullName = document.getElementById('fullname');
var phone = document.getElementById('phone');
var address = document.getElementById('address');

function checkPhone() {
    // Sử dụng biểu thức chính quy để kiểm tra số điện thoại
    var phonePattern = /^0\d{9}$/;
    
    // Kiểm tra xem số điện thoại có là số có 10 chữ số và bắt đầu bằng 0 hay không
    if (phonePattern.test(phone.value)) {
        return true;
    } else {
        return false;
    }
}


function orderProduct() {
    if (checkPhone()) {
        document.querySelector('.error-phone').style.display = 'none';

        // Cập nhật thông tin người dùng
        userAccount[index].userFullName = fullName.value;
        userAccount[index].userPhone = phone.value;
        userAccount[index].userAddress = address.value;

        // Thêm thông tin đơn hàng
        orderList.push({orderID: '', orderDate: today, orderStatus: 'not', userAccount: userAccount[index]});
        localStorage.setItem('orderList', JSON.stringify(orderList));

        // Xóa giỏ hàng sau khi đặt hàng
        userAccount[index].cartList = [];
        localStorage.setItem('userAccount', JSON.stringify(userAccount));

        // Hiển thị thông báo dạng toast khi đặt hàng thành công
        showToast('success', 'Thành công!', 'Đặt hàng thành công!');

        // Chờ 3 giây rồi mới chuyển hướng sang trang đơn hàng
        setTimeout(() => {
            window.location.href = 'index.html?order';
        }, 3000); // 3000ms = 3 giây
    } else {
        // Hiển thị lỗi nếu số điện thoại không hợp lệ
        document.querySelector('.error-phone').style.display = 'block';
    }
}





//show order product
//xem chi tiết đơn đã mua khi nhấn nút mũi tên chỉ xuống
function showOrderProduct(id) {
    // Lấy danh sách sản phẩm trong đơn hàng theo ID
    var orderProducts = document.querySelectorAll('.order__list');
    var showProduct;
    for (var i = 0; i < orderProducts.length; i++) {
        if (orderProducts[i].getAttribute('value') == id) {
            showProduct = orderProducts[i];
            break;
        }
    }

    // Mở rộng hoặc thu gọn danh sách sản phẩm
    if (showProduct.offsetHeight == 0) {
        showProduct.classList.add('active');
    } else {
        showProduct.classList.remove('active');
    }
}

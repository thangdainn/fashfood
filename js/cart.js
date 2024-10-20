
var showCart = document.querySelector('.cart'); // Lấy phần tử hiển thị giỏ hàng
var showOrder = document.querySelector('.order'); // Lấy phần tử hiển thị đơn hàng
var notUser = document.querySelector('.header__none-user'); // Lấy phần tử hiển thị khi không có người dùng đăng nhập
var showcartQuantity = document.querySelector('.header__cart-quantity'); // Lấy phần tử hiển thị số lượng sản phẩm trong giỏ
var mobileQuantity = document.querySelector('.mobile-cart-quantity'); // Lấy phần tử hiển thị số lượng sản phẩm trong giỏ trên giao diện di động

/**
 * Tạo HTML hiển thị cho từng đơn hàng với thông tin sản phẩm.
 * @param {Object} orderItem - Đối tượng chứa thông tin đơn hàng.
 * @param {Array} array - Mảng chứa các sản phẩm trong đơn hàng.
 * @returns {String} - HTML được tạo để hiển thị đơn hàng.
 */
function htmlOrderProduct(orderItem, array) {
    var total = getTotalPrice(array); // Tính tổng giá trị đơn hàng
    var quantity = 0; // Biến lưu số lượng sản phẩm trong đơn hàng

    var productList = ''; // Chuỗi HTML chứa danh sách sản phẩm
    for (var i = 0; i < array.length; i++) {
        // Tạo HTML cho từng sản phẩm trong đơn hàng
        productList += `
            <li class="order__item">
                <img src="${array[i].img}" alt="" class="order__item-img">
                <span class="order__item-name">${array[i].name}</span>
                <span class="order__item-price">${array[i].currentPrice}</span>
                <span class="order__item-quantity">${array[i].quantity}</span>
            </li>
        `;
        quantity += array[i].quantity; // Cộng dồn số lượng sản phẩm
    }

    var statusText, status;
    // Kiểm tra trạng thái đơn hàng
    if (orderItem.orderStatus == 'not') {
        statusText = 'Chưa xử lý'; // Nếu đơn hàng chưa xử lý
        status = ''; 
    } else {
        statusText = 'Đã xử lý'; // Nếu đơn hàng đã xử lý
        status = 'active'; 
    }

    // Tạo HTML cho đơn hàng bao gồm thông tin về ID, số lượng sản phẩm, tổng tiền và trạng thái
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
                ${productList} <!-- Danh sách các sản phẩm -->
            </ul>
        </div>
    `;
    return html; // Trả về HTML đã tạo
}

/**
 * Tạo mảng sản phẩm mới từ giỏ hàng, gộp những sản phẩm giống nhau.
 * @param {Array} array - Mảng sản phẩm trong giỏ hàng.
 * @returns {Array} - Mảng sản phẩm mới với số lượng được gộp.
 */
function createNewCartProductArray(array) {
    sortID(array);   // Sắp xếp các sản phẩm theo ID
    var tmpArray = []; // Mảng tạm chứa sản phẩm đã gộp số lượng
    var k = 0;
    var quantity = 1;
    for (var i = 0; i < array.length; i++) {
        // Nếu sản phẩm hiện tại có cùng ID với sản phẩm tiếp theo, tăng số lượng
        if (array[i + 1] != null && array[i].id == array[i + 1].id) {
            quantity++;
            // Nếu đến cuối mảng, thêm sản phẩm vào mảng tạm
            if (i == array.length - 1) { 
                tmpArray[k] = array[i];
                tmpArray[k++]['quantity'] = quantity;
            }
        } else {
            // Thêm sản phẩm vào mảng tạm khi không còn sản phẩm trùng ID
            tmpArray[k] = array[i];
            tmpArray[k++]['quantity'] = quantity;
            quantity = 1; // Reset số lượng cho sản phẩm tiếp theo
        }
    }
    return tmpArray; // Trả về mảng sản phẩm mới
}

// Lấy danh sách đơn hàng từ localStorage
var orderList = JSON.parse(localStorage.getItem('orderList'));
if (orderList == null) {
    orderList = [];
}

/**
 * Kiểm tra xem người dùng có đơn hàng nào không.
 * @returns {Boolean} - Trả về true nếu người dùng có đơn hàng, ngược lại false.
 */
function checkUser() {
    if (orderList.length > 0) {
        for (var i = 0; i < orderList.length; i++) {
            if (userAccount[index].userEmail == orderList[i].userAccount.userEmail) {
                return true; // Nếu email người dùng khớp với email trong danh sách đơn hàng
            }
        }
    }
    return false; // Nếu không tìm thấy đơn hàng nào
}

/**
 * Hiển thị trang lịch sử đơn hàng của người dùng.
 */
function showOrderPage() {
    document.querySelector('html').style.backgroundColor = '#f0f0f0'; // Thay đổi màu nền
    document.getElementById('body').style.display = 'none'; // Ẩn phần nội dung chính
    showCart.style.display = 'none'; // Ẩn giỏ hàng
    showOrder.style.display = 'block'; // Hiển thị phần lịch sử đơn hàng
    
    if (checkUser()) {
        document.querySelector('.order__wrapper').style.display = 'block'; // Hiển thị phần đơn hàng
        document.querySelector('.order__empty').style.display = 'none'; // Ẩn thông báo không có đơn hàng
        
        var html = orderList.map(function(orderItem) {
            if(orderItem.userAccount.userEmail == userAccount[index].userEmail) {
                var tmpArray = createNewCartProductArray(orderItem.userAccount.cartList); // Tạo mảng sản phẩm từ giỏ hàng
                return htmlOrderProduct(orderItem, tmpArray); // Tạo HTML cho từng đơn hàng
            }
        });

        document.querySelector('.show-order').innerHTML = html.join(''); // Gán HTML vào trang
    } else {
        document.querySelector('.order__wrapper').style.display = 'none'; // Ẩn phần đơn hàng
        document.querySelector('.order__empty').style.display = 'block'; // Hiển thị thông báo không có đơn hàng
    }
}



//  các hàm trên dùng để xem lại các sản phẩm đã mua trong lịch sử mua hàng








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
function addToCart(product) {
    var addCartBtn = document.querySelector('.product__detail-add-cart');
    
    addCartBtn.addEventListener('click', function() {
        if (notUser.style.display == 'block') {
            showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để thêm vào giỏ!');
            setTimeout(function() {
                document.getElementById('account__modal').style.display = 'flex';
            }, 1000);
        } else {
            showToast('success', 'Thành công!', 'Thêm vào giỏ thành công!');

            // Lưu sản phẩm vào giỏ hàng
            userAccount[index].cartList.push(product);
            localStorage.setItem('userAccount', JSON.stringify(userAccount));

            showCartQuantity(); // Cập nhật số lượng sản phẩm trong giỏ
        }
    });
}

// function addToCart() {
//     var addCartBtn = document.querySelector('.product__detail-add-cart');
//     var productName = getProductName();

//     var cartProduct = products.find(function(product) {
//         var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
//         return tmpName == productName;
//     });

//     addCartBtn.addEventListener('click', function() {
//         if (notUser.style.display == 'block') {
//             showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để thêm thêm vào giỏ!');
//             setTimeout(function() {
//                 document.getElementById('account__modal').style.display = 'flex';
//             }, 1000);
//         } else {
//             showToast('success', 'Thành công!', 'Thêm vào giỏ thành công!');

//             userAccount[index].cartList.push(cartProduct);
//             localStorage.setItem('userAccount', JSON.stringify(userAccount));

//             showCartQuantity();
//         }
//     });
// }

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
        var price = array[i].currentPrice;
        price = price.replaceAll('.', '').replace('₫', '');
        s += price * array[i].quantity;
    }

    var tmp = Intl.NumberFormat('en-US');
    var strPrice = tmp.format(s);
    strPrice = strPrice.replaceAll(',', '.');
    return strPrice + '₫';
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
    var newArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') == name;
    }); 

    newArray.length--;

    tmpArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') != name;
    });

    tmpArray = tmpArray.concat(newArray);

    userAccount[index].cartList = tmpArray;
    userAccount[index].cartList.length = tmpArray.length;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartQuantity();
    showCartProduct();
}   

function plusProduct(name) {
    var newArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') == name;
    }); 

    newArray.length++;
    newArray[newArray.length - 1] = newArray[newArray.length - 2];

    tmpArray = tmpArray.filter(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') != name;
    });
    
    tmpArray = tmpArray.concat(newArray);

    userAccount[index].cartList = tmpArray;
    userAccount[index].cartList.length = tmpArray.length;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartQuantity();
    showCartProduct();
}  

// get user info
var fullName = document.getElementById('fullname');
var phone = document.getElementById('phone');
var address = document.getElementById('address');

function checkPhone() {
    if (parseInt(phone.value) && phone.value.length == 10) {
        return true;
    } else {
        return false;
    }
}

// order product
function orderProduct() {
    if (checkPhone()) {
        document.querySelector('.error-phone').style.display = 'none';

        userAccount[index].userFullName = fullName.value;
        userAccount[index].userPhone = phone.value;
        userAccount[index].userAddress = address.value;

        orderList.push({orderID: '', orderDate: today, orderStatus: 'not', userAccount: userAccount[index]});
        localStorage.setItem('orderList', JSON.stringify(orderList));

        userAccount[index].cartList = [];
        localStorage.setItem('userAccount', JSON.stringify(userAccount));

        alert('Đặt hàng thành công!');
        window.location.href = 'index.html?order';
    } else {
        document.querySelector('.error-phone').style.display = 'block';
    }
}

//show order product
function showOrderProduct(id) {
    var orderProducts = document.querySelectorAll('.order__list');
    var showProduct;
    for (var i = 0; i < orderProducts.length; i++) {
        if (orderProducts[i].getAttribute('value') == id) {
            showProduct = orderProducts[i];
            break;
        }
    }

    if (showProduct.offsetHeight == 0) {
        showProduct.classList.add('active');
    } else {
        showProduct.classList.remove('active');
    }
}
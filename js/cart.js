var showCart = document.querySelector('.cart');
var showOrder = document.querySelector('.order');
var notUser = document.querySelector('.header__none-user');
var showcartQuantity = document.querySelector('.header__cart-quantity');

function htmlCartProduct(cart) {  
    let id = cart.product.id;
    let priceQuantity = covertPriceToNumber(cart.product.currentPrice) * cart.quantity;
    let html = `
        <li class="cart__product-item">
            <div class="cart__product-box">
                <div class="cart__product-img-box">
                    <img class="cart__product-img" src="${cart.product.img}">
                    <button class="cart__product-delete" onclick="removeProduct('${id}')">
                        <i class="cart__product-delete-icon fa-solid fa-xmark"></i>
                        Xóa
                    </button>
                </div>
                <div class="cart__product-info-box">
                    <p class="cart__procduct-name">${cart.product.name}</p>
                    <div class="cart__product-price-box">
                        <div class="cart__prodcut-price">
                            <p class="cart__product-current-price">${convertPriceToString(priceQuantity)}</p>
                            <p class="cart__product-old-price">${cart.product.currentPrice}₫</p>
                        </div>
                        <div class="cart__product-quantity-box">
                            <button class="cart_product-minus cart__product-quantity-btn" onclick="minusProduct('${id}')">-</button>
                            <span value="${cart.quantity}" class="cart__product-quantity">${cart.quantity}</span>
                            <button class="cart_product-plus cart__product-quantity-btn" onclick="plusProduct('${id}')">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `;
    return html;
}

function htmlOrderProduct(orderItem, array) {
    let total = getTotalPrice(array);
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
    if (orderItem.orderStatus == 'processing') {
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
                    <i class="fa fa-chevron-down"></i>
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

            <div class="order_detail scrollbar" value="${orderItem.orderID}">
                <div class="order__user-info">
                    <div class="order__user-info-box">
                        <span><b>Họ tên:</b> ${orderItem.userAccount.userFullName}</span>
                        <span><b>Địa chỉ:</b> ${orderItem.userAccount.userAddress}</span>
                        <span><b>Số điện thoại:</b> ${orderItem.userAccount.userPhone}</span>
                    </div>
                </div>
                <ul class="order__list">
                    ${productList}
                </ul>
            </div>
        </div>
    `;
    return html;
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

function addToCart(productName) {
    if (!productName) {
        return;
    }
    productName = productName.replaceAll(' ', '-');
    
    let cartProduct = products.find(function(product) {
        return product.name.replaceAll(' ', '-') == productName;
    });

    let quantity = parseInt(document.getElementById('quantity_value').value);

    let cartItem = {
        product: cartProduct,
        quantity: quantity
    };

    if (notUser.style.display == 'block') {
        showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để thêm thêm vào giỏ!');
        setTimeout(function() {
            document.getElementById('account__modal').style.display = 'flex';
        }, 1000);
    } else {
        showToast('success', 'Thành công!', 'Thêm vào giỏ thành công!');

        userAccount[index].cartList = addProductToCart(cartItem);
        localStorage.setItem('userAccount', JSON.stringify(userAccount));

        showCartQuantity();
    }
}

function addProductToCart(cartItem) {
    let carts = userAccount[index].cartList;
    for (let i = 0; i < carts.length; i++) {
        if (carts[i].product.id == cartItem.product.id) {
            carts[i].quantity += cartItem.quantity;
            return carts;
        }
    }
    carts.push(cartItem);
    return carts;
}

function buyNow(productName) {
    if (!productName) {
        return;
    }
    productName = productName.replaceAll(' ', '-');
    
    let cartProduct = products.find(function(product) {
        return product.name.replaceAll(' ', '-') == productName;
    });

    let quantity = parseInt(document.getElementById('quantity_value').value);

    let cartItem = {
        product: cartProduct,
        quantity: quantity
    };

    if (notUser.style.display == 'block') {
        showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để mua hàng!');
        setTimeout(function() {
            document.getElementById('account__modal').style.display = 'flex';
        }, 1000);
    } else {
        userAccount[index].cartList = addProductToCart(cartItem);
        localStorage.setItem('userAccount', JSON.stringify(userAccount));

        window.location.href = 'index.html?cart';
    }
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
        } else {
            if (showcartQuantity) {
                showcartQuantity.style.display = 'none';
            }
        }
    } else {
        if (showcartQuantity) {
            showcartQuantity.style.display = 'none';
        }
    }
}
 
function getTotalPrice(array) {
    let total = 0;
    array.forEach(function(item) {
        total += covertPriceToNumber(item.product.currentPrice) * item.quantity;
    });
    return total;
}

// show cart 
function showCartProduct() {
    document.querySelector('html').style.backgroundColor = '#f0f0f0';
    document.getElementById('body').style.display = 'none';

    let accountIndex = JSON.parse(localStorage.getItem('userAccountIndex'));
    showCart.style.display = 'block';
    showOrder.style.display = 'none';

    let carts = userAccount[accountIndex].cartList;

    if (carts.length > 0) {
        document.querySelector('.cart__wrapper').style.display = 'block';
        document.querySelector('.cart__empty').style.display = 'none';
        
        let html = carts.map(function(cart) {
            return htmlCartProduct(cart);
        });

        setUserInfo();

        document.querySelector('.cart__product-list').innerHTML = html.join('');
        document.querySelector('.cart__product-total-price').innerHTML = convertPriceToString(getTotalPrice(carts));
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
    document.querySelector('html').style.backgroundColor = '#f0f0f0';
    document.getElementById('body').style.display = 'none';
    showCart.style.display = 'none';
    showOrder.style.display = 'block';
    
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
                return htmlOrderProduct(orderItem, orderItem.orderDetails);
            }
        });

        document.querySelector('.show-order').innerHTML = html.join('');
    } else {
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

function minusProduct(id) {
    carts = userAccount[index].cartList;
    carts = carts.map(function(cart) {
        if (cart.product.id == id && cart.quantity > 1) {
            cart.quantity--;
        }
        return cart;
    });

    userAccount[index].cartList = carts;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartProduct();
}

function plusProduct(id) {
    carts = userAccount[index].cartList;
    carts = carts.map(function(cart) {
        if (cart.product.id == id) {
            cart.quantity++;
        }
        return cart;
    });
    
    userAccount[index].cartList = carts;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartProduct();
}

//remove product
function removeProduct(id) {
    let carts = userAccount[index].cartList;
    carts = carts.filter(cart => cart.product.id != id);

    userAccount[index].cartList = carts;
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showCartQuantity();
    showCartProduct();
}


// get user info
var fullName = document.getElementById('fullname');
var phone = document.getElementById('phone');
var address = document.getElementById('address');

function setUserInfo() {
    if (userAccount[index]) {
        fullName.value = userAccount[index].userFullName;
        phone.value = userAccount[index].userPhone;
        address.value = userAccount[index].userAddress;
    }
}

function checkPhone() {
    // Sử dụng biểu thức chính quy để kiểm tra số điện thoại
    var phonePattern = /^0\d{9}$/;
    
    // Kiểm tra xem số điện thoại có là số có 10 chữ số và bắt đầu bằng 0 hay không
    if (phonePattern.test(phone.value)) {
        return true;
    }
    return false;
}


function placeOrder() {
    if (!checkPhone()) {
        document.querySelector('.error-phone').style.display = 'block';
        return;
    }
    document.querySelector('.error-phone').style.display = 'none';

    let orderId = orderList.length + 1;
    let userInfo = userAccount[index];
    let orderDetails = userAccount[index].cartList;
    userInfo.cartList = [];
    userInfo.userFullName = fullName.value;
    userInfo.userPhone = phone.value;
    userInfo.userAddress = address.value;

    orderList.push({orderID: orderId, orderDate: today, orderStatus: 'processing', userAccount: userInfo, orderDetails: orderDetails});
    localStorage.setItem('orderList', JSON.stringify(orderList));

    userAccount[index].cartList = [];
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    showToast('success', 'Thành công!', 'Đặt hàng thành công!');

    setUserInfo();

    setTimeout(() => {
        window.location.href = 'index.html?order';
    }, 2000);
}





//show order product
//xem chi tiết đơn đã mua khi nhấn nút mũi tên chỉ xuống
function showOrderProduct(id) {
    // Lấy danh sách sản phẩm trong đơn hàng theo ID
    var orderProducts = document.querySelectorAll('.order_detail');
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

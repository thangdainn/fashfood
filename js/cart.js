var showCart = document.querySelector('.cart');
var showOrder = document.querySelector('.order');
var notUser = document.querySelector('.header_none-user');
var showcartQuantity = document.querySelector('.header_cart-quantity');
var mobileQuantity = document.querySelector('.mobile-cart-quantity');

function htmlCartProduct(product) {  
    var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
    var html = `
        <li class="cart_product-item">
            <div class="cart_product-box">
                <div class="cart_product-img-box">
                    <img class="cart_product-img" src="${product.img}">
                    <button class="cart_product-delete" onclick="removeProduct('${tmpName}')">
                        <i class="cart_product-delete-icon fa-solid fa-xmark"></i>
                        Xóa
                    </button>
                </div>
                <div class="cart_product-info-box">
                    <p class="cart_procduct-name">${product.name}</p>
                    <div class="cart_product-price-box">
                        <div class="cart_prodcut-price">
                            <p class="cart_product-current-price">${product.currentPrice}</p>
                            <p class="cart_product-old-price">${product.oldPrice}</p>
                        </div>
                        <div class="cart_product-quantity-box">
                            <button class="cart_product-minus cart_product-quantity-btn" onclick="minusProduct('${tmpName}')">-</button>
                            <span value="${product.quantity}" class="cart_product-quantity">${product.quantity}</span>
                            <button class="cart_product-plus cart_product-quantity-btn" onclick="plusProduct('${tmpName}')">+</button>
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
            <li class="order_item">
                <img src="${array[i].img}" alt="" class="order_item-img">
                <span class="order_item-name">${array[i].name}</span>
                <span class="order_item-price">${array[i].currentPrice}</span>
                <span class="order_item-quantity">${array[i].quantity}</span>
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
        <div class="order_box">
            <div class="order_box-title" onclick="showOrderProduct(${orderItem.orderID})">
                <div class="order_box-item">
                    <i class="uil uil-arrow-down"></i>
                </div>
                <div class="order_box-item">
                    <h3>Đơn hàng #${orderItem.orderID}</h3>
                    <span>${quantity} sản phẩm</span>
                </div>
                <div class="order_box-item">
                    <h3>Tổng tiền</h3>
                    <span>${total}</span>
                </div>
                <div class="order_box-item">
                    <h3>Ngày đặt hàng</h3>
                    <span>${orderItem.orderDate}</span>
                </div>
                <div class="order_box-item">
                    <span class="status ${status}">${statusText}</span>
                </div>
            </div>

            <ul class="order_list scrollbar" value="${orderItem.orderID}">
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
            document.getElementById('account_Model').style.display = 'flex';
        }, 1000);
    } else {
        window.location.href = 'index.html?cart';
    }
}

//Add product to cart
var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var index = localStorage.userAccountIndex;

function addToCart() {
    var addCartBtn = document.querySelector('.product_detail-add-cart');
    var productName = getProductName();

    var cartProduct = products.find(function(product) {
        var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
        return tmpName == productName;
    });

    addCartBtn.addEventListener('click', function() {
        if (notUser.style.display == 'block') {
            showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để thêm thêm vào giỏ!');
            setTimeout(function() {
                document.getElementById('account_Model').style.display = 'flex';
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
        document.querySelector('.cart_wrapper').style.display = 'none';
        document.querySelector('.cart_empty').style.display = 'block';
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

    document.querySelector('.cart_product-list').innerHTML = html.join('');
    document.querySelector('.cart_product-total-price').innerHTML = getTotalPrice(newArray);

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
        document.querySelector('.cart_wrapper').style.display = 'block';
        document.querySelector('.cart_empty').style.display = 'none';
        
        var html = tmpArray.map(function(product) {
            return htmlCartProduct(product);
        });

        document.querySelector('.cart_product-list').innerHTML = html.join('');
        document.querySelector('.cart_product-total-price').innerHTML = getTotalPrice(tmpArray);
    } else {
        document.querySelector('.cart_wrapper').style.display = 'none';
        document.querySelector('.cart_empty').style.display = 'block';
    }
}

//show order
var orderList = JSON.parse(localStorage.getItem('orderList'));
if (orderList == null) {
    orderList = [];
}

function checkUser() {
    if (orderList.length > 0) {
        for (var i = 0; i < orderList.length; i++) {
            if (userAccount[index].userEmail == orderList[i].userAccount.userEmail) {
                return true;
            }
        }
    }
    return false;
}

function showOrderPage() {
    document.querySelector('html').style.backgroundColor = '#f0f0f0';
    document.getElementById('body').style.display = 'none';
    showCart.style.display = 'none';
    showOrder.style.display = 'block';
    
    if (checkUser()) {
        document.querySelector('.order_wrapper').style.display = 'block';
        document.querySelector('.order_empty').style.display = 'none';
        
        var html = orderList.map(function(orderItem) {
            if(orderItem.userAccount.userEmail == userAccount[index].userEmail) {
                var tmpArray = createNewCartProductArray(orderItem.userAccount.cartList);
                return htmlOrderProduct(orderItem, tmpArray);
            }
        });

        document.querySelector('.show-order').innerHTML = html.join('');
    } else {
        document.querySelector('.order_wrapper').style.display = 'none';
        document.querySelector('.order_empty').style.display = 'block';
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
    var orderProducts = document.querySelectorAll('.order_list');
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
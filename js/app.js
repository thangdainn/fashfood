var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;

function ToAdminPage() {
    window.location.href = 'admin.html';
}

function getCategory() {
    var url = window.location.href;
    var s = url.split('?')[1];
    return s;
}

// Convert price
function covertPriceToNumber(price) {
    price = price.replaceAll('.', '').replace('₫', '');
    return Number(price);
}

function convertPriceToString(price) {
    var tmp = Intl.NumberFormat('en-US');
    price = tmp.format(price);
    price = price.replaceAll(',', '.');
    return price + '₫';
}

function reNameCategory(name) {
    if (name == 'chicken') {
        name = 'Gà rán';
    } else if (name == 'drink') {
        name = 'Thức uống';
    } else if (name == 'side-dish') {
        name = 'Phần ăn phụ';
    }
    return name;
}

function prevNameCategory(name) {
    if (name == 'Gà rán') {
        name = 'chicken';
    } else if (name == 'Thức uống') {
        name = 'drink';
    } else if (name == 'Phần ăn phụ') {
        name = 'side-dish';
    }
    return name;
}


// store list products at current page
function createTempArray(start, array) {
    var tmp = [], cnt = 0;
    start = (start - 1) * productPerPage;
    for(var i = start; i < array.length; i++) {
        if (window.location.href.includes('admin')) {
            tmp.push(htmlAdminProduct(array[i]));
        } else {
            tmp.push(htmlProduct(array[i]))
        }
        cnt++;
        if(cnt == productPerPage) 
            break;
    }
    return tmp;
}

function sortID(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i].id > array[j].id) {
                var tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
}

// show toast message
function showToast(type, title, message) {
    var toast = document.querySelector('.toast');

    if (toast) {
        toast.style.display = 'block';

        var toastIcons = {
            success: 'fa-solid fa-circle-check',
            fail: 'fa-solid fa-circle-exclamation'
        };
        var icon = toastIcons[type];    

        toast.innerHTML = `
            <div class="toast-message ${type}">
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>

                <div class="toast__body">
                    <h3>${title}</h3>
                    <p>${message}</p>
                </div>
            </div>
        `;

        setTimeout(function() {
            toast.style.display = 'none';
        }, 2000);
    }
}

var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var index = localStorage.userAccountIndex;

var userInfo = document.querySelector('.user-info');
var adminInterface = document.querySelector('.admin-interface');

// Random orderList(id, date, status, userAccount)
// for (var i = 1; i <= 2; i++) {
//     randomOrder();
// }
function randomOrder() {
    var products = JSON.parse(localStorage.getItem('products'));
    var orderList = JSON.parse(localStorage.getItem('orderList'));
    var userAccount = JSON.parse(localStorage.getItem('userAccount'));
    if (!orderList) {
        return null;
    }

    var randDay = Math.floor(Math.random() * 30) + 1;
    var randMonth = Math.floor(Math.random() * 12) + 1;
    randDay = String(randDay).padStart(2, 0);   
    randMonth = String(randMonth).padStart(2, 0);
    var randomDay = randDay + '/' + randMonth + '/' + '2024';

    var cartListLength = Math.floor(Math.random() * 10) + 1;
    var orderDetails = [];
    for (var i = 0; i < cartListLength; i++) {
        var id = Math.floor(Math.random() * products.length);
        orderDetails.push({
            product: products[id],
            quantity: Math.floor(Math.random() * 10) + 1
        });
    }
    
    // userAccount[1].cartList = orderDetail;
    orderList.push({orderID: '', orderDate: randomDay, orderStatus: 'done', userAccount: userAccount[1], orderDetails: orderDetails});
    localStorage.setItem('orderList', JSON.stringify(orderList));
}

window.onload = function () {
    var url = window.location.href;
    var s = url.split('?');

    if (url.includes('admin')) {
        console.log('admin');
    } else {
        if (s[1] != undefined) {
            if (s[1].split('&')[1] == undefined){
                if (s[1] == 'order') {
                    showOrderPage();
                } else if (s[1] == 'cart') {
                    showCartProduct();
                } else if (s[1] == 'search') {
                    showSearchProduct(1);
                } else {
                    showProduct(1);
                }
            } else {
                showProductDetail();
            }
        } else {
            showProduct(1);
        }
    }
}
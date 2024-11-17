var orderList = JSON.parse(localStorage.getItem('orderList'));
var orderEmtpyPage = document.querySelector('.admin__order-empty');
var showOrderList = document.querySelector('.admin__order-wrapper');

function htmlAdminOrder(orderItem, array) {
    var total = getTotalPrice(array);
    var quantity = 0;

    var productList = '';
    for (var i = 0; i < array.length; i++) {
        productList +=  `
            <li class="order__item">
                <img src="${array[i].product.img}" alt="" class="order__item-img">
                <span class="order__item-name">${array[i].product.name}</span>
                <span class="order__item-price">${array[i].product.currentPrice}</span>
                <span class="order__item-quantity">${array[i].quantity}</span>
            </li>
        `;
        quantity += array[i].quantity;
    }

    var status, switchActive;
    if (orderItem.orderStatus == 'processing') {
        status = 'Đang xử lý';
        switchActive = '';
    } else {
        status = 'Đã xử lý';
        switchActive = 'active';
    }

    var html = `
        <div class="order__box">
            <div class="order__box-title" onclick="showAdminOrderDetail(${orderItem.orderID})">
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
                    <h3>Tên người dùng</h3>
                    <span>${orderItem.userAccount.userName}</span>
                </div>
                <div class="order__box-item">
                    <h3>Ngày đặt hàng</h3>
                    <span>${orderItem.orderDate}</span>
                </div>
                <div class="order__box-item order__status">
                    <span class="status ${switchActive}">${status}</span>
                </div>
                <div class="order__box-item switch-status ${switchActive}" value="${orderItem.orderID}">
                    <div class="switch-status-btn ${switchActive}">
                        <span class="${switchActive}"></span>
                    </div>
                </div>
            </div>

            <div class="order_detail scrollbar" value="${orderItem.orderID}">
                <div class="order__user-info">
                    <h3>THÔNG TIN KHÁCH HÀNG:</h3>
                    <div class="order__user-info-box">
                        <span><b>Họ tên:</b> ${orderItem.userAccount.userFullName}</span>
                        <span><b>Địa chỉ:</b> ${orderItem.userAccount.userAddress}</span>
                        <span><b>Số điện thoại:</b> ${orderItem.userAccount.userPhone}</span>
                    </div>
                </div>
                <ul class="admin-order__list">
                    ${productList}
                </ul>
            </div>
        </div>
    `;
    return html;
}

setEndDate();
function setEndDate() {
    var endDate = document.getElementById('end-date');
    endDate.value = yyyy + '-' + mm + '-' + dd;
}

function getOrderInDate() {
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;

    startDate = new Date(startDate);
    endDate = new Date(endDate)

    let orderInDate = orderList.filter(function(order) {
        let orderDate = new Date(order.orderDate.split('/').reverse().join('-'));
        return orderDate >= startDate && orderDate <= endDate;
    });

    return orderInDate;
}

function getStatusOrder(status) {
    var orderStatus;
    var orderListTmp = getOrderInDate();
    if (status == 'all') {
        orderStatus = orderListTmp;
    } else {
        orderStatus = orderListTmp.filter(function(order) {
            if (order.orderStatus == status) {
                return order;
            }
        });
    }
    return orderStatus;
}

function showAdminOrder() {
    showCurrentContent('order');
    orderPage.style.display = 'block';
    productPage.style.display = 'none';
    statisticsPage.style.display = 'none';
    userPage.style.display = 'none';

    
    var status = document.querySelector('.admin__order-status select');
    let orders = orderList;
    for (var i = 0; i < status.options.length; i++) {
        if (status.options[i].selected == true) {
            orders = getStatusOrder(status.options[i].value);
            break;
        }
    }

    if (orders && orders.length > 0) {
        orderEmtpyPage.style.display = 'none';
        document.querySelector('.admin__content-header h3').innerHTML = 'Quản lý đơn hàng';

        orders.sort((a, b) => {
            let dateA = new Date(a.orderDate.split('/').reverse().join('-'));
            let dateB = new Date(b.orderDate.split('/').reverse().join('-'));
            return dateB - dateA;
        });

        var html = orders.map(function(orderItem) {
            return htmlAdminOrder(orderItem, orderItem.orderDetails);
        });

        if (html[0] == undefined) {
            orderEmtpyPage.style.display = 'block';
            showOrderList.style.display = 'none';
        } else {
            orderEmtpyPage.style.display = 'none';
            showOrderList.style.display = 'block';
            showOrderList.innerHTML = html.join('');   
        }

    } else {
        orderEmtpyPage.style.display = 'block';
        showOrderList.style.display = 'none';
    }

    switchStatus();
}

function showAdminOrderDetail(id) {
    var showProduct;
    var orderProducts = document.querySelectorAll('.order_detail');

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

// Switch status    
function switchStatus() {
    var orderBox = document.querySelectorAll('.order__box');
    
    orderBox.forEach(function(item, index) {
        var switchBox = item.querySelector('.switch-status');
        var switchBtn = item.querySelector('.switch-status-btn');
        var switchMove = item.querySelector('.switch-status-btn span');
        var status = item.querySelector('.status');

        switchBox.addEventListener('click', function(event) {
            event.stopPropagation();
            if (switchBox.classList.contains('active')) {
                showToast('fail', 'Thất bại', 'Không được hủy đơn hàng đã xử lý!');
            } else {
                switchBox.classList.add('active');
                switchBtn.classList.add('active');
                switchMove.classList.add('active');

                orderList[index].orderStatus = 'done';
                status.innerHTML = 'Đã xử lý';
                status.classList.add('active');
            }
            localStorage.setItem('orderList', JSON.stringify(orderList));
        })
    })
}
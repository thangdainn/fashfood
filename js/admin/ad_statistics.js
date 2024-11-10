var orderList = JSON.parse(localStorage.getItem('orderList'));
var products = JSON.parse(localStorage.getItem('products'));
if (!orderList) {
    orderList = [];
}
if (!products) {
    products = [];
}

var productContentElm = document.querySelector('.admin__statis-product');
var orderContentElm = document.querySelector('.admin__statis-customer');

var isProductDate = false;
var isCustomerDate = false;

function getOrderQuantity() {
    return orderList.length;
}

function convertPriceToString(price) {
    return price.toLocaleString('en-US').replace(/,/g, '.');
}

function convertPrice(price) {
    return parseFloat(price.replace(/\./g, ''));
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

setEndDate();
function setEndDate() {
    var endDate = document.getElementById('statis__product-end-date');
    endDate.value = yyyy + '-' + mm + '-' + dd;
    var endDate = document.getElementById('statis__customer-end-date');
    endDate.value = yyyy + '-' + mm + '-' + dd;
}

window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function showProductStatistics(e) {
    addClassActive(e);
    productContentElm.style.display = 'block';
    orderContentElm.style.display = 'none';
    showChart();
}

function showCustomerStatistics(e) {
    addClassActive(e);
    productContentElm.style.display = 'none';
    orderContentElm.style.display = 'block';
    
    let customerStatistics = getCustomerStatistics(orderList);

    showCustomerChart(customerStatistics);
    topCustomers = getTopCustomers(customerStatistics);
    displayTopCustomers(topCustomers);
}


showStatisticsPage();
function showStatisticsPage() {
    statisticsPage.style.display = 'block';
    orderPage.style.display = 'none';
    productPage.style.display = 'none';
    userPage.style.display = 'none';

    showCurrentContent('statistics');
    document.querySelector('.admin__content-header h3').innerHTML = 'Thống kê';
    var statisSumInfo = document.querySelectorAll('.admin__statis-sum-box-info p');
    var orderQuantity = getOrderQuantity();
    var productQuantity = getStatisticProductQuantity();
    var total = getTotalNetSales();

    statisSumInfo[0].innerHTML = `Tổng: ${orderQuantity} đơn hàng`;
    statisSumInfo[1].innerHTML = `Tổng: ${productQuantity} sản phẩm`;
    statisSumInfo[2].innerHTML = `Tổng: ${total}`;

    showChart();
}


function showChart() {
    let startDate = document.getElementById('statis__product-start-date').value;
    let endDate = document.getElementById('statis__product-end-date').value;
    isProductDate = true;
    showListProductStatistic(getStatisticOrderInDate(startDate, endDate));
}

function htmlStatisticProduct(product) {
    let html = `
        <tbody class="admin__product-item">
            <tr>
                <td>
                    <img src="${product.img}" alt="">
                </td>
                <td>#${product.id}</td>
                <td class="td-name">${product.name}</td>
                <td>${product.quantity}</td>
                <td>${product.netSales}₫</td>
                <td>
                    <button class="btn btn-primary" onclick="showProductOrders('${product.id}')">Xem</button>
                </td>
            </tr>
        </tbody>
    `;
    return html;
}

function showProductOrders(productId) {
    let productStatistic = [];
    if (isProductDate) {
        let startDate = document.getElementById('statis__product-start-date').value;
        let endDate = document.getElementById('statis__product-end-date').value;
        productStatistic = getProductStatistic(getStatisticOrderInDate(startDate, endDate));
    } else {
        productStatistic = getProductStatistic(orderList);
    }

    let product = productStatistic.find(p => p.id == productId);
    
    const orderListElement = document.querySelector('.admin__statis-order-list');
    if (product == undefined || product.orders.length == 0) {
        showToast('fail', 'Không có đơn hàng', 'Sản phẩm này chưa được mua');
        return;
    }
    orderListElement.innerHTML = htmlStatisticOrders(product.orders);
    
    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';
}

function showListProductStatistic(orders) {
    let html = [];
    let productStatistic = getProductStatistic(orders);
    productStatistic.sort((a, b) => b.quantity - a.quantity);
    
    productStatistic = pushProductNotBeBought(productStatistic, products);

    productStatistic.forEach(function(product) {
        html.push(htmlStatisticProduct(product));
    })
    
    showProductChart(productStatistic);
    document.querySelector('.admin__statis-product-item').innerHTML = html.join('');
}

function getProductStatistic(orderList) {
    var productStatistic = [];
    var productsMap = new Map();
    var tempOrder;
    orderList.forEach(order => {
        if (order.orderStatus == 'processing') {
            return;
        }
        tempOrder = order;
        
        
        order.orderDetails.forEach(item => {
            if (productsMap.has(item.product.id)) {
                let existingProduct = productsMap.get(item.product.id);
                existingProduct.quantity ++;
                existingProduct.netSales += convertPrice(item.product.currentPrice);
                existingProduct.orders.push(tempOrder);
            } else {
                productsMap.set(item.product.id, {
                    id: item.product.id,
                    name: item.product.name,
                    img: item.product.img,
                    quantity: item.quantity,
                    netSales: convertPrice(item.product.currentPrice),
                    orders: [tempOrder]
                });
            }
        });
    });

    productsMap.forEach(product => {
        productStatistic.push({
            id: product.id,
            name: product.name,
            img: product.img,
            quantity: product.quantity,
            netSales: convertPriceToString(product.netSales),
            orders: product.orders
        });
    });
    return productStatistic;
}

function getStatisticProductQuantity() {
    let productStatistic = getProductStatistic(orderList);
    let quantity = 0;
    productStatistic.forEach(product => {
        quantity += product.quantity;
    });
    return quantity;
}

function getTotalNetSales() {
    let productStatistic = getProductStatistic(orderList);
    let totalNetSales = 0;
    productStatistic.forEach(product => {
        totalNetSales += convertPrice(product.netSales);
    });
    return convertPriceToString(totalNetSales);
}

function getStatisticOrderInDate(startDate, endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);

    let orderInDate = orderList.filter(function(order) {
        if (order.orderStatus == 'processing') {
            return;
        }
        let orderDate = new Date(order.orderDate.split('/').reverse().join('-'));
        return orderDate >= startDate && orderDate <= endDate;
    });

    return orderInDate;
}

function pushProductNotBeBought(productStatistic, products) {
    products.forEach(product => {
        if (!productStatistic.find(p => p.id == product.id)) {
            productStatistic.push({
                id: product.id,
                name: product.name,
                img: product.img,
                quantity: 0,
                netSales: '0',
                orders: []
            });
        }
    });
    return productStatistic;
}


function htmlTopCustomer(customer) {
    let html = `
        <tbody class="admin__product-item">
            <tr>
                <td>${customer.fullName}</td>
                <td>${customer.email}</td>
                <td>${convertPriceToString(customer.totalRevenue)}₫</td>
                <td>
                    <button class="btn btn-primary" onclick="showCustomerOrders('${customer.email}')">Xem</button>
                </td>
            </tr>
        </tbody>
    `;
    return html;
}

function showCustomerOrders(email) {
    let customers = [];
    if (isCustomerDate) {
        let startDate = document.getElementById('statis__customer-start-date').value;
        let endDate = document.getElementById('statis__customer-end-date').value;
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        customers = topCustomers.find(c => {
            return c.email === email && c.orders.some(order => {
                let orderDate = new Date(order.orderDate.split('/').reverse().join('-'));
                return orderDate >= startDate && orderDate <= endDate;
            });
        });
    } else {
        customers = topCustomers.find(c => c.email === email);
    }
        
    const orderListElement = document.querySelector('.admin__statis-order-list');
    orderListElement.innerHTML = htmlStatisticOrders(customers.orders);

    const modal = document.getElementById('orderModal');
    modal.style.display = 'block';
}

function htmlStatisticOrders(orders) {
    let html = orders.map(order => `
        <div class="order__box-title">
            <div class="order__box-item">
                <h3>Đơn hàng #${order.orderID}</h3>
            </div>
            <div class="order__box-item">
                <h3>Tổng tiền</h3>
                <span>${getTotalPrice(order.orderDetails)}₫</span>
            </div>
            <div class="order__box-item">
                <h3>Ngày đặt hàng</h3>
                <span>${order.orderDate}</span>
            </div>
        </div>
    `).join('');
    return html;
}

function displayTopCustomers(topCustomers) {
    const customerListElement = document.querySelector('.admin__statis-customer-item');
    let html = [];
    topCustomers.forEach(customer => {
        html.push(htmlTopCustomer(customer));
    });
    customerListElement.innerHTML = html;
}

function getCustomerStatistics(orderList) {
    let customerMap = new Map();

    orderList.forEach(order => {
        if (order.orderStatus == 'done') {
            let customerEmail = order.userAccount.userEmail;
            let orderTotal = order.orderDetails.reduce((total, item) => {
                return total + convertPrice(item.product.currentPrice);
            }, 0);

            if (customerMap.has(customerEmail)) {
                customerMap.get(customerEmail).totalRevenue += orderTotal;
                customerMap.get(customerEmail).orders.push(order);
            } else {
                customerMap.set(customerEmail, {
                    email: customerEmail,
                    fullName: order.userAccount.userFullName,
                    totalRevenue: orderTotal,
                    orders: [order]
                });
            }
        }
    });

    return Array.from(customerMap.values());
}

function getTopCustomers(customerStatistics) {
    return customerStatistics.sort((a, b) => b.totalRevenue - a.totalRevenue).slice(0, 5);
}



function showCustomerOrdersByDate() {
    let startDate = document.getElementById('statis__customer-start-date').value;
    let endDate = document.getElementById('statis__customer-end-date').value;

    isCustomerDate = true;

    let orderStatistics = getStatisticOrderInDate(startDate, endDate);
    let customerStatistics = getCustomerStatistics(orderStatistics);

    showCustomerChart(customerStatistics);
    topCustomers = getTopCustomers(customerStatistics);
    displayTopCustomers(topCustomers);
}

function addClassActive(e) {
    let contentBtn = document.querySelector('.admin__statis-filter .active');
    contentBtn.classList.remove('active');
    e.target.classList.add('active');
}




var productBarChart;
function showProductChart(statisticProducts) {
    const productBarChartCtx = document.getElementById('productBarChart').getContext('2d');
    if (productBarChart) {
        productBarChart.destroy();
    }
    productBarChart = new Chart(productBarChartCtx, {
        type: 'bar',
        data: {
            labels: statisticProducts.map(product => product.id),
            datasets: [{
                label: 'Số lượng bán ra',
                data: statisticProducts.map(product => product.quantity),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Tổng tiền thu được',
                data: statisticProducts.map(product => convertPrice(product.netSales)),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


var customerBarChart;
function showCustomerChart(statisticCustomers) {
    const customerBarChartCtx = document.getElementById('customerBarChart').getContext('2d');
    if (customerBarChart) {
        customerBarChart.destroy();
    }
    customerBarChart = new Chart(customerBarChartCtx, {
        type: 'bar',
        data: {
            labels: statisticCustomers.map(customer => customer.fullName),
            datasets: [{
                label: 'Doanh thu',
                data: statisticCustomers.map(customer => customer.totalRevenue),
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}
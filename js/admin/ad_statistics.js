var orderList = JSON.parse(localStorage.getItem('orderList'));
if (!orderList) {
    orderList = [];
}

function getOrderQuantity() {
    return orderList.length;
}

// function getOrderProductQuantity() {
//     var quantity = 0;
//     orderList.forEach(function(item) {
//         var tmpArray = createNewCartProductArray(item.userAccount.cartList);
//         tmpArray.forEach(function(product) {
//             quantity += product.quantity;
//         })
//     });
//     return quantity;
// }

// function getTotalOrderPrice() {
//     var totalOrderPrice = 0;
//     orderList.forEach(function(item) {
//         var tmpArray = createNewCartProductArray(item.userAccount.cartList);
//         totalOrderPrice += covertPriceToNumber(getTotalPrice(tmpArray));
//     });
//     return converPriceToString(totalOrderPrice);
// }

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
}

// Statistics chart
// var orderByMonth = [], productByMonth = [], totalByMonth = [];
// var orderSum = getOrderQuantity();
// var productSum = getOrderProductQuantity();
// var totalSum = getTotalOrderPrice();

// function htmlChart(orderPercent, productPercent, totalPercent, month) {
//     var tmp1 = orderPercent, tmp2 = productPercent, tmp3 = totalPercent;
//     if (tmp1 != 0 && tmp2 != 0 && tmp3 != 0 && tmp1 <= 40 && tmp2 <= 40 && tmp3 <= 40) {
//         tmp1 += 40;
//         tmp2 += 40;
//         tmp3 += 40;
//     }

//     var html = `
//         <div class="admin__statis-chart-item">
//             <div class="admin__statis-chart-box">
//                 <div style="--percent-height: ${tmp1}%">
//                     <span class="info-quantity">${orderPercent.toFixed(2)}</span>
//                 </div>
//                 <div style="--percent-height: ${tmp2}%">
//                     <span class="info-quantity">${productPercent.toFixed(2)}</span>
//                 </div>
//                 <div style="--percent-height: ${tmp3}%">
//                     <span class="info-quantity">${totalPercent.toFixed(2)}</span>
//                 </div>
//             </div>
//             <span class="admin__statis-chart-month">Tháng ${month}</span>
//         </div>
//     `;
//     return html;
// }   

// function getOrderByCategory(category) {
//     var categoryOrder = [];
//     if (category != 'all') {
//         for (var i = 0; i < orderList.length; i++) {
//             for (var j = 0; j < orderList[i].userAccount.cartList.length; j++) {
//                 if (orderList[i].userAccount.cartList[j].category.toLowerCase().replaceAll(' ', '-') == category) {
//                     categoryOrder.push(orderList[i]);
//                     break;
//                 }
//             }
//         }
//     } else {
//         categoryOrder = orderList;
//     }
//     return categoryOrder;
// }

// function getOrderByMonth(month, category) {
//     var categoryOrder = getOrderByCategory(category);
//     var orderByMonth = categoryOrder.filter(function(item) {
//         return item.orderDate.split('/')[1] == month;
//     })
//     return orderByMonth.length;
// }

// function getProductByMonth(month, category) {
//     var categoryOrder = getOrderByCategory(category);

//     var orderByMonth = categoryOrder.filter(function(item) {
//         return item.orderDate.split('/')[1] == month;
//     })

//     var quantity = 0;
//     orderByMonth.forEach(function(item) {
//         var tmpArray = createNewCartProductArray(item.userAccount.cartList);
//         tmpArray.forEach(function(product) {
//             if (category == 'all') {
//                 quantity += product.quantity;
//             } else if (product.category.toLowerCase().replaceAll(' ', '-') == category) {
//                 quantity += product.quantity;
//             }
//         })
//     })
//     return quantity;
// }

// function getToTalByMonth(month, category) {
//     var categoryOrder = getOrderByCategory(category);

//     var orderByMonth = categoryOrder.filter(function(item) {
//         return item.orderDate.split('/')[1] == month;
//     })

//     var totalOrderPrice = 0;
//     orderByMonth.forEach(function(item) {
//         var tmpArray = createNewCartProductArray(item.userAccount.cartList);
//         if (category == 'all') {
//             totalOrderPrice += covertPriceToNumber(getTotalPrice(tmpArray));
//         } else {
//             tmpArray.forEach(function(product) {
//                 if (product.category.toLowerCase().replaceAll(' ', '-') == category) {
//                     totalOrderPrice += covertPriceToNumber(product.currentPrice) * product.quantity;
//                 }
//             }); 
//         }
//     });
//     return converPriceToString(totalOrderPrice);
// }

// function getDataByMonth(category) {
//     orderByMonth = [], productByMonth = [], totalByMonth = [];
//     for (var i = 1; i <= 12; i++) {
//         orderByMonth.push(getOrderByMonth(i, category));
//         productByMonth.push(getProductByMonth(i, category));
//         totalByMonth.push(getToTalByMonth(i, category));
//     }
// }

showChart('all');
function showChart(category) {
    // if (orderList.length == 0) {
    //     var emptyNoti = document.createElement('h3');
    //     emptyNoti.innerHTML = 'Không có dữ liệu';
    //     emptyNoti.style.textAlign = 'center';
    //     emptyNoti.style.fontSize = '32px';
    //     emptyNoti.style.margin = '32px auto';
    //     document.querySelector('.admin__statis-chart').appendChild(emptyNoti);

    // } else {
        // var orderPercent, productPercent, totalPercent;
        // var orderSum = getOrderQuantity(), productSum = getOrderProductQuantity(), totalSum = covertPriceToNumber(getTotalOrderPrice());
        // var html = [];
        // getDataByMonth(category);

        // for (var i = 1; i <= 12; i++) {
        //     orderPercent = (orderByMonth[i - 1] * 100) / orderSum;
        //     productPercent = (productByMonth[i - 1] * 100) / productSum;
        //     totalByMonth[i - 1] = covertPriceToNumber(totalByMonth[i - 1]);
        //     totalPercent = (totalByMonth[i - 1] * 100) / totalSum;
        //     html.push(htmlChart(orderPercent, productPercent, totalPercent, i));
        // }
    
        // document.querySelector('.admin__statis-chart').innerHTML = html.join('');
        if (category == 'all') {
            showListProductStatistic(orderList);
        } else {
            showListProductStatistic(getStatisticOrderInDate());
        }
        
    // }
}

function getProductStatistic(orderList) {
    var productStatistic = [];
    var productsMap = new Map();

    orderList.forEach(order => {
        if (order.orderStatus == 'processing') {
            return;
        }
        order.orderDetails.forEach(item => {
            
            if (productsMap.has(item.product.id)) {
                let existingProduct = productsMap.get(item.product.id);
                existingProduct.quantity ++;
                existingProduct.netSales += parseFloat(item.product.currentPrice.replace(/\./g, ''));
            } else {
                productsMap.set(item.product.id, {
                    id: item.product.id,
                    name: item.product.name,
                    img: item.product.img,
                    quantity: item.quantity,
                    netSales: parseFloat(item.product.currentPrice.replace(/\./g, ''))
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
            netSales: convertPriceToString(product.netSales)
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
        totalNetSales += parseFloat(product.netSales.replace(/\./g, ''));
    });
    return convertPriceToString(totalNetSales);
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
            </tr>
        </tbody>
    `;
    return html;
}

function showListProductStatistic(orders) {
    let html = [];
    let productStatistic = getProductStatistic(orders);
    if (productStatistic.length == 0) {
        var emptyNoti = document.createElement('h3');
        emptyNoti.innerHTML = 'Không có dữ liệu';
        emptyNoti.style.textAlign = 'center';
        emptyNoti.style.fontSize = '32px';
        emptyNoti.style.margin = '32px auto';
        document.querySelector('.admin__statis-product-item').appendChild(emptyNoti);
        return;
    }
    productStatistic.sort((a, b) => b.quantity - a.quantity);
    
    productStatistic.forEach(function(product) {
        html.push(htmlStatisticProduct(product));
    })
    document.querySelector('.admin__statis-product-item').innerHTML = '';
    document.querySelector('.admin__statis-product-item').innerHTML = html.join('');
}



function convertPriceToString(price) {
    return price.toLocaleString('en-US').replace(/,/g, '.');
}

function getStatisticOrderInDate() {
    let startDate = document.getElementById('statis__start-date').value;
    let endDate = document.getElementById('statis__end-date').value;

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

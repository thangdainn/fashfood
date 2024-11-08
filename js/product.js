var products = JSON.parse(localStorage.getItem('products'));
if (!products) {
    products = [
        //chickens
        {id: 'chicken001', category: 'chicken', name: '1 miếng Gà Rán', img: './img/product/chickens/x1-ga-ran.png', currentPrice: '37.000', oldPrice: '', detailCategory: 'Đùi gà'},
        {id: 'chicken002', category: 'chicken', name: '3 miếng Gà Rán', img: './img/product/chickens/x3pcs_chicken.png', currentPrice: '69.000', oldPrice: '75.000₫', detailCategory: 'Đùi gà'},
        {id: 'chicken003', category: 'chicken', name: '6 miếng Gà Rán', img: './img/product/chickens/x6-ga-ran.png', currentPrice: '125.000', oldPrice: '', detailCategory: 'Đùi gà', state: 'new'},
        {id: 'chicken004', category: 'chicken', name: '3 miếng Cánh Gà', img: './img/product/chickens/x3-canh-ga-ran.png', currentPrice: '103.000', oldPrice: '', detailCategory: 'Cánh gà', state: 'new'},
        {id: 'chicken005', category: 'chicken', name: '10 miếng Cánh Gà', img: './img/product/chickens/x10-canh-ga.png', currentPrice: '179.000', oldPrice: '', detailCategory: 'Cánh gà', state: 'new'},
        {id: 'chicken006', category: 'chicken', name: '6 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x6-mieng-Ga-vien.png', currentPrice: '49.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken007', category: 'chicken', name: '9 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x9-mieng-Ga-vien.png', currentPrice: '69.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken008', category: 'chicken', name: '20 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken009', category: 'chicken', name: '2 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken010', category: 'chicken', name: '22 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken011', category: 'chicken', name: '21 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken012', category: 'chicken', name: '22 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken013', category: 'chicken', name: '23 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken014', category: 'chicken', name: '24 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken015', category: 'chicken', name: '25 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken016', category: 'chicken', name: '2 miếng Gà Viên Vui Vẻ', img: './img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        //side-dishes
        {id: 'sidedish001', category: 'side-dish', name: 'Burger Bò phô mai đặc biệt', img: './img/product/side-dishes/burger-dacbiet.png', currentPrice: '56.000', oldPrice: '62.000₫', detailCategory: 'Burger', state: 'new'},
        {id: 'sidedish002', category: 'side-dish', name: 'Burger Gà phô-mai đặc biệt', img: './img/product/side-dishes/burger-ga-dacbiet.png', currentPrice: '69.000', oldPrice: '', detailCategory: 'Burger'},
        {id: 'sidedish003', category: 'side-dish', name: 'Burger Gà Nhỏ Mayo', img: './img/product/side-dishes/burger-ga.png', currentPrice: '36.000', oldPrice: '', detailCategory: 'Burger'},
        {id: 'sidedish004', category: 'side-dish', name: 'Khoai Tây Chiên (size nhỏ) - 206 Kcal', img: './img/product/side-dishes/khoai-tay-chien-nho.png', currentPrice: '19.000', oldPrice: '', detailCategory: 'Khoai tây chiên'},
        {id: 'sidedish005', category: 'side-dish', name: 'Khoai Tây Chiên (size lớn)', img: './img/product/side-dishes/khoai-tay-chien-lon.png', currentPrice: '39.000', oldPrice: '', detailCategory: 'Khoai tây chiên'},
        //drinks
        {id: 'drink001', category: 'drink', name: 'Fanta®', img: './img/product/drinks/fanta.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
        {id: 'drink002', category: 'drink', name: 'Nước suối', img: './img/product/drinks/dasani_water.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
        {id: 'drink003', category: 'drink', name: 'Sprite®', img: './img/product/drinks/sprite.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
        {id: 'drink004', category: 'drink', name: 'Coca-Cola®', img: './img/product/drinks/cocacola.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
    
    ];
    localStorage.setItem('products', JSON.stringify(products));
}

// function htmlProduct(product) {
//     var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
//     var html = `
//         <div class="col l-3 m-4 c-6">
//             <div class="product__item">
//                 <a href="index.html?${tmpName}" class="product__item-link">
//                     <img src = "${product.img}" class = "product__item-img"></img>
//                     <h3 class="product__item-name">${product.name}</h3>
//                     <div class="product__item-price">
//                         <p class="product__item-current-price">${product.currentPrice}đ</p>
//                         <p class="product__item-old-price">${product.oldPrice}</p>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     `;
//     return html;
// }
function htmlProduct(product) {
    var tmpName = product.name.replace(/"/g, '').replace(/ /g, '-');
    return `
        <div class="col l-3 m-4 c-6">
            <div class="product__item">
                <a href="index.html?productName=${tmpName}" class="product__item-link">
                    <img src="${product.img}" class="product__item-img" alt="${product.name}">
                    <h3 class="product__item-name">${product.name}</h3>
                    <div class="product__item-price">
                        <p class="product__item-current-price">${product.currentPrice}đ</p>
                        <p class="product__item-old-price">${product.oldPrice || ''}</p>
                    </div>
                </a>
            </div>
        </div>
    `;
}





function showCurrentNavbar(str) {
    var currentNavbar = document.querySelectorAll('.header__navbar-item-link');
    for (var i = 0; i < currentNavbar.length; i++) {
        currentNavbar[i].classList.remove('header__navbar-item-link--active');
    }
    for (var i = 0; i < currentNavbar.length; i++) {
        if (currentNavbar[i].getAttribute('data-value').toLowerCase() == str.toLowerCase()) {
            currentNavbar[i].classList.add('header__navbar-item-link--active');
            break;
        }
    }
}

// visible filter is selected
function showCurrentFilter(name) {
    var currentFilter = document.querySelectorAll('.product__filter-item-btn');
    for (var i = 0; i < currentFilter.length; i++) {
        currentFilter[i].classList.remove('product__filter-item-btn--active');
    }
    for (var i = 0; i < currentFilter.length; i++) {
        if (currentFilter[i].innerText == name) {
            currentFilter[i].classList.add('product__filter-item-btn--active');
            break;
        }
    }
}

// show list filter of product
function showFilter(category) {
    var productArray = products.filter(function(product) {
        return product.category == category;
    });
    var filterArray = productArray.map(function(product) {
        return product.detailCategory;
    });
    filterArray = [...new Set(filterArray)];
    if (filterArray.length == 1) {
        document.querySelector('.product__filter').style.display = 'none';
        return;
    }
    var s = `
        <li class="product__filter-item">
            <button class="product__filter-item-btn product__filter-item-btn--active" onclick="showProduct(1)">Tất cả</button>
        </li>
    `;

    var html = filterArray.map(function(filter) {
        return `
            <li class="product__filter-item">
                <button class="product__filter-item-btn" onclick="showFilterProduct('${category}', '${filter}', 1)">${filter}</button>
            </li>
        `;
    });
    s = s + html.join('');
    document.querySelector('.product__filter').innerHTML = s;
    
}

// show products in current page, filters
function showFilterProduct(category, filterName, start) {
    var productArr = products.filter(function(product) {
        return product.category == category;
    });
    var filterArr = productArr.filter(function(product) {
        return product.detailCategory == filterName;
    })
    localStorage.setItem('filterName', filterName);

    showCurrentFilter(filterName);
    showFilterPagination(filterArr, category, filterName);
    showCurrentPage(start);

    var filter = document.querySelectorAll('.product__filter-item-btn');
    var arr;
    for (var i = 0; i < filter.length; i++) {
        if (filter[i].innerText == filterName) {
            arr = createTempArray(start, filterArr);
            break;
        }
    }
    document.getElementById('show-product').innerHTML = arr.join('');
    document.querySelector('.product__header').scrollIntoView();

    // handle page(disable prev, next)
    Pagination();
}

function showProduct(start) {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    var category = getCategory();
    var productArray;
    if (category != undefined && category != '') {
        productArray = products.filter(function(product) {
            return product.category == category;
        });
        document.querySelector('.slider').style.display = 'none';

        showCurrentNavbar(category);
        
        showFilter(category);

        paginationElm.style.display = 'flex';
        showPagination(productArray);
        showCurrentPage(start);

        Pagination();

    } else {
        document.querySelector('.slider').style.display = 'block';
        productArray = products.filter(function(product) {
            return product.state == 'new';
        });
        category = 'Món mới';
        paginationElm.style.display = 'none';
    }
    localStorage.setItem('filterName', "Tất cả");

    var arr = createTempArray(start, productArray); 
    document.getElementById('body').style.display = 'block';
    document.getElementById('show-product').innerHTML = arr.join('');
    if (category != 'Món mới'){
        document.querySelector('.product__header').scrollIntoView();
    }
    
}

function showProductDetail() {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    // Parse the product name from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');

    var detailProduct = products.find(function(product) {
        // Replace spaces with '-' for matching purposes
        return product.name.replace(/ /g, '-') === productName;
    });

    if (!detailProduct) {
        console.error("Product not found");
        return;
    }

    // Generate the detailed product HTML
    var html = `
        <div class="col l-6 m-12 c-12">
            <div class="product__detail-img-box">
                <img src="${detailProduct.img}" alt="${detailProduct.name}" class="product__detail-img">
            </div>
        </div>
        <div class="col l-6 m-12 c-12">
            <div class="product__detail-info">
                <span class="product__detail-name">${detailProduct.name}</span>
                <div class="product__detail-price">
                    <p class="product__detail-current-price">${detailProduct.currentPrice}đ</p>
                    <p class="product__detail-old-price">${detailProduct.oldPrice || ''}</p>
                </div>
                <div class="product__detail-policy">
                    <div class="product__detail-policy-item">
                        <i class="uil uil-truck"></i>
                        <span class="product__detail-policy-text">Giao hàng nhanh trong vòng 30 phút</span>
                    </div>
                    <!-- Additional policy items -->
                </div>
                   <div class="product__detail-pay">
                    <button class="product__detail-add-cart">Thêm vào giỏ</button>
                    <button class="product__detail-buy">Mua ngay</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('body').style.display = 'none';
    document.getElementById('show-product-detail').innerHTML = html;

    //Xử lý buy, addcart
    haveToLogin();
    addToCart();
}



//này để chặn không cho xem giỏ hàng khi chưa đăng nhập 
function haveToLogin() {
    var buyBtn = document.querySelector('.product__detail-buy');
    var notUser = document.querySelector('.header__none-user');

    buyBtn.addEventListener('click', function() {
        if (notUser.style.display == 'block') {
            showToast('fail', 'Cảnh báo!', 'Vui lòng đăng nhập để mua sản phẩm!');
            setTimeout(function() {
                document.getElementById('account__modal').style.display = 'flex';
            }, 1000);
        } else {
            getCurrentProduct();
            window.location.href = 'index.html?cart';
        }
    });
}

function getCurrentProduct() {
    var url = window.location.href;
    var s = url.split('?')[2];

    var userAccount = JSON.parse(localStorage.getItem('userAccount'));
    var index = localStorage.userAccountIndex;
    var cartProduct = products.find(function(product) {
        return product.name.replace('"', '').replaceAll(' ', '-') == s;
    })

    userAccount[index].cartList.push(cartProduct);
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}

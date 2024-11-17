var products = JSON.parse(localStorage.getItem('products'));
if (!products) {
    products = [
        //chickens
<<<<<<< HEAD
        {id: 'iphone001', category: 'chicken', name: 'iPhone 14 Pro Max 256GB', img: './img/product/iphone/iphone001.png', currentPrice: '36.990.000₫', oldPrice: '', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone002', category: 'chicken', name: 'iPhone 14 Pro 128GB', img: './img/product/iphone/iphone002.png', currentPrice: '30.490.000₫', oldPrice: '30.990.000₫', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone003', category: 'chicken', name: 'iPhone 14 Plus 128GB', img: './img/product/iphone/iphone003.png', currentPrice: '26.490.000₫', oldPrice: '27.990.000₫', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone004', category: 'chicken', name: 'iPhone 14 128GB', img: './img/product/iphone/iphone004.png', currentPrice: '23.490.000₫', oldPrice: '24.990.000₫', detailCategory: 'iPhone 14', state: 'new'},
        {id: 'iphone005', category: 'chicken', name: 'iPhone 13 Pro Max 256GB', img: './img/product/iphone/iphone005.png', currentPrice: '29.990.000₫', oldPrice: '36.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone006', category: 'chicken', name: 'iPhone 13 Pro 128GB', img: './img/product/iphone/iphone006.png', currentPrice: '24.990.000₫', oldPrice: '30.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone007', category: 'chicken', name: 'iPhone 13 128GB', img: './img/product/iphone/iphone007.png', currentPrice: '19.990.000₫', oldPrice: '24.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone008', category: 'chicken', name: 'iPhone 13 Mini 128GB', img: './img/product/iphone/iphone008.png', currentPrice: '22.490.000₫', oldPrice: '27.990.000₫', detailCategory: 'iPhone 13', state: 'old'},
        {id: 'iphone009', category: 'chicken', name: 'iPhone 12 Pro Max 256GB', img: './img/product/iphone/iphone009.png', currentPrice: '27.590.000₫', oldPrice: '31.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone010', category: 'chicken', name: 'iPhone 12 Pro 256GB', img: './img/product/iphone/iphone010.png', currentPrice: '24.990.000₫', oldPrice: '28.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone011', category: 'chicken', name: 'iPhone 12 128GB', img: './img/product/iphone/iphone011.png', currentPrice: '15.990.000₫', oldPrice: '19.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone012', category: 'chicken', name: 'iPhone 12 Mini 64GB', img: './img/product/iphone/iphone012.png', currentPrice: '12.990.000₫', oldPrice: '18.990.000₫', detailCategory: 'iPhone 12', state: 'old'},
        {id: 'iphone013', category: 'chicken', name: 'iPhone 11 Pro Max 64GB', img: './img/product/iphone/iphone013.png', currentPrice: '12.990.000₫', oldPrice: '18.990.000₫', detailCategory: 'iPhone 11', state: 'old'},
        {id: 'iphone014', category: 'chicken', name: 'iPhone 11 Pro 64GB', img: './img/product/iphone/iphone014.png', currentPrice: '12.990.000₫', oldPrice: '18.990.000₫', detailCategory: 'iPhone 11', state: 'old'},
        //side-dishes
        {id: 'macbook001', category: 'side-dish', name: 'MacBook Air M2 2022 8-core 256GB', img: './img/product/macbook/macbook001.png', currentPrice: '26.290.000₫', oldPrice: '28.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook002', category: 'side-dish', name: 'MacBook Pro 14" M1 Max 2021 1TB', img: './img/product/macbook/macbook002.png', currentPrice: '78.900.000₫', oldPrice: '87.900.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook003', category: 'side-dish', name: 'MacBook Pro 13" M2 2022 256GB', img: './img/product/macbook/macbook003.png', currentPrice: '38.790.000₫', oldPrice: '41.990.000₫', detailCategory: 'MacBook Pro', state: 'new'},
        {id: 'macbook004', category: 'side-dish', name: 'MacBook Mini 2014 256GB', img: './img/product/macbook/macbook004.png', currentPrice: '8.000.000₫', oldPrice: '9.200.000₫', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook005', category: 'side-dish', name: 'MacBook Air M1 2020 512GB', img: './img/product/macbook/macbook005.png', currentPrice: '35.590.000₫', oldPrice: '39.490.000₫', detailCategory: 'MacBook Air', state: 'old'},
        {id: 'macbook006', category: 'side-dish', name: 'MacBook Mini 2018 1TB', img: './img/product/macbook/macbook006.png', currentPrice: '38.500.000₫', oldPrice: '42.000.000₫', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook007', category: 'side-dish', name: 'MacBook Air M2 2022 8-core 512GB', img: './img/product/macbook/macbook007.png', currentPrice: '27.990.000₫', oldPrice: '30.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook008', category: 'side-dish', name: 'MacBook Air M1 2020 256GB', img: './img/product/macbook/macbook008.png', currentPrice: '22.690.000₫', oldPrice: '27.490.000₫', detailCategory: 'MacBook Air', state: 'old'},
        {id: 'macbook009', category: 'side-dish', name: 'MacBook Air M2 2022 10-core 256GB', img: './img/product/macbook/macbook009.png', currentPrice: '34.290.000₫', oldPrice: '37.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook010', category: 'side-dish', name: 'MacBook Mini 2018 128GB', img: './img/product/macbook/macbook010.png', currentPrice: '12.000.000₫', oldPrice: '', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook011', category: 'side-dish', name: 'MacBook Air M2 2022 10-core 512GB', img: './img/product/macbook/macbook011.png', currentPrice: '36.290.000₫', oldPrice: '39.990.000₫', detailCategory: 'MacBook Air', state: 'new'},
        {id: 'macbook012', category: 'side-dish', name: 'MacBook Pro 13" M1 2020 256GB', img: './img/product/macbook/macbook012.png', currentPrice: '36.090.000₫', oldPrice: '39.990.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook013', category: 'side-dish', name: 'MacBook Mini 2020 512GB', img: './img/product/macbook/macbook013.png', currentPrice: '29.700.000₫', oldPrice: '', detailCategory: 'MacBook Mini', state: 'old'},
        {id: 'macbook014', category: 'side-dish', name: 'MacBook Pro 14" M1 Pro 2021 512GB', img: './img/product/macbook/macbook014.png', currentPrice: '56.990.000₫', oldPrice: '64.490.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook015', category: 'side-dish', name: 'MacBook Pro 14" M1 Pro 2021 1TB', img: './img/product/macbook/macbook015.png', currentPrice: '62.890.000₫', oldPrice: '71.990.000₫', detailCategory: 'MacBook Pro', state: 'old'},
        {id: 'macbook016', category: 'side-dish', name: 'MacBook Pro 13" M2 2022 256GB', img: './img/product/macbook/macbook016.png', currentPrice: '32.690.000₫', oldPrice: '35.990.000₫', detailCategory: 'MacBook Pro', state: 'new'},
        //drinks
        {id: 'ipad001', category: 'drink', name: 'iPad Pro M2 12.9" 128GB', img: './img/product/ipad/ipad001.png', currentPrice: '35.990.000₫', oldPrice: '', detailCategory: 'iPad Pro', state: 'new'},
        {id: 'ipad002', category: 'drink', name: 'iPad Pro M2 11" 128GB', img: './img/product/ipad/ipad002.png', currentPrice: '27.990.000₫', oldPrice: '', detailCategory: 'iPad Pro', state: 'new'},
        {id: 'ipad003', category: 'drink', name: 'iPad Pro M1 12.9" WiFi Cellular 2TB', img: './img/product/ipad/ipad003.png', currentPrice: '58.990.000₫', oldPrice: '63.990.000₫', detailCategory: 'iPad Pro', state: 'new'},
        {id: 'ipad004', category: 'drink', name: 'iPad 10 5G 64GB', img: './img/product/ipad/ipad004.png', currentPrice: '16.990.000₫', oldPrice: '', detailCategory: 'iPad 10', state: 'new'},
        {id: 'ipad005', category: 'drink', name: 'iPad 10 Wifi 64GB', img: './img/product/ipad/ipad005.png', currentPrice: '12.990.000₫', oldPrice: '', detailCategory: 'iPad 10', state: 'new'},
        {id: 'ipad006', category: 'drink', name: 'iPad Air 5 WiFi Cellular 256GB', img: './img/product/ipad/ipad006.png', currentPrice: '24.490.000₫', oldPrice: '24.990.000₫', detailCategory: 'iPad Air', state: 'old'},
        {id: 'ipad007', category: 'drink', name: 'iPad 9 10.2" WiFi 64GB ', img: './img/product/ipad/ipad007.png', currentPrice: '8.790.000₫', oldPrice: '9.990.000₫', detailCategory: 'iPad 9', state: 'old'},
        {id: 'ipad008', category: 'drink', name: 'iPad mini 6 8.3" WiFi Cellular 64GB', img: './img/product/ipad/ipad008.png', currentPrice: '16.990.000₫', oldPrice: '19.990.000₫', detailCategory: 'iPad Mini', state: 'old'},
        {id: 'ipad009', category: 'drink', name: 'iPad Pro M1 12.9" WiFi Cellular 1TB', img: './img/product/ipad/ipad009.png', currentPrice: '48.990.000₫', oldPrice: '53.990.000₫', detailCategory: 'iPad Pro', state: 'old'},
        {id: 'ipad010', category: 'drink', name: 'iPad Pro M1 11" WiFi Cellular 2TB', img: './img/product/ipad/ipad010.png', currentPrice: '50.990.000₫', oldPrice: '55.990.000₫', detailCategory: 'iPad Pro', state: 'old'},
        {id: 'ipad011', category: 'drink', name: 'iPad Air 5 WiFi Cellular 64GB', img: './img/product/ipad/ipad011.png', currentPrice: '20.490.000₫', oldPrice: '20.990.000₫', detailCategory: 'iPad Air', state: 'old'},
        {id: 'ipad012', category: 'drink', name: 'iPad Air 5 WiFi 64GB', img: './img/product/ipad/ipad012.png', currentPrice: '16.490.000₫', oldPrice: '16.990.000₫', detailCategory: 'iPad Air', state: 'old'},
        {id: 'ipad013', category: 'drink', name: 'iPad mini 6 8.3" WiFi Cellular 256GB', img: './img/product/ipad/ipad013.png', currentPrice: '20.990.000₫', oldPrice: '23.990.000₫', detailCategory: 'iPad Mini', state: 'old'},
        {id: 'ipad014', category: 'drink', name: 'iPad 10 WiFi Cellular 256GB', img: './img/product/ipad/ipad014.png', currentPrice: '20.990.000₫', oldPrice: '', detailCategory: 'iPad 10', state: 'new'},
        {id: 'ipad015', category: 'drink', name: 'iPad 9 10.2" WiFi Cellular 256GB', img: './img/product/ipad/ipad015.png', currentPrice: '15.790.000₫', oldPrice: '17.990.000₫', detailCategory: 'iPad 9', state: 'old'},
        {id: 'ipad016', category: 'drink', name: 'iPad Pro M1 11" WiFi 2TB', img: './img/product/ipad/ipad016.png', currentPrice: '44.990.000₫', oldPrice: '51.990.000₫', detailCategory: 'iPad Pro', state: 'old'},
=======
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
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190
    
    ];
    localStorage.setItem('products', JSON.stringify(products));
}

function htmlProduct(product) {
    var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
    var html = `
        <div class="col l-3 m-4 c-6">
            <div class="product__item">
<<<<<<< HEAD
                <a href="index.html?${product.category.replaceAll(' ', '-').toLowerCase()}?${tmpName}" class="product__item-link">
=======
                <a href="index.html?${tmpName}" class="product__item-link">
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190
                    <img src = "${product.img}" class = "product__item-img"></img>
                    <h3 class="product__item-name">${product.name}</h3>
                    <div class="product__item-price">
                        <p class="product__item-current-price">${product.currentPrice}đ</p>
                        <p class="product__item-old-price">${product.oldPrice}</p>
                    </div>
                </a>
            </div>
        </div>
    `;
    return html;
}

<<<<<<< HEAD
// getNewLabel();
function getNewLabel() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].state == 'new')
            products[i]['label'] = 'product__item-new-label';
        else
            products[i]['label'] = 'no-label';
    }
}
=======
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190

function showCurrentNavbar(str) {
    var currentNavbar = document.querySelectorAll('.header__navbar-item-link');
    for (var i = 0; i < currentNavbar.length; i++) {
        currentNavbar[i].classList.remove('header__navbar-item-link--active');
    }
    for (var i = 0; i < currentNavbar.length; i++) {
<<<<<<< HEAD
        if (currentNavbar[i].getAttribute('data-value').toLowerCase() == str.replaceAll('-', '-').toLowerCase()) {
=======
        if (currentNavbar[i].getAttribute('data-value').toLowerCase() == str.toLowerCase()) {
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190
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

<<<<<<< HEAD
function showFilter(category) {
    var productArray = products.filter(function(product) {
        return product.category.toLowerCase().replaceAll(' ', '-') == category.toLowerCase();
=======
// show list filter of product
function showFilter(category) {
    var productArray = products.filter(function(product) {
        return product.category == category;
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190
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
<<<<<<< HEAD
        category = 'Tất cả';
=======
        category = 'Món mới';
        paginationElm.style.display = 'none';
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190
    }
    localStorage.setItem('filterName', "Tất cả");

    var arr = createTempArray(start, productArray); //array store list products at current page
    document.getElementById('body').style.display = 'block';
<<<<<<< HEAD
    document.querySelector('.product__logo-name').innerHTML = category;
    document.getElementById('show-product').innerHTML = arr.join('');
    if (category != 'Tất cả'){
=======
    document.getElementById('show-product').innerHTML = arr.join('');
    if (category != 'Món mới'){
>>>>>>> 932cd2db5860b4282d4649cbb884443b09874190
        document.querySelector('.product__header').scrollIntoView();
    }
    
}

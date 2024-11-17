var products = JSON.parse(localStorage.getItem('products'));
if (!products) {
    products = [
        //chickens
        {id: 'chicken001', category: 'chicken', name: '1 miếng Gà Rán', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x1-ga-ran.png', currentPrice: '37.000', oldPrice: '', detailCategory: 'Đùi gà'},
        {id: 'chicken002', category: 'chicken', name: '3 miếng Gà Rán', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x3pcs_chicken.png', currentPrice: '69.000', oldPrice: '75.000₫', detailCategory: 'Đùi gà'},
        {id: 'chicken003', category: 'chicken', name: '6 miếng Gà Rán', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x6-ga-ran.png', currentPrice: '125.000', oldPrice: '', detailCategory: 'Đùi gà', state: 'new'},
        {id: 'chicken004', category: 'chicken', name: '3 miếng Cánh Gà', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x3-canh-ga-ran.png', currentPrice: '103.000', oldPrice: '', detailCategory: 'Cánh gà', state: 'new'},
        {id: 'chicken005', category: 'chicken', name: '10 miếng Cánh Gà', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x10-canh-ga.png', currentPrice: '179.000', oldPrice: '', detailCategory: 'Cánh gà', state: 'new'},
        {id: 'chicken006', category: 'chicken', name: '6 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x6-mieng-Ga-vien.png', currentPrice: '49.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken007', category: 'chicken', name: '9 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x9-mieng-Ga-vien.png', currentPrice: '69.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken008', category: 'chicken', name: '20 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken009', category: 'chicken', name: '2 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken010', category: 'chicken', name: '22 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken011', category: 'chicken', name: '21 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken012', category: 'chicken', name: '22 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken013', category: 'chicken', name: '23 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken014', category: 'chicken', name: '24 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên', state: 'new'},
        {id: 'chicken015', category: 'chicken', name: '25 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        {id: 'chicken016', category: 'chicken', name: '2 miếng Gà Viên Vui Vẻ', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/chickens/x20-mieng-Ga-vien.png', currentPrice: '121.000', oldPrice: '', detailCategory: 'Gà viên'},
        //side-dishes
        {id: 'sidedish001', category: 'side-dish', name: 'Burger Bò phô mai đặc biệt', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/side-dishes/burger-dacbiet.png', currentPrice: '56.000', oldPrice: '62.000₫', detailCategory: 'Burger', state: 'new'},
        {id: 'sidedish002', category: 'side-dish', name: 'Burger Gà phô-mai đặc biệt', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/side-dishes/burger-ga-dacbiet.png', currentPrice: '69.000', oldPrice: '', detailCategory: 'Burger'},
        {id: 'sidedish003', category: 'side-dish', name: 'Burger Gà Nhỏ Mayo', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/side-dishes/burger-ga.png', currentPrice: '36.000', oldPrice: '', detailCategory: 'Burger'},
        {id: 'sidedish004', category: 'side-dish', name: 'Khoai Tây Chiên (size nhỏ) - 206 Kcal', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/side-dishes/khoai-tay-chien-nho.png', currentPrice: '19.000', oldPrice: '', detailCategory: 'Khoai tây chiên'},
        {id: 'sidedish005', category: 'side-dish', name: 'Khoai Tây Chiên (size lớn)', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/side-dishes/khoai-tay-chien-lon.png', currentPrice: '39.000', oldPrice: '', detailCategory: 'Khoai tây chiên'},
        //drinks
        {id: 'drink001', category: 'drink', name: 'Fanta®', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/drinks/fanta.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
        {id: 'drink002', category: 'drink', name: 'Nước suối', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/drinks/dasani_water.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
        {id: 'drink003', category: 'drink', name: 'Sprite®', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/drinks/sprite.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
        {id: 'drink004', category: 'drink', name: 'Coca-Cola®', img: '/Users/nguyentan/Documents/MonHoc_TruongS/fashfood/img/product/drinks/cocacola.png', currentPrice: '22.000', oldPrice: '', detailCategory: ''},
    
    ];
    localStorage.setItem('products', JSON.stringify(products));
}

function htmlProduct(product) {
    var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
    var html = `
        <div class="col l-3 m-4 c-6">
            <div class="product__item">
                <a href="index.html?${tmpName}" class="product__item-link">
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

    var arr = createTempArray(start, productArray); //array store list products at current page
    document.getElementById('body').style.display = 'block';
    document.getElementById('show-product').innerHTML = arr.join('');
    if (category != 'Món mới'){
        document.querySelector('.product__header').scrollIntoView();
    }
    
}
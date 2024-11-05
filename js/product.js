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

// getNewLabel();
function getNewLabel() {
    for (var i = 0; i < products.length; i++) {
        if (products[i].state == 'new')
            products[i]['label'] = 'product__item-new-label';
        else
            products[i]['label'] = 'no-label';
    }
}

function showCurrentNavbar(str) {
    var currentNavbar = document.querySelectorAll('.header__navbar-item-link');
    for (var i = 0; i < currentNavbar.length; i++) {
        currentNavbar[i].classList.remove('header__navbar-item-link--active');
    }
    for (var i = 0; i < currentNavbar.length; i++) {
        if (currentNavbar[i].getAttribute('data-value').toLowerCase() == str.replaceAll('-', '-').toLowerCase()) {
            currentNavbar[i].classList.add('header__navbar-item-link--active');
            break;
        }
    }
}

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

function showFilter(category) {
    var productArray = products.filter(function(product) {
        return product.category.toLowerCase().replaceAll(' ', '-') == category.toLowerCase();
    });
    var filterArray = productArray.map(function(product) {
        return product.detailCategory;
    });
    filterArray = [...new Set(filterArray)];
    // if (filterArray.length == 1) {
    //     document.querySelector('.product__filter').style.display = 'none';
    //     return;
    // }
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

function showFilterProduct(category, filterName, start) {
    var productArr = products.filter(function(product) {
        return product.category.toLowerCase().replaceAll(' ', '-') == category.toLowerCase();
    });
    var filterArr = productArr.filter(function(product) {
        return product.detailCategory.toLowerCase() == filterName.toLowerCase();
    });
    localStorage.setItem('filterName', filterName);

    category = ReName(category);
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

    // Xử lý page
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
    } else {
        document.querySelector('.slider').style.display = 'block';
        productArray = products.filter(function(product) {
            return product.state == 'new';
        });
        category = 'Món mới';
    }
    localStorage.setItem('filterName', "Tất cả");

    showPagination(productArray);
    showCurrentPage(start);
    category = ReName(category);

    var arr = createTempArray(start, productArray); //tạo mảng tạm chứa sản phẩm ở trang hiện tại
    document.getElementById('body').style.display = 'block';
    // document.querySelector('.product__logo-name').innerHTML = category;
    document.getElementById('show-product').innerHTML = arr.join('');
    if (category != 'Món mới'){
        document.querySelector('.product__header').scrollIntoView();
    }
    Pagination();
function showProduct(start) {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    var category = getCategory();
    var productArray;
    if (category != undefined && category != '') {
        productArray = products.filter(function(product) {
            return product.category.toLowerCase().replaceAll(' ', '-') == category;
        });
        showCurrentNavbar(category);
        showFilter(category);
    } 
    else {
        productArray = products.filter(function(product) {
            return product.state == 'new';
        });
        category = 'Tất cả';
    }
    localStorage.setItem('filterName', 'Tất cả');

    showPagination(productArray);
    showCurrentPage(start);
    category = ReName(category);

    var arr = createTempArray(start, productArray); //tạo mảng tạm chứa sản phẩm ở trang hiện tại
    document.getElementById('body').style.display = 'block';
    document.querySelector('.product__logo-name').innerHTML = category;
    document.getElementById('show-product').innerHTML = arr.join('');
    if (category != 'Tất cả'){
        document.querySelector('.product__header').scrollIntoView();
    }
    
    // Xử lý page
    Pagination();
    }
}

//Product Detail
function showProductDetail() {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    var url = window.location.href;
    var s = url.split('?');
    var detailProduct = products.find(function(product) {
        var tmpName = product.name.replace('"', '').replaceAll(' ', '-');
        return tmpName == s[2];
    });

    var html = `
        <div class="col l-6 m-12 c-12">
            <div class="product__detail-img-box">
                <img src="${detailProduct.img}" alt="" class="product__detail-img">
            </div>
        </div>
        <div class="col l-6 m-12 c-12">
            <div class="product__detail-info">
                <span class="product__detail-name">${detailProduct.name}</span>
                <div class="product__detail-price">
                    <p class="product__detail-current-price">${detailProduct.currentPrice}</p>
                    <p class="product__detail-old-price">${detailProduct.oldPrice}</p>
                </div>
                <div class="product__detail-policy">
                    <div class="product__detail-policy-item">
                        <i class="uil uil-box"></i>
                        <span class="product__detail-policy-text">Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</span>
                    </div>
                    <div class="product__detail-policy-item">
                        <i class="uil uil-sync"></i>
                        <span class="product__detail-policy-text">Hư gì đổi nấy trong 12 tháng</span>
                    </div>
                    <div class="product__detail-policy-item">
                        <i class="uil uil-shield-check"></i>
                        <span class="product__detail-policy-text">Bảo hành chính hãng 2 năm</span>
                    </div>
                    <div class="product__detail-policy-item">
                        <i class="uil uil-truck"></i>
                        <span class="product__detail-policy-text">Giao hàng nhanh toàn quốc</span>
                    </div>
                    <div class="product__detail-policy-item">
                        <i class="uil uil-phone"></i>
                        <span class="product__detail-policy-text">
                            Tổng đài:
                            <a href="tel:0976124506" class="product__detail-phone">0976124506</a>                                      
                        </span>
                    </div>
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
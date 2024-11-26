var searchProduct = [];
var search = document.getElementById('search-info');
var products = JSON.parse(localStorage.getItem('products'));


search.addEventListener('keyup', function(event) {
    if (event.keyCode == 13 && search.value.length > 0) {
        let searchValue = removeAccents(search.value).toLowerCase();
        localStorage.setItem('search', search.value);
        products.forEach(function(product) {
            let productName = removeAccents(product.name).toLowerCase();
            if (productName.includes(searchValue)) {
                searchProduct.push(product);                              
            }
        });  
        localStorage.setItem('searchProduct', JSON.stringify(searchProduct));
        document.getElementById('search-info').value = '';  
        window.location.href = 'index.html?search';
    }
});

function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function showCategory() {
    searchProduct = JSON.parse(localStorage.getItem('searchProduct'));

    var categoryList = searchProduct.map(function(product) {
        return product.category; 
    });

    for (var i = 0; i < categoryList.length; i++) {
        categoryList[i] = categoryList[i].toLowerCase();
    }
    categoryList = [...new Set(categoryList)];

    for (var i = 0; i < categoryList.length; i++) {
        categoryList[i] = reNameCategory(categoryList[i]);
    }

    if (categoryList.length > 1) {
        var s = `
            <li class="product__filter-item">
                <button class="product__filter-item-btn product__filter-item-btn--active" onclick="showSearchProduct(1)">Tất cả</button>
            </li>
        `;
        var html = categoryList.map(function(category) {
            return `
                <li class="product__filter-item">
                    <button class="product__filter-item-btn" onclick="showCategoryProduct('${prevNameCategory(category)}', 1)">${category}</button>
                </li>
            `;
        });
        s = s + html.join('');
        document.querySelector('.product__filter').innerHTML = s;
    } else {
        document.querySelector('.product__filter').innerHTML = '';
    }
}

function showCurrentCategory(name) {

    // rename category to vietnamese
    name = reNameCategory(name);
    
    var currentFilter = document.querySelectorAll('.product__filter-item-btn');
    for (var i = 0; i < currentFilter.length; i++) {
        currentFilter[i].classList.remove('product__filter-item-btn--active');
    }
    for (var i = 0; i < currentFilter.length; i++) {
        
        if (currentFilter[i].innerText.toLowerCase() == name.toLowerCase()) {
            currentFilter[i].classList.add('product__filter-item-btn--active');
            break;
        }
    }
}   

function showCategoryProduct(name, start) {
    var tmpArray = JSON.parse(localStorage.getItem('searchProduct'));
    var categoryProduct = tmpArray.filter(function(product) {
        return product.category == name;
    });
    localStorage.setItem('categoryName', name);

    showCurrentCategory(name);
    showCategoryPagination(categoryProduct, name);
    showCurrentPage(start);
    
    var arr = createTempArray(start, categoryProduct);
    document.getElementById('show-product').innerHTML = arr.join('');
    document.querySelector('.product__header').scrollIntoView();

    // Xử lý page
    Pagination();
}

function showSearchProduct(start) {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.order').style.display = 'none';

    searchProduct = JSON.parse(localStorage.getItem('searchProduct'));
    if (!searchProduct || searchProduct.length == 0) {
        document.getElementById('body').style.display = 'none';
        document.getElementById('search__empty').innerHTML = `
            <div class="grid wide">
                <div class="search__empty-box">
                    <ul class="search__empty-list">
                        <h3 class="search__empty-list-heading">Để tìm được kết quả chính xác hơn, bạn vui lòng:</h3>
                        <li class="search__empty-item">Kiểm tra lỗi chính tả của từ khóa đã nhập</li>
                        <li class="search__empty-item">Thử lại bằng từ khóa khác</li>
                        <li class="search__empty-item">Thử lại bằng những từ khóa tổng quát hơn</li>
                        <li class="search__empty-item">Thử lại bằng những từ khóa ngắn gọn hơn</li>
                    </ul>
                </div>
            </div>
        `;   
    } else {
        document.querySelector('.slider').style.display = 'none';

        search.value = localStorage.getItem('search');
        localStorage.setItem('categoryName', 'Tất cả');

        // document.querySelector('.product__logo-name').innerHTML = `Tìm thấy các sản phẩm có từ khóa "${search.value}"`;
        showCategory();
        // paginationElm.style.display = 'flex';

        showSearchPagination(searchProduct);
        showCurrentPage(start);

        var arr = createTempArray(start, searchProduct); //tạo mảng tạm chứa sản phẩm ở trang hiện tại
        document.getElementById('body').style.display = 'block';
        document.getElementById('show-product').innerHTML = arr.join(''); 
        document.getElementById('search-info').value = ''; //reset search input

        document.querySelector('.product__header').scrollIntoView();

        // Xử lý page
        Pagination();

        //clear lần tìm kiếm trc để lần tìm kiếm sau kh bị lần tìm kiếm trc ghi đè
        searchProduct = [];
    }
}
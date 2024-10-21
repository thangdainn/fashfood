var productPage = document.querySelector('.admin_product');
var orderPage = document.querySelector('.admin_order');
var statisticsPage = document.querySelector('.admin_statis');
var userPage = document.querySelector('.admin_user');
var contentBtn = document.querySelectorAll('.sidebar_item');
var content = document.querySelector('.admin_content');

function showCurrentContent(name) {
    var index;
    for (var i = 0; i < contentBtn.length; i++) {
        contentBtn[i].classList.remove('active');
        if (contentBtn[i].getAttribute('value') == name) {
            index = i;
        }
    }
    contentBtn[index].classList.add('active');
}

function backHomePage() {
    window.location.href = 'index.html';
}

// Logout
function LogOut() {
    localStorage.setItem('isLogIn', 0);
    localStorage.setItem('userAccountIndex', '');
    window.location.href = 'index.html';
}

// Tránh đóng Model khi thao tác trên Model-body
var ModelBodies = document.querySelectorAll('.Model-body');

ModelBodies.forEach(function(ModelBody) {
    ModelBody.addEventListener('click', function(event) {
        event.stopPropagation();
    })
})

// Hủy delete
function cancelDelete() {
    productControlModel.style.display = 'none';
    userControlModel.style.display = 'none';
}

// Side bar
var switchBtn = document.querySelector('.sidebar-switch');
var sideBar = document.querySelector('.sidebar');

switchBtn.addEventListener('click', function() {
    sideBar.classList.toggle('sidebar--close');
});
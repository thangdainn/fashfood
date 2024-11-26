 var productPage = document.querySelector('.admin__product');
var orderPage = document.querySelector('.admin__order');
var statisticsPage = document.querySelector('.admin__statis');
var userPage = document.querySelector('.admin__user');
var contentBtn = document.querySelectorAll('.side-bar__item');
var content = document.querySelector('.admin__content');

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
    window.location.href = 'admin.html';
}

// Tránh đóng modal khi thao tác trên modal-body
var modalBodies = document.querySelectorAll('.modal-body');

modalBodies.forEach(function(modalBody) {
    modalBody.addEventListener('click', function(event) {
        event.stopPropagation();
    })
})

// Hủy delete
function cancelDelete() {
    productControlModal.style.display = 'none';
    userControlModal.style.display = 'none';
}

var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var isLogin = JSON.parse(localStorage.getItem('isLogIn'));
var userIndex = localStorage.getItem('userAccountIndex');
if (userIndex) {
    userIndex = JSON.parse(userIndex);
} else {
    userIndex = null;
}
if (isLogin == 1 && userIndex != null) {
    if (userAccount[userIndex].type == 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('admin-content').style.display = 'block';
    }
}
        
function checkLogInAdmin(email, password) {
    for (let i = 0; i < userAccount.length; i++) {
        if (userAccount[i].userEmail == email && userAccount[i].userPassword == password && userAccount[i].type == 'admin') {
            // localStorage.setItem('isLogIn', JSON.stringify(1));
            // localStorage.setItem('userAccountIndex', JSON.stringify(i));
            return true;
        }
    }
    return false;
}

function loginAdmin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Check login credentials
    if (checkLogInAdmin(email, password)) {
        // Hide the login form and show the admin content
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('admin-content').style.display = 'block';
            
    } else {
        // Show error message if credentials are incorrect
        document.getElementById('errorMessage').style.display = 'block';
    }
        
}

// Event listener for the login button
document.getElementById('loginButton').addEventListener('click', loginAdmin);

// Event listener for the Enter key
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        loginAdmin();
    }
});



var modalBody = document.querySelector('.modal-body');
var signUp = document.getElementById('sign-up-btn');
var signIn = document.getElementById('sign-in-btn');

modalBody.addEventListener('click', function(event) {
    event.stopPropagation();        // ấn vô khung modal body sẽ kh bị tắt
});

function showSignIn() {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('sign-up').style.display = 'none';
}

function showSignUp() {
    document.getElementById('sign-up').style.display = 'block';
    document.getElementById('sign-in').style.display = 'none';
}

function eventSignUp() {
    document.getElementById('account__modal').style.display = 'flex';
    showSignUp();
}

function eventSignIn() {
    document.getElementById('account__modal').style.display = 'flex';
    showSignIn();
}

function showPassword() {
    var icon = document.querySelector('.sign-up-showpass .show-hide');
    passwords.forEach(function(password) {
        if (password.type == 'password') {
            icon.classList.replace('fa-eye', 'fa-eye-slash');
            password.type = 'text';
        } else {
            icon.classList.replace('fa-eye-slash', 'fa-eye');
            password.type = 'password';
        }
    });
}

function showSignInPassword() {
    var icon = document.querySelector('.sign-in-showpass .show-hide');
    if (signInPassword.type == 'password') {
        icon.classList.replace('fa-eye-slash', 'fa-eye');
        signInPassword.type = 'text';
    } else {
        icon.classList.replace('fa-eye', 'fa-eye-slash');
        signInPassword.type = 'password';
    }
}

// tạo tài khoản 
var passwords = document.querySelectorAll('.password');


if (!userAccount) {
    userAccount = [
        {cartList: [], userEmail: 'admin@gmail.com', userPassword: 'admin', userFullName: 'Admin', userPhone: '0123456789', userAddress: 'Admin', userDate: '20/10/2022', type: 'admin', status: 1},
        {cartList: [], userEmail: 'user@gmail.com', userPassword: '123123', userFullName: 'User', userPhone: '0123456789', userAddress: 'User', userDate: '20/11/2022', type: 'user', status: 1},
    ];
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}


function checkSameAccount(email, userName) {
    for (var i = 0; i < userAccount.length; i++) {
        // Kiểm tra nếu email hoặc tên đăng nhập trùng
        if (email === userAccount[i].userEmail || userName === userAccount[i].userName) {
            return true; // Tìm thấy tài khoản trùng
        }
    }
    return false; // Không có tài khoản trùng
}


function containsSpecialChars(str) {
    const regex = /[^a-zA-Z0-9 ]/g; // Chỉ cho phép chữ cái, số và khoảng trắng
    return regex.test(str);
}
function startsWithNumber(str) {
    return /^\d/.test(str); // Kiểm tra xem chuỗi có bắt đầu bằng số
}
function isValidFullName(str) {
    const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơẠ-ỹ\s]+$/u;
    return regex.test(str);
}


function validatePhoneNumber(phone) {
    // Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số
    const phoneRegex = /^0[0-9]{9}$/;
    return phoneRegex.test(phone);
}


function isEmptyField(value) {
    return value.trim() === ''; // Kiểm tra xem trường có rỗng hay chỉ chứa khoảng trắng không
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email cơ bản
    return emailRegex.test(email);
}
function createAccount(event) {
    event.preventDefault();
    var rePassword = document.getElementById('re-password');
    var password = document.getElementById('true-password');
    var fullName = document.getElementById('full-name').value.trim();
    var phone = document.getElementById('user-phone').value.trim();
    var address = document.getElementById('user-address').value.trim();
    var emailValue = document.getElementById('email').value.trim();

    // Xóa các thông báo lỗi cũ
    document.querySelector('.error.full-name').textContent = '';
    document.querySelector('.error.phone').textContent = '';
    let errorEmailElm = document.querySelector('#sign-up .error.email');
    errorEmailElm.textContent = '';
    document.querySelector('.error.password').textContent = '';
    document.querySelector('.error.address').textContent = '';

    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.style.color = 'red';
    });

    let isValid = true;

    // Kiểm tra các trường nhập liệu
    if (isEmptyField(fullName)) {
        document.querySelector('.error.full-name').textContent = 'Họ và tên không được để trống.';
        isValid = false;
    } else if (containsSpecialChars(fullName)) {
        document.querySelector('.error.full-name').textContent = 'Họ và tên không được chứa ký tự đặc biệt.';
        isValid = false;
    } else if (!isValidFullName(fullName)) {
        document.querySelector('.error.full-name').textContent = 'Họ và tên chỉ được chứa chữ cái và khoảng trắng.';
        isValid = false;
    }

    // Kiểm tra định dạng số điện thoại
    if (!validatePhoneNumber(phone)) {
        document.querySelector('.error.phone').textContent = 'Số điện thoại gồm 10 chữ số.';
        return false;
    }

    // Kiểm tra định dạng email
    if (!validateEmail(emailValue)) {
        errorEmailElm.textContent = 'Email không đúng định dạng!';
        return false;
    }

    if (isEmptyField(password.value)) {
        document.querySelector('.error.password').textContent = 'Mật khẩu không được để trống.';
        isValid = false;
    }

    if (isEmptyField(rePassword.value)) {
        document.querySelector('.error.password').textContent = 'Mật khẩu không được để trống.';
        isValid = false;
    } else if (rePassword.value !== password.value) {
        document.querySelector('.error.password').textContent = 'Mật khẩu không trùng khớp!';
        isValid = false;
    }

    // Kiểm tra email đã tồn tại
    if (checkSameAccount(emailValue)) {
        errorEmailElm.textContent = 'Email đã tồn tại!';
        console.log('Email đã tồn tại!');
        
        return false;
    }

    // Đăng ký tài khoản mới
    userAccount.push({
        cartList: [],
        userEmail: emailValue,
        userPassword: password.value,
        userFullName: fullName,
        userPhone: phone,
        userAddress: address,
        userDate: new Date().toLocaleDateString(),
        type: 'user',
        status: 1
    });

    if (userAccount.some(user => user.userName === userName)) {
        document.querySelector('.error.user-name').textContent = 'Tên người dùng đã tồn tại!';
        isValid = false;
    }

    // Hiển thị thông báo đăng ký thành công
    showToast('success', 'Thành công!', 'Đăng ký tài khoản thành công.');
    setTimeout(function() {
        location.reload();
    }, 2000);
}





var signInUsername = document.getElementById('sign-in-username');
var signInEmail = document.getElementById('sign-in-email');
var signInPassword = document.getElementById('sign-in-password');

function checkLogIn() {
    if (userAccount != null) {
        for (var i = 0; i < userAccount.length; i++) {
            // Kiểm tra username, email, và mật khẩu
            if (
                signInUsername.value === userAccount[i].userName &&
                signInEmail.value === userAccount[i].userEmail &&
                signInPassword.value === userAccount[i].userPassword
            ) {
                // Kiểm tra nếu tài khoản có status là 1 (tài khoản đang hoạt động)
                if (userAccount[i].status === 1) {
                    localStorage.setItem('userAccountIndex', i);
                    return true; // Đăng nhập thành công
                } else {
                    showToast('fail', 'Thất bại!', 'Tài khoản của bạn đã bị khóa.');
                    return false; // Tài khoản đã bị khóa
                }
            }
        }
    }
    return false; // Nếu không tìm thấy username, email hoặc mật khẩu đúng
}

function LogIn() {
    if (checkLogIn()) {
        localStorage.setItem('isLogIn', 1);
        location.reload();
    } else {
        showToast('fail', 'Thất bại!', 'Tên người dùng, Email hoặc mật khẩu không hợp lệ.');
    }
}

function LogOut() {
    localStorage.setItem('isLogIn', 0);
    localStorage.setItem('userAccountIndex', '');
    window.location.href = 'index.html';
}

// show user
var noneUser = document.querySelector('.header__none-user');
var user =  document.querySelector('.header__user');
var index;

function showUserGroup(name, name1) { 
    name.style.display = 'block';
    name1.style.display = 'none';
}   

var isLogIn = localStorage.getItem('isLogIn');
if (isLogIn == 1) {
    index = JSON.parse(localStorage.getItem('userAccountIndex'));
    var changeUserName = document.querySelector('.header__user .header__user-name');
    changeUserName.innerHTML = userAccount[index].userFullName;
    showUserGroup(user, noneUser);
} else {
    showUserGroup(noneUser, user);
}
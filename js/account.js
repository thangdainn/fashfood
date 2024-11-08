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
            icon.classList.replace('uil-eye', 'uil-eye-slash');
            password.type = 'text';
        } else {
            icon.classList.replace('uil-eye-slash', 'uil-eye');
            password.type = 'password';
        }
    });
}

function showSignInPassword() {
    var icon = document.querySelector('.sign-in-showpass .show-hide');
    if (signInPassword.type == 'password') {
        icon.classList.replace('uil-eye-slash', 'uil-eye');
        signInPassword.type = 'text';
    } else {
        icon.classList.replace('uil-eye', 'uil-eye-slash');
        signInPassword.type = 'password';
    }
}

// tạo tài khoản 
var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var email = document.getElementById('email');
var passwords = document.querySelectorAll('.password');
var myName = document.getElementById('user-name');
var userPhone = document.getElementById('user-phone');
var userAddress = document.getElementById('user-address');
var fullName = document.getElementById('full-name');


if (!userAccount) {
    userAccount = [
        {cartList: [], userName: 'Admin', userEmail: 'admin@gmail.com', userPassword: 'admin', userFullName: 'Admin', userPhone: '0123456789', userAddress: 'Admin', userDate: '20/10/2022', type: 'admin', status: 1},
        {cartList: [], userName: 'User', userEmail: 'user@gmail.com', userPassword: 'user', userFullName: 'User', userPhone: '0123456789', userAddress: 'User', userDate: '20/11/2022', type: 'user', status: 1},
    ];
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}

function checkSameAccount(email) {
    for (var i = 0; i < userAccount.length; i++) {
        if (email == userAccount[i].userEmail) {
            return true;
        }
    }
    return false;
}

function containsSpecialChars(str) {
    const regex = /[^a-zA-Z0-9 ]/g; // Chỉ cho phép chữ cái, số và khoảng trắng
    return regex.test(str);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/; // Chỉ cho phép 10 chữ số
    return phoneRegex.test(phone);
}

function isEmptyField(value) {
    return value.trim() === ''; // Kiểm tra xem trường có rỗng hay chỉ chứa khoảng trắng không
}

// function createAccount() {
//     var rePassword = document.getElementById('re-password');
//     var password = document.getElementById('true-password');

//     if (checkSameAccount(email.value)) {
//         document.querySelector('.error.email').innerHTML = 'Email đã tồn tại!';
//         return false;
//     } else {
//         document.querySelector('.error.email').innerHTML = '';
//     }

//     if (rePassword.value != password.value) {
//         document.querySelector('.error.password').innerHTML = 'Mật khẩu không trùng khớp!';
//         return false;
//     } else {
//         document.querySelector('.error.password').innerHTML = '';
 
//         userAccount.push({
//             cartList: [],
//             userName: document.getElementById('user-name').value,
//             userEmail: email.value,
//             userPassword: password.value,
//             userFullName: document.getElementById('full-name').value, // Họ và tên
//             userPhone: document.getElementById('user-phone').value,  // Số điện thoại
//             userAddress: document.getElementById('user-address').value, // Địa chỉ
//             userDate: new Date().toLocaleDateString(), // Ngày đăng ký
//             type: 'user',
//             status: 1
//         });
//         localStorage.setItem('userAccount', JSON.stringify(userAccount));
//         localStorage.setItem('isLogIn', 1);
//         localStorage.setItem('userAccountIndex', userAccount.length - 1);

//     }
// }
function createAccount() {
    var rePassword = document.getElementById('re-password');
    var password = document.getElementById('true-password');
    var userName = document.getElementById('user-name').value.trim();
    var fullName = document.getElementById('full-name').value.trim();
    var phone = document.getElementById('user-phone').value.trim();
    var address = document.getElementById('user-address').value.trim();
    var emailValue = email.value.trim();

    // Kiểm tra xem trường có bị bỏ trống hay không
    if (isEmptyField(fullName) || isEmptyField(userName) || isEmptyField(emailValue) || 
        isEmptyField(phone) || isEmptyField(address) || isEmptyField(password.value)) {
        showToast('fail', 'Lỗi', 'Không được để trống bất kỳ trường nào.');
        return false;
    }

    // Kiểm tra ký tự đặc biệt trong họ tên và tên người dùng
    if (containsSpecialChars(fullName) || containsSpecialChars(userName)) {
        showToast('fail', 'Lỗi', 'Họ và tên hoặc Tên người dùng không được chứa ký tự đặc biệt.');
        return false;
    }

    // Kiểm tra định dạng số điện thoại
    if (!validatePhoneNumber(phone)) {
        showToast('fail', 'Lỗi', 'Số điện thoại phải gồm 10 chữ số.');
        return false;
    }

    // Kiểm tra email đã tồn tại
    if (checkSameAccount(emailValue)) {
        document.querySelector('.error.email').innerHTML = 'Email đã tồn tại!';
        return false;
    } else {
        document.querySelector('.error.email').innerHTML = '';
    }

    // Kiểm tra mật khẩu trùng khớp
    if (rePassword.value !== password.value) {
        document.querySelector('.error.password').innerHTML = 'Mật khẩu không trùng khớp!';
        return false;
    } else {
        document.querySelector('.error.password').innerHTML = '';
    }

    // Đăng ký tài khoản mới
    userAccount.push({
        cartList: [],
        userName: userName,
        userEmail: emailValue,
        userPassword: password.value,
        userFullName: fullName,
        userPhone: phone,
        userAddress: address,
        userDate: new Date().toLocaleDateString(),
        type: 'user',
        status: 1
    });
    
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
    localStorage.setItem('isLogIn', 1);
    localStorage.setItem('userAccountIndex', userAccount.length - 1);

    
}


// Check và Login
var signInEmail = document.getElementById('sign-in-email');
var signInPassword = document.getElementById('sign-in-password');

// function checkLogIn() {
//     if (userAccount != null) {
//         for (var i = 0; i < userAccount.length; i++) {
//             if (signInEmail.value == userAccount[i].userEmail && signInPassword.value == userAccount[i].userPassword) {
//                 localStorage.setItem('userAccountIndex', i);
//                 return true;
//             }
//         }
//     }
//     return false;
// }
function checkLogIn() {
    if (userAccount != null) {
        for (var i = 0; i < userAccount.length; i++) {
            if (signInEmail.value == userAccount[i].userEmail && signInPassword.value == userAccount[i].userPassword) {
                // Kiểm tra nếu tài khoản có status là 1 (tài khoản đang hoạt động)
                if (userAccount[i].status === 1) {
                    localStorage.setItem('userAccountIndex', i);
                    return true; // Đăng nhập thành công
                } else {
                    showToast('fail', 'Tài khoản đã bị khóa!', 'Tài khoản của bạn đã bị khóa. Vui lòng liên hệ với quản trị viên.');
                    return false; // Tài khoản đã bị khóa
                }
            }
        }
    }
    return false; // Nếu không tìm thấy email hoặc mật khẩu đúng
}

function LogIn() {
    if (checkLogIn()) {
        localStorage.setItem('isLogIn', 1);
        location.reload();
    } else {
        showToast('fail', 'Thất bại!', 'Email hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại!');
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
var admin = document.querySelector('.header__admin');
var index;

// function showUserGroup(name, name1) { 
//     name.style.display = 'block';
//     name1.style.display = 'none';
// }   
// function showUserGroup(name, name1, name2) { 
//     name.style.display = 'block';
//     name1.style.display = 'none';
//     name2.style.display = 'none';
// }   


// var isLogIn = localStorage.getItem('isLogIn');
// if (isLogIn == 1) {
//     index = JSON.parse(localStorage.getItem('userAccountIndex'));
    
//     var changeUserName = document.querySelector('.header__user .header__user-name');
//     changeUserName.innerHTML = userAccount[index].userName;
//     showUserGroup(user, noneUser);
// } else {
//     showUserGroup(noneUser, user);
// }
function showUserGroup(name, name1) { 
    name.style.display = 'block';
    name1.style.display = 'none';
    // name2.style.display = 'none';
}   

var isLogIn = localStorage.getItem('isLogIn');
if (isLogIn == 1) {
    index = JSON.parse(localStorage.getItem('userAccountIndex'));
    var changeUserName = document.querySelector('.header__user .header__user-name');
    changeUserName.innerHTML = userAccount[index].userName;
    showUserGroup(user, noneUser, admin);
} else {
    showUserGroup(noneUser, user, admin);
}
// Lấy phần thân của modal
var modalBody = document.querySelector('.modal-body');

// Lấy nút "Sign Up" và "Sign In"
var signUp = document.getElementById('sign-up-btn');
var signIn = document.getElementById('sign-in-btn');

// Ngăn không cho modal bị đóng khi click vào bên trong modal body
modalBody.addEventListener('click', function(event) {
    event.stopPropagation();        // Ấn vô khung modal body sẽ không bị tắt
});

// Hiển thị form đăng nhập và ẩn form đăng ký
function showSignIn() {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('sign-up').style.display = 'none';
}

// Hiển thị form đăng ký và ẩn form đăng nhập
function showSignUp() {
    document.getElementById('sign-up').style.display = 'block';
    document.getElementById('sign-in').style.display = 'none';
}

// Khi bấm vào nút đăng ký, hiển thị modal và form đăng ký
function eventSignUp() {
    document.getElementById('account__modal').style.display = 'flex';  // Hiển thị modal
    showSignUp();  // Hiển thị form đăng ký
}

// Khi bấm vào nút đăng nhập, hiển thị modal và form đăng nhập
function eventSignIn() {
    document.getElementById('account__modal').style.display = 'flex';  // Hiển thị modal
    showSignIn();  // Hiển thị form đăng nhập
}

// Hiển thị và ẩn mật khẩu cho form đăng ký
function showPassword() {
    var icon = document.querySelector('.sign-up-showpass .show-hide');  // Lấy biểu tượng icon
    passwords.forEach(function(password) {
        if (password.type == 'password') {
            icon.classList.replace('uil-eye', 'uil-eye-slash');  // Đổi icon sang mắt đóng
            password.type = 'text';  // Đổi type của ô mật khẩu thành 'text' để hiển thị mật khẩu
        } else {
            icon.classList.replace('uil-eye-slash', 'uil-eye');  // Đổi icon sang mắt mở
            password.type = 'password';  // Đổi lại type thành 'password' để ẩn mật khẩu
        }
    });
}

// Hiển thị và ẩn mật khẩu cho form đăng nhập
function showSignInPassword() {
    var icon = document.querySelector('.sign-in-showpass .show-hide');  // Lấy biểu tượng icon
    if (signInPassword.type == 'password') {
        icon.classList.replace('uil-eye-slash', 'uil-eye');  // Đổi icon sang mắt mở
        signInPassword.type = 'text';  // Hiển thị mật khẩu
    } else {
        icon.classList.replace('uil-eye', 'uil-eye-slash');  // Đổi icon sang mắt đóng
        signInPassword.type = 'password';  // Ẩn mật khẩu
    }
}

// Khởi tạo danh sách tài khoản người dùng từ localStorage
var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var email = document.getElementById('email');
var passwords = document.querySelectorAll('.password');
var myName = document.getElementById('user-name');
// Các biến cho số điện thoại và địa chỉ
var phoneNumber = document.getElementById('phone-number');
var address = document.getElementById('account-address');


// Nếu chưa có dữ liệu người dùng trong localStorage, tạo mặc định 2 tài khoản (Admin và Random)
if (!userAccount) {
    userAccount = [
        {cartList: [], userName: 'Admin', userEmail: 'admin@gmail.com', userPassword: 'admin', userFullName: 'Admin', userPhone: '0123456789', userAddress: 'Admin', userDate: '20/10/2024', type: 'admin'},
        {cartList: [], userName: 'Random', userEmail: 'random@gmail.com', userPassword: 'random', userFullName: 'Random', userPhone: '0123456789', userAddress: 'Random', userDate: '20/11/2024', type: 'user'},
    ];
    localStorage.setItem('userAccount', JSON.stringify(userAccount));  // Lưu lại vào localStorage
}

// Kiểm tra xem email có tồn tại trong danh sách tài khoản hay không
function checkSameAccount(email) {
    for (var i = 0; i < userAccount.length; i++) {
        if (email == userAccount[i].userEmail) {
            return true;  // Trả về true nếu email đã tồn tại
        }
    }
    return false;  // Trả về false nếu email chưa tồn tại
}

// Tạo tài khoản mới
function createAccount() {
    var rePassword = document.getElementById('re-password');
    var password = document.getElementById('true-password');

    if (checkSameAccount(email.value)) {
        document.querySelector('.error.email').innerHTML = 'Email đã tồn tại!';  // Hiển thị lỗi nếu email trùng
        return false;
    } else {
        document.querySelector('.error.email').innerHTML = '';  // Xóa thông báo lỗi nếu không trùng email
    }

    if (rePassword.value != password.value) {
        document.querySelector('.error.password').innerHTML = 'Mật khẩu không trùng khớp!';  // Hiển thị lỗi nếu mật khẩu không khớp
        return false;
    } else {
        document.querySelector('.error.password').innerHTML = '';  // Xóa thông báo lỗi mật khẩu
        var today = new Date().toLocaleDateString();  // Lấy ngày hiện tại
        userAccount.push({
            cartList: [],
            userName: myName.value,
            userEmail: email.value,
            userPassword: password.value,
            userFullName: '',
            userPhone: phoneNumber.value,  // Lưu số điện thoại
            userAddress: address.value,    // Lưu địa chỉ
            userDate: today,  // Lưu ngày tạo tài khoản
            type: 'user'
        });
        localStorage.setItem('userAccount', JSON.stringify(userAccount));  // Lưu tài khoản mới vào localStorage
        localStorage.setItem('isLogIn', 1);  // Đánh dấu người dùng đã đăng nhập
        localStorage.setItem('userAccountIndex', userAccount.length - 1);  // Lưu chỉ số của tài khoản mới
    }
}

// Kiểm tra và đăng nhập tài khoản
var signInEmail = document.getElementById('sign-in-email');
var signInPassword = document.getElementById('sign-in-password');

function checkLogIn() {
    if (userAccount != null) {
        for (var i = 0; i < userAccount.length; i++) {
            if (signInEmail.value == userAccount[i].userEmail && signInPassword.value == userAccount[i].userPassword) {
                localStorage.setItem('userAccountIndex', i);  // Lưu chỉ số tài khoản khi đăng nhập thành công
                return true;
            }
        }
    }
    return false;  // Trả về false nếu email hoặc mật khẩu không đúng
}

// Thực hiện đăng nhập
function LogIn() {
    if (checkLogIn()) {
        localStorage.setItem('isLogIn', 1);  // Đánh dấu đã đăng nhập
        location.reload();  // Tải lại trang
    } else {
        showToast('fail', 'Thất bại!', 'Email hoặc mật khẩu không hợp lệ. Vui lòng kiểm tra lại!');  // Thông báo lỗi
    }
}

// Đăng xuất tài khoản
function LogOut() {
    localStorage.setItem('isLogIn', 0);  // Đánh dấu đã đăng xuất
    localStorage.setItem('userAccountIndex', '');  // Xóa chỉ số tài khoản
    window.location.href = 'index.html';  // Chuyển về trang chủ
}

// Hiển thị nhóm người dùng (admin hoặc user)
var noneUser = document.querySelector('.header__none-user');
var user =  document.querySelector('.header__user');
var admin = document.querySelector('.header__admin');
var index;

// Hàm hiển thị nhóm người dùng
function showUserGroup(name, name1, name2) { 
    name.style.display = 'block';  // Hiển thị nhóm người dùng chính
    name1.style.display = 'none';  // Ẩn nhóm 1
    name2.style.display = 'none';  // Ẩn nhóm 2
}   

// Kiểm tra người dùng đã đăng nhập hay chưa
var isLogIn = localStorage.getItem('isLogIn');
if (isLogIn == 1) {
    index = JSON.parse(localStorage.getItem('userAccountIndex'));  // Lấy chỉ số tài khoản đã đăng nhập
    
    if (userAccount[index].type == 'admin') {
        showUserGroup(admin, noneUser, user);  // Hiển thị admin
    } else {
        var changeUserName = document.querySelector('.header__user .header__user-name');
        changeUserName.innerHTML = userAccount[index].userName;  // Hiển thị tên người dùng
        showUserGroup(user, noneUser, admin);  // Hiển thị người dùng
    }
} else {
    showUserGroup(noneUser, user, admin);  // Nếu chưa đăng nhập, hiển thị giao diện không có người dùng
}

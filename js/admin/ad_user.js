var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var userList = document.querySelector('.admin__user-account-list');


function htmlUser(account) {
    var icon = {
        admin: 'fa-solid fa-screwdriver-wrench',
        user: 'fa-solid fa-user'
    };

    var lockUnlockButton = account.status === 1 
        ? '<div class="admin__user-account-control-item" onclick="showDeleteAccountModal(\'' + account.userEmail + '\')"><i class="fa fa-lock"></i><span>Khóa tài khoản</span></div>' 
        : '<div class="admin__user-account-control-item" onclick="showDeleteAccountModal(\'' + account.userEmail + '\')"><i class="fa fa-lock-open"></i><span>Mở khóa tài khoản</span></div>';

    var html = `
        <div class="admin__user-account-item">
            <div class="admin__user-account-item-box">
                <i class="${icon[account.type]}"></i>
            </div>
            <div class="admin__user-account-item-box">
                <img src="./img/account-logo.png" alt="">
            </div>
            <div class="admin__user-account-item-box">
                <h3>${account.userName}</h3>
                <p>${account.userEmail}</p>
            </div>
            <div class="admin__user-account-item-box">
                <h3>Ngày đăng ký</h3>
                <p>${account.userDate}</p>
            </div>
            <div class="admin__user-account-item-box control">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <div class="admin__user-account-control">
                    <div class="admin__user-account-control-item" onclick="showSeeInfoModal('${account.userEmail}')">
                        <i class="fa fa-info-circle"></i>
                        <span>Xem thông tin</span>
                    </div>
                    <div class="admin__user-account-control-item" onclick="showEditInfoModal('${account.userEmail}')">
                        <i class="fa fa-edit"></i>
                        <span>Sửa thông tin</span>
                    </div>
                    ${lockUnlockButton} <!-- Thêm nút khóa/mở khóa -->
                </div>
            </div>
        </div>
    `;
    return html;
}

function showUserPage() {
    userPage.style.display = 'block';
    orderPage.style.display = 'none';
    productPage.style.display = 'none';
    statisticsPage.style.display = 'none';

    showCurrentContent('user');

    var html = userAccount.map(function(account) {
        return htmlUser(account);
    })
    
    var adminAccount = userAccount.filter(function(account) {
        return account.type == 'admin';
    });
    document.querySelector('.all-account-quantity').innerHTML = userAccount.length;
    document.querySelector('.admin-account-quantity').innerHTML = adminAccount.length;
    document.querySelector('.user-account-quantity').innerHTML = userAccount.length - adminAccount.length;

    document.querySelector('.admin__content-header h3').innerHTML = 'Quản lý khách hàng';
    userList.innerHTML = html.join('');
    showControl();
    autoCloseControlPage();
}

function showControl() {
    var controlBtn = document.querySelectorAll('.admin__user-account-item-box.control');
    var prevControlPage;
    controlBtn.forEach(function(control) {
        control.addEventListener('click', function(event) {
            var controlPage = control.querySelector('.admin__user-account-control');
            controlPage.classList.toggle('active');

            if (prevControlPage && prevControlPage != controlPage) {
                prevControlPage.classList.remove('active');
            }
            prevControlPage = controlPage;
            event.stopPropagation();
        })
    });
}

function autoCloseControlPage() {
    var controlPage = document.querySelectorAll('.admin__user-account-control');
    var content = document.querySelector('.admin__content-wrapper');
    content.addEventListener('click', function(event) {
        controlPage.forEach(function(item) {
            item.classList.remove('active');
        });
        event.stopPropagation();
    })
}

// Search account
var searhInfo = document.querySelector('.admin__user-search-input');

searhInfo.addEventListener('keyup', function() {
    var searchAccount = userAccount.filter(function(account) {
        return account.userName.toLowerCase().includes(searhInfo.value);
    });

    var html = searchAccount.map(function(account) {
        return htmlUser(account);
    })
    userList.innerHTML = html.join('');
})

// Show user control
var userControlModal = document.getElementById('user-control-modal');
var infoModal = document.getElementById('user-info');
var deleteAccountModal = document.getElementById('delete-account');

// See info
var userFullName = document.getElementById('user-fullname');
var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userPass = document.getElementById('user-pass');
var userAddress = document.getElementById('user-address');
var userPhone = document.getElementById('user-phone');
var userType = document.getElementById('user-type');
var editIndex;

function disableEdit() {
    userFullName.classList.add('disable');
    userFullName.readOnly = true;
    userName.classList.add('disable');
    userName.readOnly = true;
    userEmail.classList.add('disable');
    userEmail.readOnly = true;

    // Kiểm tra tồn tại userPass trước khi thao tác
    if (userPass) {
        userPass.classList.add('disable');
        userPass.readOnly = true;
    }

    userAddress.classList.add('disable');
    userAddress.readOnly = true;
    userPhone.classList.add('disable');
    userPhone.readOnly = true;
    userType.style.cursor = 'not-allowed';
    userType.disabled = true;
}

function enableEdit() {
    userFullName.classList.remove('disable');
    userFullName.readOnly = false;
    userName.classList.remove('disable');
    userName.readOnly = false;
    userEmail.classList.add('disable'); // Email vẫn là readonly
    userEmail.readOnly = true;

    // Kiểm tra tồn tại userPass trước khi thao tác
    if (userPass) {
        userPass.classList.add('disable');
        userPass.readOnly = true;
    }

    userAddress.classList.remove('disable');
    userAddress.readOnly = false;
    userPhone.classList.remove('disable');
    userPhone.readOnly = false;
    userType.style.cursor = 'default';
    userType.disabled = false;
}

function showSeeInfoModal(email) {
    userControlModal.style.display = 'flex';
    infoModal.style.display = 'block';
    deleteAccountModal.style.display = 'none';

    // Tìm thông tin người dùng dựa vào email
    var userInfo = userAccount.find(function(account, index) {
        editIndex = index;
        return account.userEmail == email;
    });

    // Set user information in the input fields
    userFullName.value = userInfo.userFullName;
    userName.value = userInfo.userName;
    userEmail.value = userInfo.userEmail;
    userAddress.value = userInfo.userAddress;
    userPhone.value = userInfo.userPhone;

    // Set user type
    for (var i = 0; i < userType.options.length; i++) {
        if (userType.options[i].value == userInfo.type) {
            userType.options[i].selected = true;
            break;
        }
    }

    // Disable editing fields for viewing only
    disableEdit();

    // Cập nhật tiêu đề
    const heading = document.querySelector('#user-info .control-form__heading h3');
    if (heading) {
        heading.innerHTML = 'Xem thông tin người dùng';
    }

    // Ẩn nút Lưu
    const saveButton = document.querySelector('#user-info .control-form___form-btn');
    if (saveButton) {
        saveButton.style.display = 'none';
    }
}

function showEditInfoModal(email) {
    showSeeInfoModal(email);
    enableEdit();

    // Cập nhật tiêu đề
    const heading = document.querySelector('#user-info .control-form__heading h3');
    if (heading) {
        heading.innerHTML = 'Sửa thông tin';
    }

    // Hiển thị nút Lưu
    const saveButton = document.querySelector('#user-info .control-form___form-btn');
    if (saveButton) {
        saveButton.style.display = 'block';
    }
}




function checkPhone() {
    const phone = userPhone.value.trim();

    // Kiểm tra điều kiện:
    // 1. Bắt đầu bằng số 0
    // 2. Chỉ chứa ký tự số (0-9)
    // 3. Độ dài là 10 ký tự
    const phoneRegex = /^0\d{9}$/;

    // Trả về true nếu thỏa mãn, ngược lại trả về false
    return phoneRegex.test(phone);
}



// Hàm kiểm tra ký tự đặc biệt
function containsSpecialChars(str) {
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/g; // Biểu thức chính quy để tìm ký tự đặc biệt
    return specialChars.test(str);
}

function EditInfo() {
    let isValid = true;

    // Lấy các phần tử HTML
    const phoneInput = document.querySelector('#user-phone');
    const fullNameInput = document.querySelector('#user-fullname');
    const userNameInput = document.querySelector('#user-name');

    // Kiểm tra số điện thoại
    let phoneError = phoneInput.parentElement.querySelector('.error-phone');
    if (!phoneError) {
        phoneError = document.createElement('span');
        phoneError.className = 'error-phone';
        phoneInput.parentElement.appendChild(phoneError);
    }

    // Thêm thông báo lỗi vào JavaScript
    if (!checkPhone()) {
        phoneError.style.display = 'block';
        phoneError.textContent = 'Số điện thoại phải có 10 chữ số và phải bắt đầu bằng số 0!';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Kiểm tra ký tự đặc biệt trong Họ và tên
    let fullNameError = fullNameInput.parentElement.querySelector('.error-fullname');
    if (!fullNameError) {
        fullNameError = document.createElement('span');
        fullNameError.className = 'error-fullname';
        fullNameInput.parentElement.appendChild(fullNameError);
    }

    if (containsSpecialChars(fullNameInput.value)) {
        fullNameError.style.display = 'block';
        fullNameError.textContent = 'Họ và tên không được chứa ký tự đặc biệt!';
        isValid = false;
    } else {
        fullNameError.style.display = 'none';
    }

    // Kiểm tra ký tự đặc biệt trong Tên đăng nhập
    let userNameError = userNameInput.parentElement.querySelector('.error-username');
    if (!userNameError) {
        userNameError = document.createElement('span');
        userNameError.className = 'error-username';
        userNameInput.parentElement.appendChild(userNameError);
    }

    if (containsSpecialChars(userNameInput.value)) {
        userNameError.style.display = 'block';
        userNameError.textContent = 'Tên đăng nhập không được chứa ký tự đặc biệt!';
        isValid = false;
    } else {
        userNameError.style.display = 'none';
    }

    // Nếu có lỗi thì dừng không thực hiện cập nhật thông tin
    if (!isValid) return;

    // Cập nhật thông tin người dùng nếu không có lỗi
    userAccount[editIndex].userFullName = fullNameInput.value;
    userAccount[editIndex].userName = userNameInput.value;
    userAccount[editIndex].userAddress = document.querySelector('#user-address').value;
    userAccount[editIndex].userPhone = phoneInput.value;

    // Lấy thông tin loại người dùng (Admin/User)
    const userType = document.querySelector('#user-type');
    for (let i = 0; i < userType.options.length; i++) {
        if (userType.options[i].selected) {
            userAccount[editIndex].type = userType.options[i].value;
            break;
        }
    }

    // Lưu thông tin vào localStorage
    localStorage.setItem('userAccount', JSON.stringify(userAccount));

    // Hiển thị thông báo thành công
    showToast('success', 'Thành công!', `Đã lưu thông tin mới của tài khoản ${userAccount[editIndex].userEmail}`);
    userControlModal.style.display = 'none';
    showUserPage();
}


// Delete account
var deleteEmail;




function deleteAccount() {
    userAccount.forEach(function(account, index) {
        if (account.userEmail == deleteEmail) {
            account.status = 0;
        }
    });
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
    
    showToast('success', 'Thành công!', "Khóa tài khoản thành công");   
    userControlModal.style.display = 'none';
    showUserPage();
}
// Khóa tài khoản

function showDeleteAccountModal(email) {
    userControlModal.style.display = 'flex';
    deleteAccountModal.style.display = 'block';
    infoModal.style.display = 'none';

    deleteEmail = email;

    // Cập nhật nội dung câu hỏi trong modal
    userAccount.forEach(function(account) {
        if (account.userEmail === deleteEmail) {
            var action = account.status === 1 ? "Khóa tài khoản" : "Mở khóa tài khoản";
            document.querySelector('#delete-account .delete-form__question').innerHTML = `Bạn có muốn ${action} "${email}" không ?`;
        }
    });
}

function lockAccount() {
    userAccount.forEach(function(account) {
        if (account.userEmail === deleteEmail) {
            if (account.status === 1) {
                account.status = 0; // Khóa tài khoản
                showToast('success', 'Thành công!', "Khóa tài khoản thành công");
            } else {
                account.status = 1; // Mở khóa tài khoản
                showToast('success', 'Thành công!', "Mở khóa tài khoản thành công");
            }
        }
    });
    localStorage.setItem('userAccount', JSON.stringify(userAccount));
    userControlModal.style.display = 'none';
    showUserPage(); // Cập nhật lại danh sách người dùng
}



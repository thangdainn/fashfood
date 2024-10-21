var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var userList = document.querySelector('.admin_user-account-list');

function htmlUser(account) {
    var icon = {
        admin: 'fa-solid fa-screwdriver-wrench',
        user: 'fa-solid fa-user'
    };

    var html = `
        <div class="admin_user-account-item">
            <div class="admin_user-account-item-box">
                <i class="${icon[account.type]}"></i>
            </div>
            <div class="admin_user-account-item-box">
                <img src="./img/account-logo.png" alt="">
            </div>
            <div class="admin_user-account-item-box">
                <h3>${account.userName}</h3>
                <p>${account.userEmail}</p>
            </div>
            <div class="admin_user-account-item-box">
                <h3>Ngày đăng ký</h3>
                <p>${account.userDate}</p>
            </div>
            <div class="admin_user-account-item-box control">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <div class="admin_user-account-control">
                    <div class="admin_user-account-control-item" onclick="showSeeInfoModel('${account.userEmail}')">
                        <i class="uil uil-info-circle"></i>
                        <span>Xem thông tin</span>
                    </div>
                    <div class="admin_user-account-control-item" onclick="showEditInfoModel('${account.userEmail}')">
                        <i class="uil uil-edit"></i>
                        <span>Sửa thông tin</span>
                    </div>
                    <div class="admin_user-account-control-item" onclick="showDeleteAccountModel('${account.userEmail}')">
                        <i class="uil uil-user-times"></i>
                        <span>Xóa tài khoản</span>
                    </div>
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

    document.querySelector('.admin_content-header h3').innerHTML = 'Quản lý khách hàng';
    userList.innerHTML = html.join('');
    showControl();
    autoCloseControlPage();
}

function showControl() {
    var controlBtn = document.querySelectorAll('.admin_user-account-item-box.control');
    var prevControlPage;
    controlBtn.forEach(function(control) {
        control.addEventListener('click', function(event) {
            var controlPage = control.querySelector('.admin_user-account-control');
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
    var controlPage = document.querySelectorAll('.admin_user-account-control');
    var content = document.querySelector('.admin_content-wrapper');
    content.addEventListener('click', function(event) {
        controlPage.forEach(function(item) {
            item.classList.remove('active');
        });
        event.stopPropagation();
    })
}

// Search account
var searhInfo = document.querySelector('.admin_user-search-input');

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
var userControlModel = document.getElementById('user-control-Model');
var infoModel = document.getElementById('user-info');
var deleteAccountModel = document.getElementById('delete-account');

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
    userPass.classList.add('disable');
    userPass.readOnly = true;
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
    userEmail.classList.remove('disable');
    userEmail.readOnly = false;
    userPass.classList.remove('disable');
    userPass.readOnly = false;
    userAddress.classList.remove('disable');
    userAddress.readOnly = false;
    userPhone.classList.remove('disable');
    userPhone.readOnly = false;
    userType.style.cursor = 'default';
    userType.disabled = false;
}

function showSeeInfoModel(email) {
    userControlModel.style.display = 'flex';
    infoModel.style.display = 'block';
    deleteAccountModel.style.display = 'none';

    var userInfo = userAccount.find(function(account, index) {
        editIndex = index;
        return account.userEmail == email;
    })

    userFullName.value = userInfo.userFullName;
    userName.value = userInfo.userName;
    userEmail.value = userInfo.userEmail;
    userPass.value = userInfo.userPassword;
    userAddress.value = userInfo.userAddress;
    userPhone.value = userInfo.userPhone;
    
    for (var i = 0; i < userType.options.length; i++) {
        if (userType.options[i].value == userInfo.type) {
            userType.options[i].selected = true;
            break;
        }
    }

    disableEdit();
    document.querySelector('#user-info .control-form_heading h3').innerHTML = 'Xem thông tin';
    document.querySelector('#user-info .control-form__form-btn').style.display = 'none';
}

// Edit info
function showEditInfoModel(email) {
    showSeeInfoModel(email);
    enableEdit();
    document.querySelector('#user-info .control-form_heading h3').innerHTML = 'Sửa thông tin';
    document.querySelector('#user-info .control-form__form-btn').style.display = 'block';
}

function checkPhone() {
    if (!userPhone.value || (parseInt(userPhone.value) && userPhone.value.length == 10)) {
        return true;
    } else {
        return false;
    }
}

function EditInfo() {
    if (checkPhone()) {
        userAccount[editIndex].userFullName = userFullName.value;
        userAccount[editIndex].userName = userName.value;
        userAccount[editIndex].userEmail = userEmail.value;
        userAccount[editIndex].userPassword = userPass.value;
        userAccount[editIndex].userAddress = userAddress.value;
        userAccount[editIndex].userPhone = userPhone.value;
        
        for (var i = 0; i < userType.options.length; i++) {
            if (userType.options[i].selected == true) {
                userAccount[editIndex].type = userType.options[i].value;
                break;
            }
        }
        
        localStorage.setItem('userAccount', JSON.stringify(userAccount));
        document.querySelector('#user-info .error-phone').style.display = 'none';

        showToast('success', 'Thành công!', `Đã lưu thông tin mới của tài khoản ${userAccount[editIndex].userEmail}`);
        userControlModel.style.display = 'none';
        showUserPage();
    } else {
        document.querySelector('#user-info .error-phone').style.display = 'block';
    }
}

// Delete account
var deleteIndex;

function showDeleteAccountModel(email) {
    userControlModel.style.display = 'flex';
    deleteAccountModel.style.display = 'block';
    infoModel.style.display = 'none';

    userAccount.forEach(function(account, index) {
        if (account.userEmail == email) {
            deleteIndex = index;
        }
    });

    document.querySelector('#delete-account .delete-form_question').innerHTML = `Bạn có muốn xóa tài khoản "${email}" không ?`;
}

function isAdminAccount(account) {
    if (account.type == 'admin' || account.userName == 'Admin')
        return true;
    return false;
}

function deleteAccount() {
    var tmpAccount = userAccount[deleteIndex];
    if (isAdminAccount(tmpAccount)) {
        showToast('fail', 'Thất bại!', 'Không có quyền xóa tài khoản admin!');
    } else {
        for (var i = deleteIndex; i < userAccount.length - 1; i++) {
            userAccount[i] = userAccount[i + 1];
        }
        userAccount.length--;
        localStorage.setItem('userAccount', JSON.stringify(userAccount));
    
        showToast('success', 'Thành công!', `Xóa thành công tài khoản ${tmpAccount.userEmail}`);   
    }
    userControlModel.style.display = 'none';
    showUserPage();
}
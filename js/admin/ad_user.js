var userAccount = JSON.parse(localStorage.getItem('userAccount'));
var userList = document.querySelector('.admin__user-account-list');

<<<<<<< HEAD
// function htmlUser(account) {
//     var icon = {
//         admin: 'fa-solid fa-screwdriver-wrench',
//         user: 'fa-solid fa-user'
//     };

//     var html = `
//         <div class="admin__user-account-item">
//             <div class="admin__user-account-item-box">
//                 <i class="${icon[account.type]}"></i>
//             </div>
//             <div class="admin__user-account-item-box">
//                 <img src="./img/account-logo.png" alt="">
//             </div>
//             <div class="admin__user-account-item-box">
//                 <h3>${account.userName}</h3>
//                 <p>${account.userEmail}</p>
//             </div>
//             <div class="admin__user-account-item-box">
//                 <h3>Ngày đăng ký</h3>
//                 <p>${account.userDate}</p>
//             </div>
//             <div class="admin__user-account-item-box control">
//                 <i class="fa-solid fa-ellipsis-vertical"></i>
//                 <div class="admin__user-account-control">
//                     <div class="admin__user-account-control-item" onclick="showSeeInfoModal('${account.userEmail}')">
//                         <i class="uil uil-info-circle"></i>
//                         <span>Xem thông tin</span>
//                     </div>
//                     <div class="admin__user-account-control-item" onclick="showEditInfoModal('${account.userEmail}')">
//                         <i class="uil uil-edit"></i>
//                         <span>Sửa thông tin</span>
//                     </div>
//                     <div class="admin__user-account-control-item" onclick="showDeleteAccountModal('${account.userEmail}')">
//                         <i class="uil uil-user-times"></i>
//                         <span>Xóa tài khoản</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//     return html;
// }
// function htmlUser(account) {
//     var icon = {
//         admin: 'fa-solid fa-screwdriver-wrench',
//         user: 'fa-solid fa-user'
//     };

//     var html = `
//         <div class="admin__user-account-item">
//             <div class="admin__user-account-item-box">
//                 <i class="${icon[account.type]}"></i>
//             </div>
//             <div class="admin__user-account-item-box">
//                 <img src="./img/account-logo.png" alt="">
//             </div>
//             <div class="admin__user-account-item-box">
//                 <h3>${account.userName}</h3>
//                 <p>${account.userEmail}</p>
//             </div>
//             <div class="admin__user-account-item-box">
//                 <h3>Ngày đăng ký</h3>
//                 <p>${account.userDate}</p>
//             </div>
//             <div class="admin__user-account-item-box control">
//                 <i class="fa-solid fa-ellipsis-vertical"></i>
//                 <div class="admin__user-account-control">
//                     <div class="admin__user-account-control-item" onclick="showSeeInfoModal('${account.userEmail}')">
//                         <i class="uil uil-info-circle"></i>
//                         <span>Xem thông tin</span>
//                     </div>
//                     <div class="admin__user-account-control-item" onclick="showEditInfoModal('${account.userEmail}')">
//                         <i class="uil uil-edit"></i>
//                         <span>Sửa thông tin</span>
//                     </div>
//                     <div class="admin__user-account-control-item" onclick="showDeleteAccountModal('${account.userEmail}')">
//                          <i class="uil uil-user-times"></i>
//                          <span>Khóa tài khoản</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
//     return html;
// }

=======
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
function htmlUser(account) {
    var icon = {
        admin: 'fa-solid fa-screwdriver-wrench',
        user: 'fa-solid fa-user'
    };

<<<<<<< HEAD
    var lockUnlockButton = account.status === 1 
        ? '<div class="admin__user-account-control-item" onclick="showDeleteAccountModal(\'' + account.userEmail + '\')"><i class="uil uil-user-times"></i><span>Khóa tài khoản</span></div>' 
        : '<div class="admin__user-account-control-item" onclick="showDeleteAccountModal(\'' + account.userEmail + '\')"><i class="uil uil-user-check"></i><span>Mở khóa tài khoản</span></div>';

=======
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
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
                        <i class="uil uil-info-circle"></i>
                        <span>Xem thông tin</span>
                    </div>
                    <div class="admin__user-account-control-item" onclick="showEditInfoModal('${account.userEmail}')">
                        <i class="uil uil-edit"></i>
                        <span>Sửa thông tin</span>
                    </div>
<<<<<<< HEAD
                    ${lockUnlockButton} <!-- Thêm nút khóa/mở khóa -->
=======
                    <div class="admin__user-account-control-item" onclick="showDeleteAccountModal('${account.userEmail}')">
                        <i class="uil uil-user-times"></i>
                        <span>Xóa tài khoản</span>
                    </div>
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
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

<<<<<<< HEAD
// function disableEdit() {
//     console.log("disableEdit");
    
//     userFullName.classList.add('disable');
//     userFullName.readOnly = true;
//     userName.classList.add('disable');
//     userName.readOnly = true;
//     userEmail.classList.add('disable');
//     userEmail.readOnly = true;
//     // userPass.classList.add('disable');
//     // userPass.readOnly = true;
//     userAddress.classList.add('disable');
//     userAddress.readOnly = true;
//     userPhone.classList.add('disable');
//     userPhone.readOnly = true;
//     userType.style.cursor = 'not-allowed';
//     userType.disabled = true;
// }
=======
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
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
<<<<<<< HEAD
=======

>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
function enableEdit() {
    userFullName.classList.remove('disable');
    userFullName.readOnly = false;
    userName.classList.remove('disable');
    userName.readOnly = false;
<<<<<<< HEAD
    // userEmail.classList.remove('disable');
    // userEmail.readOnly = false;
    // userPass.classList.remove('disable');
    // userPass.readOnly = false;
    userEmail.classList.add('disable'); // Ensure email is still disabled
    userEmail.readOnly = true; // Keep email readonly
    userPass.classList.add('disable'); // Ensure password is still disabled
    userPass.readOnly = true; // Keep password readonly
=======
    userEmail.classList.remove('disable');
    userEmail.readOnly = false;
    userPass.classList.remove('disable');
    userPass.readOnly = false;
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
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

    var userInfo = userAccount.find(function(account, index) {
        editIndex = index;
        return account.userEmail == email;
<<<<<<< HEAD
    });

    // Set user information in the input fields
    userFullName.value = userInfo.userFullName; // This line sets the full name
=======
    })

    userFullName.value = userInfo.userFullName;
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
    userName.value = userInfo.userName;
    userEmail.value = userInfo.userEmail;
    userPass.value = userInfo.userPassword;
    userAddress.value = userInfo.userAddress;
    userPhone.value = userInfo.userPhone;
    
<<<<<<< HEAD
    // Set user type
=======
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
    for (var i = 0; i < userType.options.length; i++) {
        if (userType.options[i].value == userInfo.type) {
            userType.options[i].selected = true;
            break;
        }
    }

<<<<<<< HEAD
    // Disable editing fields for viewing only
    disableEdit();
    document.querySelector('#user-info .control-form__heading h3').innerHTML = 'Xem thông tin người dùng';
    document.querySelector('#user-info .control-form___form-btn').style.display = 'none';
}


=======
    disableEdit();
    document.querySelector('#user-info .control-form__heading h3').innerHTML = 'Xem thông tin';
    document.querySelector('#user-info .control-form___form-btn').style.display = 'none';
}

>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
// Edit info
function showEditInfoModal(email) {
    showSeeInfoModal(email);
    enableEdit();
    document.querySelector('#user-info .control-form__heading h3').innerHTML = 'Sửa thông tin';
    document.querySelector('#user-info .control-form___form-btn').style.display = 'block';
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
<<<<<<< HEAD
        // userAccount[editIndex].userEmail = userEmail.value;
        // userAccount[editIndex].userPassword = userPass.value;
=======
        userAccount[editIndex].userEmail = userEmail.value;
        userAccount[editIndex].userPassword = userPass.value;
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec
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
        userControlModal.style.display = 'none';
        showUserPage();
    } else {
        document.querySelector('#user-info .error-phone').style.display = 'block';
    }
}

// Delete account
<<<<<<< HEAD
var deleteEmail;

// function showDeleteAccountModal(email) {
//     userControlModal.style.display = 'flex';
//     deleteAccountModal.style.display = 'block';
//     infoModal.style.display = 'none';

//     deleteEmail = email;

//     document.querySelector('#delete-account .delete-form__question').innerHTML = `Bạn có muốn khóa tài khoản "${email}" không ?`;
// }


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
=======
var deleteIndex;
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec

function showDeleteAccountModal(email) {
    userControlModal.style.display = 'flex';
    deleteAccountModal.style.display = 'block';
    infoModal.style.display = 'none';

<<<<<<< HEAD
    deleteEmail = email;

    // Cập nhật nội dung câu hỏi trong modal
    userAccount.forEach(function(account) {
        if (account.userEmail === deleteEmail) {
            var action = account.status === 1 ? "Khóa tài khoản" : "Mở khóa tài khoản";
            document.querySelector('#delete-account .delete-form__question').innerHTML = `Bạn có muốn ${action} "${email}" không ?`;
        }
    });
}
// function lockAccount() {
//     userAccount.forEach(function(account) {
//         if (account.userEmail === deleteEmail) {
//             account.status = 0; // Đặt trạng thái là 0 để khóa tài khoản
//         }
//     });
//     localStorage.setItem('userAccount', JSON.stringify(userAccount));
    
//     showToast('success', 'Thành công!', "Khóa tài khoản thành công");   
//     userControlModal.style.display = 'none';
//     showUserPage(); // Cập nhật lại danh sách người dùng
// }
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
=======
    userAccount.forEach(function(account, index) {
        if (account.userEmail == email) {
            deleteIndex = index;
        }
    });

    document.querySelector('#delete-account .delete-form__question').innerHTML = `Bạn có muốn xóa tài khoản "${email}" không ?`;
}

function isAdminAccount(account) {
    if (account.type == 'admin')
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
    userControlModal.style.display = 'none';
    showUserPage();
}
>>>>>>> 8f4a32d2abd7b2d558e3b5f014ad424b6dd50dec

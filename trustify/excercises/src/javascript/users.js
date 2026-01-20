// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;

// Show Users with pagination
function showUsers(page = 1) {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    
    // Filter out admin account
    const regularUsers = users.filter(u => u.username !== 'admin');
    
    let html = "";
    currentPage = page;
    
    // Calculate pagination
    const totalPages = Math.ceil(regularUsers.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedUsers = regularUsers.slice(startIndex, endIndex);

    if (regularUsers.length === 0) {
        html = '<tr><td colspan="6" class="no-data">Chưa có người dùng nào</td></tr>';
    } else {
        paginatedUsers.forEach(user => {
            html += `
            <tr>
                <td>${user.username}</td>
                <td>${user.fullname || 'Chưa cập nhật'}</td>
                <td>${user.phone || 'Chưa cập nhật'}</td>
                <td>${user.address || 'Chưa cập nhật'}</td>
                <td>${user.datesignup || 'Chưa cập nhật'}</td>
                <td>
                    <button onclick="editUser('${user.username}')">Sửa</button>
                    <button onclick="deleteUser('${user.username}')">Xóa</button>
                </td>
            </tr>`;
        });
    }

    document.getElementById("userTable").innerHTML = html;
    renderPagination(totalPages, page, regularUsers.length);
}

// Open User Modal (for adding)
function openUserModal() {
    resetForm();
    document.getElementById('modalTitle').textContent = 'Thêm người dùng mới';
    document.getElementById('btnText').textContent = 'Lưu người dùng';
    document.getElementById('password').required = true;
    document.getElementById('passwordRequired').style.display = 'inline';
    document.getElementById('userModal').classList.add('show');
}

// Edit User
function editUser(username) {
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const user = users.find(u => u.username === username);

    if (user) {
        document.getElementById('originalUsername').value = user.username;
        document.getElementById('username').value = user.username;
        document.getElementById('fullname').value = user.fullname || '';
        document.getElementById('phone').value = user.phone || '';
        document.getElementById('address').value = user.address || '';
        document.getElementById('datesignup').value = user.datesignup || '';
        document.getElementById('password').value = '';
        document.getElementById('password').required = false;
        document.getElementById('passwordRequired').style.display = 'none';

        document.getElementById('modalTitle').textContent = 'Cập nhật người dùng';
        document.getElementById('btnText').textContent = 'Cập nhật';
        
        document.getElementById('userModal').classList.add('show');
    }
}

// Save User (Create or Update)
function saveUser(event) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem("user")) || [];
    const originalUsername = document.getElementById('originalUsername').value;
    const username = document.getElementById('username').value;
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Số điện thoại phải có 10 chữ số!');
        return;
    }

    // Check if username already exists (when adding or changing username)
    if (!originalUsername || originalUsername !== username) {
        const existingUser = users.find(u => u.username === username);
        if (existingUser) {
            alert('Tên đăng nhập đã tồn tại!');
            return;
        }
    }

    if (originalUsername) {
        // Update existing user
        const userIndex = users.findIndex(u => u.username === originalUsername);
        if (userIndex !== -1) {
            users[userIndex].username = username;
            users[userIndex].fullname = fullname;
            users[userIndex].phone = phone;
            users[userIndex].address = address;
            
            // Only update password if provided
            if (password) {
                if (password.length < 8) {
                    alert('Mật khẩu phải có ít nhất 8 ký tự!');
                    return;
                }
                users[userIndex].password = password;
            }
        }
        alert('Cập nhật người dùng thành công!');
    } else {
        // Add new user
        if (!password || password.length < 8) {
            alert('Mật khẩu phải có ít nhất 8 ký tự!');
            return;
        }

        const date = new Date();
        const datesignup = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        const newUser = {
            username,
            password,
            fullname,
            address,
            phone,
            datesignup
        };
        
        users.push(newUser);
        alert('Thêm người dùng thành công!');
    }

    localStorage.setItem('user', JSON.stringify(users));
    closeUserModal();
    showUsers(currentPage);
}

// Delete User
function deleteUser(username) {
    if (!confirm('Bạn có chắc muốn xóa người dùng này?')) return;

    let users = JSON.parse(localStorage.getItem("user")) || [];
    users = users.filter(u => u.username !== username);
    
    localStorage.setItem('user', JSON.stringify(users));
    alert('Xóa người dùng thành công!');
    
    // Adjust current page if necessary
    const regularUsers = users.filter(u => u.username !== 'admin');
    const totalPages = Math.ceil(regularUsers.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    showUsers(currentPage);
}

// Close User Modal
function closeUserModal() {
    document.getElementById('userModal').classList.remove('show');
    resetForm();
}

// Reset Form
function resetForm() {
    document.getElementById('userForm').reset();
    document.getElementById('originalUsername').value = '';
    document.getElementById('password').required = true;
    document.getElementById('passwordRequired').style.display = 'inline';
}

// Render Pagination
function renderPagination(totalPages, currentPage, totalItems) {
    let paginationHtml = '';
    
    if (totalPages <= 1) {
        document.getElementById("pagination").innerHTML = '';
        return;
    }
    
    // Previous button
    paginationHtml += `
        <button onclick="showUsers(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ◀ Trước
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHtml += `
                <button onclick="showUsers(${i})" class="${i === currentPage ? 'active' : ''}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHtml += `<span class="page-info">...</span>`;
        }
    }
    
    // Next button
    paginationHtml += `
        <button onclick="showUsers(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Sau ▶
        </button>
    `;
    
    // Page info
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    paginationHtml += `
        <span class="page-info">
            Hiển thị ${startItem}-${endItem} / ${totalItems}
        </span>
    `;
    
    document.getElementById("pagination").innerHTML = paginationHtml;
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeUserModal();
    }
});
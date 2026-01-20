// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;
let currentFilter = 'all';
let currentOrderId = null;

// Currency formatter
function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' ₫';
}

// Show Orders with pagination and filter
function showOrders(page = 1) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    let filteredOrders = orders;

    // Apply filter
    if (currentFilter !== 'all') {
        filteredOrders = orders.filter(o => o.status === currentFilter);
    }

    // Sort by date (newest first)
    filteredOrders.sort((a, b) => b.orderId - a.orderId);

    let html = "";
    currentPage = page;
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

    if (filteredOrders.length === 0) {
        html = '<tr><td colspan="6" class="no-data">Chưa có đơn hàng nào</td></tr>';
    } else {
        paginatedOrders.forEach(order => {
            const statusClass = getStatusClass(order.status);
            html += `
            <tr>
                <td>#${order.orderId}</td>
                <td>${order.userId}</td>
                <td>${order.date}</td>
                <td>${currency(order.total)}</td>
                <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                <td>
                    <button onclick="viewOrderDetails(${order.orderId})">Chi tiết</button>
                    <button onclick="deleteOrder(${order.orderId})">Xóa</button>
                </td>
            </tr>`;
        });
    }

    document.getElementById("orderTable").innerHTML = html;
    renderPagination(totalPages, page, filteredOrders.length);
}

// Get status CSS class
function getStatusClass(status) {
    const statusMap = {
        'Đang xử lý': 'status-pending',
        'Đã xác nhận': 'status-confirmed',
        'Đang giao': 'status-shipping',
        'Hoàn thành': 'status-completed',
        'Đã hủy': 'status-cancelled'
    };
    return statusMap[status] || 'status-pending';
}

// Filter orders
function filterOrders() {
    currentFilter = document.getElementById('statusFilter').value;
    currentPage = 1;
    showOrders(1);
}

// View order details
function viewOrderDetails(orderId) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = orders.find(o => o.orderId === orderId);
    
    if (!order) {
        alert('Không tìm thấy đơn hàng');
        return;
    }

    currentOrderId = orderId;

    // Get user info
    const users = JSON.parse(localStorage.getItem("user")) || [];
    const user = users.find(u => u.username === order.userId);

    // Fill order details
    document.getElementById('orderIdDetail').textContent = '#' + order.orderId;
    document.getElementById('orderDateDetail').textContent = order.date;
    document.getElementById('orderStatusDetail').textContent = order.status;
    document.getElementById('orderStatusDetail').className = 'status-badge ' + getStatusClass(order.status);

    if (user) {
        document.getElementById('customerName').textContent = user.fullname || user.username;
        document.getElementById('customerAddress').textContent = user.address || 'Chưa cập nhật';
        document.getElementById('customerPhone').textContent = user.phone || 'Chưa cập nhật';
    } else {
        document.getElementById('customerName').textContent = order.userId;
        document.getElementById('customerAddress').textContent = 'Chưa cập nhật';
        document.getElementById('customerPhone').textContent = 'Chưa cập nhật';
    }

    // Fill products list
    let productsHtml = '';
    order.items.forEach(item => {
        productsHtml += `
            <tr>
                <td><img src="${item.img}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>${currency(item.price)}</td>
                <td>${item.quantity}</td>
                <td>${currency(item.price * item.quantity)}</td>
            </tr>
        `;
    });
    document.getElementById('orderProductsList').innerHTML = productsHtml;
    document.getElementById('orderTotalDetail').textContent = currency(order.total);

    // Set current status in dropdown
    document.getElementById('statusUpdate').value = order.status;

    // Open modal
    document.getElementById('orderModal').classList.add('show');
}

// Update order status
function updateOrderStatus() {
    if (!currentOrderId) return;

    const newStatus = document.getElementById('statusUpdate').value;
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    
    const orderIndex = orders.findIndex(o => o.orderId === currentOrderId);
    if (orderIndex !== -1) {
        orders[orderIndex].status = newStatus;
        localStorage.setItem('orders', JSON.stringify(orders));
        
        alert('Cập nhật trạng thái thành công!');
        closeOrderModal();
        showOrders(currentPage);
    }
}

// Delete order
function deleteOrder(orderId) {
    if (!confirm('Bạn có chắc muốn xóa đơn hàng này?')) return;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders = orders.filter(o => o.orderId !== orderId);
    
    localStorage.setItem('orders', JSON.stringify(orders));
    alert('Xóa đơn hàng thành công!');
    
    // Adjust current page if necessary
    const totalPages = Math.ceil(orders.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    showOrders(currentPage);
}

// Close order modal
function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('show');
    currentOrderId = null;
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
        <button onclick="showOrders(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ◀ Trước
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHtml += `
                <button onclick="showOrders(${i})" class="${i === currentPage ? 'active' : ''}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHtml += `<span class="page-info">...</span>`;
        }
    }
    
    // Next button
    paginationHtml += `
        <button onclick="showOrders(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
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
        closeOrderModal();
    }
});
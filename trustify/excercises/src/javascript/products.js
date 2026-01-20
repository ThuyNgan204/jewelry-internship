// Filter Array
let filteredProducts = [];

// Product Key
const PRODUCT_KEY = 'products';

// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;

// Show Products
function showProducts(page = 1, data = null) {
    const products = data || JSON.parse(localStorage.getItem("products")) || [];
    let html = "";

    currentPage = page;

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    if (products.length === 0) {
        html = `<tr>
            <td colspan="7" class="no-data">Không tìm thấy sản phẩm</td>
        </tr>`;
    } else {
        paginatedProducts.forEach(p => {
            const descriptionPreview =
                p.description && p.description.length > 50
                    ? p.description.substring(0, 50) + "..."
                    : p.description || "Chưa có mô tả";

            html += `
            <tr>
                <td>${p.productId}</td>
                <td><img src="${p.img[0]}" alt="${p.name}"></td>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString("vi-VN")} ₫</td>
                <td>${getCategoryName(p.category)}</td>
                <td class="description-cell" title="${p.description || ""}">
                    ${descriptionPreview}
                </td>
                <td>
                    <button onclick="editProduct(${p.productId})">Sửa</button>
                    <button onclick="deleteProduct(${p.productId})">Xoá</button>
                </td>
            </tr>`;
        });
    }

    document.getElementById("productTable").innerHTML = html;
    renderPagination(totalPages, page, products.length);
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
        <button onclick="showProducts(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ◀ Trước
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if ( i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            paginationHtml += `
                <button onclick="showProducts(${i})" class="${i === currentPage ? 'active' : ''}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHtml += `<span class="page-info">...</span>`;
        }
    }
    
    // Next button
    paginationHtml += `
        <button onclick="showProducts(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
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

// Delete Product
function deleteProduct(id) {
    if (!confirm("Bạn có chắc muốn xoá sản phẩm này?")) return;

    let products = JSON.parse(localStorage.getItem("products"));
    products = products.filter(p => p.productId !== id);

    localStorage.setItem("products", JSON.stringify(products));
    alert("Xoá sản phẩm thành công!");
    
    // Adjust current page if necessary
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    applyFilters();
}

// Edit Product
function editProduct(id) {
    const products = JSON.parse(localStorage.getItem("products"));
    const p = products.find(p => p.productId === id);

    if (p) {
        document.getElementById("productId").value = p.productId;
        document.getElementById("name").value = p.name;
        document.getElementById("price").value = p.price;
        document.getElementById("category").value = p.category;
        document.getElementById("description").value = p.description || '';
        
        // Show existing image preview
        document.getElementById("imagePreview").src = p.img[0];
        document.getElementById("imagePreviewContainer").style.display = "block";
        
        // Make image input optional when editing
        document.getElementById("img").required = false;
        
        // Update modal title
        document.getElementById("modalTitle").textContent = "Cập nhật sản phẩm";
        document.getElementById("btnText").textContent = "Cập nhật";
        
        // Open modal
        openModal();
    }
}

// Save Product (Create or Update)
function saveProduct(event) {
    event.preventDefault();

    const imgFile = document.getElementById("img").files[0];
    
    if (!imgFile && !document.getElementById("productId").value) {
        alert("Vui lòng chọn ảnh sản phẩm!");
        return;
    }

    // If new image is uploaded
    if (imgFile) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            saveProductWithImage(e.target.result);
        };
        
        reader.readAsDataURL(imgFile);
    } else {
        // Use existing image when updating without new image
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const id = document.getElementById("productId").value;
        const existingProduct = products.find(p => p.productId === Number(id));
        saveProductWithImage(existingProduct.img);
    }
}

// Save Product With Image Data
function saveProductWithImage(imageData) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const id = document.getElementById("productId").value;

    const product = {
        productId: id ? Number(id) : getNextProductId(products),
        name: document.getElementById("name").value,
        price: Number(document.getElementById("price").value),
        category: document.getElementById("category").value,
        img: [imageData],
        description: document.getElementById("description").value || ''
    };

    if (id) {
        // Update existing product
        products = products.map(p => p.productId === product.productId ? product : p);
        alert("Cập nhật sản phẩm thành công!");
    } else {
        // Add new product
        products.push(product);
        alert("Thêm sản phẩm thành công!");
    }

    localStorage.setItem("products", JSON.stringify(products));
    closeModal();
    showProducts(currentPage);
}

// Get Next Product ID (Auto-increment)
function getNextProductId(products) {
    if (products.length === 0) {
        return 1;
    }
    
    // Find the highest existing ID and add 1
    const maxId = Math.max(...products.map(p => p.productId));
    return maxId + 1;
}

// Reset Form
function resetForm() {
    document.getElementById("productForm").reset();
    document.getElementById("productId").value = "";
    document.getElementById("modalTitle").textContent = "Thêm sản phẩm mới";
    document.getElementById("btnText").textContent = "Lưu sản phẩm";
    document.getElementById("imagePreviewContainer").style.display = "none";
    document.getElementById("img").required = true;
}

// Open Modal
function openModal() {
    document.getElementById("productModal").classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Close Modal
function closeModal() {
    document.getElementById("productModal").classList.remove("show");
    document.body.style.overflow = "auto"; // Restore scrolling
    resetForm();
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Get Category Name
function getCategoryName(category) {
    const categories = {
        'ring': 'Nhẫn',
        'necklace': 'Dây chuyền',
        'bracelet': 'Vòng tay',
        'watch': 'Đồng hồ'
    };
    return categories[category] || category;
}

// Preview Image Before Upload
function previewImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        imagePreview.src = e.target.result;
        imagePreviewContainer.style.display = "block";
    };
    reader.readAsDataURL(file);
}

// Filter Function
function applyFilters() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const categoryValue = document.getElementById("categoryFilter").value;

    const products = JSON.parse(localStorage.getItem("products")) || [];

    filteredProducts = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(searchValue);
        const matchCategory = categoryValue === "all" || p.category === categoryValue;
        return matchName && matchCategory;
    });

    showProducts(1, filteredProducts);
}

// Close Image Preview
function closeImagePreview() {
    document.getElementById("imagePreviewContainer").style.display = "none";
    document.getElementById("img").value = "";
}
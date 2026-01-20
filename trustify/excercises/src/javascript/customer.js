createAdmin();

function currency(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
}

/*NAVMENU*/
function showMenu() {
    var menuList = [
        {name: 'Nhẫn', key: 'ring'},
        {name: 'Dây chuyền', key: 'necklace'},
        {name: 'Vòng tay', key: 'bracelet'},
        {name: 'Đồng hồ', key: 'watch'}
    ];
    var ul = document.getElementById('navMenu');
    var li = '<li><a href="index.html">Trang chủ</a></li>';
    for(var i = 0; i <menuList.length; i++){
        li += `<li><a href="index.html?${menuList[i].key}&0">${menuList[i].name}</a></li>`;
    }
    ul.innerHTML = li;
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('show');
    }
});

/*PRODUCT*/
function showProduct() {
    var productList = document.getElementById("product-list");
    if (!productList) return;

    var url = document.location.href;
    var temp = url.split("?");
    var x = '';
    var productArray = JSON.parse(localStorage.getItem('products'));
    if (temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0){
        if (temp[1]=='' || temp[1]==undefined){
            temp = 'all&0';
        }else{
            temp = temp[1];
        }
        var temp2 = temp.split('&');
        var vitri = temp2[1];
        var sotrang = 0, dem = 0;
        for (var i = vitri; i < productArray.length; i++){
            x += '<div class="card">'+
                        '<img src="'+ productArray[i].img[0] +'">'+
                        '<p style="height: 50px !important">'+ productArray[i].name +'</p>'+
                        '<p style="color: #C48C46">' + currency(productArray[i].price) +'</p>'+
                        '<button class="btn" onclick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
            dem++;
            if (dem == 12)
                break;
        }
        sotrang = Math.ceil(productArray.length/12);
        var lienket = '';
        for (var i = 1; i <= sotrang; i++){
            vitri = (i-1)*12;
            var a = '<a href="index.html?all&'+vitri+'">'+i+'</a>';
            lienket += '<div class="pageNumber">'+a+'</div>';
        }
        document.getElementById('page').innerHTML = lienket;
    }
    else{
        temp = temp[1];
        var temp2 = temp.split("&");
        var category = temp2[0];
        var vitri = temp2[1];
        var sotrang = 0, dem = 0;
        var arrtemp = [];
        for (var i = 0; i < productArray.length; i++) {
            if (category == productArray[i].category) {
                arrtemp.push(productArray[i]);
            }
        }
        for (var i = vitri; i < arrtemp.length; i++){
            x += '<div class="card">'+
                        '<img src="'+ arrtemp[i].img[0] +'">'+
                        '<p>'+ arrtemp[i].name +'</p>'+
                        '<p style="color: #C48C46">' + currency(arrtemp[i].price) +'</p>'+
                        '<button class="btn" onclick="showProductInfo('+arrtemp[i].productId+')">Chi tiết</button></div>';
            dem++;
            if (dem == 8)
                break;
        }
        sotrang = Math.ceil(arrtemp.length/8);
        var lienket = '';
        for (var i = 1; i <= sotrang; i++){
            vitri = (i-1)*8;
            var a = '<a href="index.html?'+category+'&'+vitri+'">'+i+'</a>';
            lienket += '<div class="pageNumber">'+a+'</div>';
        }
        document.getElementById('page').innerHTML = lienket;
    }
    document.getElementById('product-list').innerHTML = x;
}

function showProductInfo(productid) {
    document.getElementById('productInfo').style.display = 'block';
    var productArray = JSON.parse(localStorage.getItem('products'));
    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].productId == productid) {
            document.getElementById('productName').innerHTML = productArray[i].name;
            document.getElementById('productPrice').innerHTML = currency(productArray[i].price);
            
            var imgBig = document.getElementById('imgBig');
            imgBig.src = productArray[i].img[0];

            var thumbList = document.getElementById('thumbList');
            thumbList.innerHTML = '';

            productArray[i].img.forEach((src, index) => {
                var img = document.createElement('img');
                img.src = src;

                if (index === 0) img.classList.add('active');

                img.onclick = function () {
                    imgBig.src = this.src;
                    document.querySelectorAll('.thumb-list img').forEach(i => i.classList.remove('active'));
                    this.classList.add('active');
                }

                thumbList.appendChild(img);
            });

            document.getElementById('quantity').value = 1;
            document.querySelector('#info .right button.addToCart').setAttribute('onclick', 'addToCart('+productid+')');
            document.getElementById('productDescription').innerHTML = productArray[i].description;
        }
    }
}

function closeProductInfo() {
    document.getElementById('productInfo').style.display = 'none'
}

function quantityDown() {
    if (document.getElementById('quantity').value > 1){
        document.getElementById('quantity').value--;
    }
}

function quantityUp() {
    document.getElementById('quantity').value++;
}

/*USER*/
function createAdmin() {
    if(localStorage.getItem('user')===null){
        var userArray = [];
        var admin = {username: 'admin', password: 'admin', fullname: 'Team Ngân Trí', address: 'Lam Sơn, Tân Bình, TP HCM', phone: '0354682931' };
        userArray.push(admin);
        localStorage.setItem('user', JSON.stringify(userArray));
    }
}
function showForm() {
    var userform = document.getElementById('user');
    userform.style.display= 'block';
    resetAuthForm();

    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
}
function closeForm() {
    var userform= document.getElementById('user');
    userform.style.display= 'none';
    resetAuthForm();
}
function resetAuthForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();

    const errors = document.querySelectorAll(
        '#loginForm div[id$="Error"], #signupForm div[id$="Error"]'
    );
    errors.forEach(err => {
        err.style.display = 'none';
    })
}
function showSignup() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
}
function showLogin() {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
document.getElementById('signupForm').addEventListener('submit', createUser);
document.getElementById('loginForm').addEventListener('submit', login);
function createUser(e) {
    e.preventDefault();
    var fullname = document.getElementById('fullname');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var username = document.getElementById('usernameSignup');
    var password = document.getElementById('passwordSignup');
    var password2 = document.getElementById('passwordSignup2');
    var flag = true;
    if(!fullname.value){
        document.getElementById('fullnameError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('fullnameError').style.display = 'none';
    }
    if(!address.value){
        document.getElementById('addressError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('addressError').style.display = 'none';
    }
    if(!phone.value){
        document.getElementById('phoneError').style.display = 'block';
        flag = false;
    }else{
        if(isNaN(Number(phone.value))){
            document.getElementById('phoneError').style.display = 'block';
            document.getElementById('phoneError').innerHTML = 'Số điện thoại không hợp lệ.';
            flag = false;
        }else{
            let phoneNum = Number(phone.value);
            let secondChar = phone.value[1];
            let validNum = ['3', '5', '7', '8', '9'];

            if(phoneNum < 100000000 || phoneNum > 999999999 || phone.value.length !== 10 || phone.value[0] !== '0' || !validNum.includes(secondChar)){
                document.getElementById('phoneError').style.display = 'block';
                document.getElementById('phoneError').innerHTML = 'Số điện thoại không đúng.';
                flag = false;
            }else{
                document.getElementById('phoneError').style.display = 'none';
            }
        }
    }
    if(!username.value){
        document.getElementById('usernameSignupError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('usernameSignupError').style.display = 'none';
    }
    if(!password.value){
        document.getElementById('passwordSignupError').style.display = 'block';
        flag = false;
    }else{
        if(password.value.length < 8){
            document.getElementById('passwordSignupError').style.display = 'block';
            document.getElementById('passwordSignupError').innerHTML = 'Mật khẩu phải từ 8 ký tự.';
            flag = false;
        }else{
            document.getElementById('passwordSignupError').style.display = 'none';
        }
    }
    if(password2.value !== password.value){
        document.getElementById('passwordSignup2Error').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('passwordSignup2Error').style.display = 'none';
    }
    if(flag == false){
        return false;
    }
    var d = new Date();
    var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
    var user = {username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value, datesignup: datesignup}
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i = 0; i < userArray.length; i++){
        if(user.username == userArray[i].username){
            document.getElementById('usernameSignupError').style.display = 'block';
            document.getElementById('usernameSignupError').innerHTML = 'Tên đăng nhập đã có người sử dụng.';
            username.focus();
            return false;
        }
    }
    userArray.push(user);
    localStorage.setItem('user', JSON.stringify(userArray));
    localStorage.setItem('userLogin', JSON.stringify(user));
    customAlert('Bạn đã đăng ký thành công!', 'success');
    closeForm();
    setTimeout(() => {
        window.location.reload();
    }, 10);
}
function login(e) {
    e.preventDefault();
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    var flag = true;
    if(!username){
        document.getElementById('usernameError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('usernameError').style.display = 'none';
    }
    if(!password){
        document.getElementById('passwordError').style.display = 'block';
        flag = false;
    }else{
        document.getElementById('passwordError').style.display = 'none';
    }
    if(flag == false){
        return false;
    }
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i = 0; i < userArray.length; i++){
        if(username == userArray[i].username){
            if(password == userArray[i].password){
                closeForm();
                localStorage.setItem('userLogin', JSON.stringify(userArray[i]));
                window.location.reload(true);
                return true;
            }
        }
    }
    document.getElementById('passwordError').style.display = 'block';
    document.getElementById('passwordError').innerHTML = 'Sai thông tin đăng nhập.';
    return false;
}
function logout(url){
    localStorage.removeItem('userLogin');
    location.href = url;
}
function checkLogin(){
    if(localStorage.getItem('userLogin')){
        var user = JSON.parse(localStorage.getItem('userLogin'));
        var i = '';
        if(user.username == 'admin'){
            i = '<li><button>Hello, '+user.username+'</button><button id="btnLogout" onclick="logout(\'../pages/index.html\')">Đăng xuất</button></li>'+
                '<li><a href="../administrators/products.html"><img src="../assets/icon/setting.svg" alt="setting icon"/></a></li>'+
                '<li><a href="./cart.html"><img src="../assets/icon/cart.svg" alt="cart icon"/></a></li>'+
                '<li><button id="btnSearch"><img src="../assets/icon/search.svg" alt="search icon"/></button></li>';
        }else{
            i = '<li><button>Hello, '+user.username+'</button><button id="btnLogout" onclick="logout(\'index.html\')">Đăng xuất</button></li>'+
                '<li><a href="./cart.html"><img src="../assets/icon/cart.svg" alt="cart icon"/></a></li>'+
                '<li><button id="btnSearch"><img src="../assets/icon/search.svg" alt="search icon"/></button></li>';
        }
        document.querySelector('header .icon').innerHTML = i;
        
    }
}

/*SEARCH*/
const search = document.getElementById('search');
const searchArea = document.getElementById('searchArea');
const searchInput = document.getElementById('searchProduct');
const result = document.getElementById('result');
const headerIcon = document.querySelector('header .icon');

headerIcon.addEventListener('click', (e) => {
    const btn = e.target.closest('#btnSearch');
    if (!btn) return;
    
    e.stopPropagation();
    search.style.display = 'block';
    searchInput.focus();

    result.innerHTML = `<p class="empty">Không có sản phẩm nào.</p>`;
});

document.addEventListener('click', (e) => {
    if (search.style.display === 'block' && !searchArea.contains(e.target)) {
        closeSearch();
    }
});

searchArea.addEventListener('click', e => e.stopPropagation());

function closeSearch() {
    search.style.display = 'none';
    searchInput.value = '';
    result.innerHTML = '';
}

searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    result.innerHTML = '';

    const products = JSON.parse(localStorage.getItem('products')) || [];

    if (!keyword) {
        result.innerHTML = `<p class="empty">Không có sản phẩm nào.</p>`;
        return;
    }

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(keyword)
    );

    if (filtered.length === 0) {
        result.innerHTML = `<p class="empty">Không có sản phẩm nào.</p>`;
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';

        div.innerHTML = `
            <img src="${item.img[0]}" alt="">
            <div class="result-info">
                <span class="result-name">${item.name}</span>
                <span class="result-price">${currency(item.price)}</span>
            </div>
        `;

        div.onclick = () => showProductInfo(item.productId);
        result.appendChild(div);
    });
});

/*Banner*/
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slideShow');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';

    setTimeout(showSlides, 3000);
}

showSlides();

/*Cart*/
function addToCart(productid) {
    var productArray = JSON.parse(localStorage.getItem('products')) || [];
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    var quantity = parseInt(document.getElementById('quantity').value);

    if (quantity < 1) {
        alert("Số lượng không hợp lệ");
        return;
    }

    var product = productArray.find(p => p.productId == productid);

    if (!product) {
        alert("Không tìm thấy sản phẩm");
        return;
    }

    var cartItem = cart.find(item => item.productId == productid);

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            productId: product.productId,
            name: product.name,
            price: product.price,
            img: product.img[0],
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    customAlert('Đã thêm sản phẩm vào giỏ hàng', 'success');

    if (typeof showCart === 'function') {
    showCart();
}

}

function showCart() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var mainCart = document.getElementById('mainCart');

    mainCart.innerHTML = '';

    if (cart.length === 0) {
        mainCart.innerHTML = '<p class="empty-cart">Giỏ hàng của bạn đang trống</p>';
        return;
    }

    var total = 0;

    cart.forEach((item, index) => {
        var itemTotal = item.price * item.quantity;
        total += itemTotal;

        mainCart.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                
                <div class="cart-info">
                    <p class="cart-name">${item.name}</p>
                    <p class="cart-price">${currency(item.price)}</p>
                </div>

                <div class="cart-quantity">
                    <button onclick="updateQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>

                <div class="cart-total">
                    ${currency(itemTotal)}
                </div>

                <button class="cart-remove" onclick="removeItem(${index})">✕</button>
            </div>
        `;
    });

    mainCart.innerHTML += `
        <div class="cart-summary">
            <p>Tổng tiền:</p>
            <p class="cart-sum">${currency(total)}</p>
        </div>
        <div class="purchase">
            <button class="cart-remove-all" onclick="removeAllItem()">Xóa tất cả</button>
            <button class="cart-purchase" onclick="purchase()">Thanh toán</button>
        </div>
    `;
}

function updateQuantity(index, change) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart[index].quantity += change;

    if (cart[index].quantity < 1) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showCart();
}

function removeItem(index) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    showCart();
}

function removeAllItem() {
    localStorage.removeItem('cart');
    showCart();
}

function purchase() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        alert("Giỏ hàng trống, không thể thanh toán");
        return;
    }

    var user = JSON.parse(localStorage.getItem('userLogin'));

    if (!user) {
        alert("Vui lòng đăng nhập để thanh toán");
        return;
    }

    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    var order = {
        orderId: Date.now(),
        userId: user.username,
        items: cart,
        total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
        date: new Date().toLocaleString(),
        status: "Đang xử lý"
    };

    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');

    customAlert('Thanh toán thành công', 'success');

    showOrders();
    showCart();
}

function showOrders() {
    var user = JSON.parse(localStorage.getItem('userLogin'));
    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    var orderSection = document.getElementById('orderSection');
    var orderArea = document.getElementById('orderArea');

    if (!user) {
        orderSection.style.display = 'none';
        return;
    }

    var userOrders = orders
        .filter(o => o.userId === user.username)
        .reverse();

    if (userOrders.length === 0) {
        orderSection.style.display = 'none';
        orderArea.innerHTML = '';
        return;
    }

    orderSection.style.display = 'block';
    orderArea.innerHTML = '';

    userOrders.forEach(order => {
        orderArea.innerHTML += `
            <div class="order-item">
                <div class="order-header">
                    <span>Mã đơn: ${order.orderId}</span>
                    <span>${order.date}</span>
                    <span class="order-status">${order.status}</span>
                </div>

                <div class="order-products">
                    ${order.items.map(item => `
                        <div class="order-product">
                            <img src="${item.img}">
                            <span>${item.name} × ${item.quantity}</span>
                        </div>
                    `).join('')}
                </div>

                <p class="order-total">
                    Tổng tiền: ${currency(order.total)}
                </p>
            </div>
        `;
    });
}

/*SORTING*/
function sortPrice(value) {
    if (!value) return;

    let productArray = JSON.parse(localStorage.getItem('products')) || [];

    productArray.sort((a, b) =>
        value === 'asc' ? a.price - b.price : b.price - a.price
    );

    localStorage.setItem('products', JSON.stringify(productArray));

    let params = document.location.search.replace('?', '').split('&');
    let category = params[0] || 'all';

    window.location.href = `index.html?${category}&0`;
}

/*CUSTOM ALERT*/
function customAlert(message, type){
    if(type == 'success'){
        document.getElementById("customAlert").style.backgroundColor = '#4CAF50';
    }
    if(type == 'warning'){
        document.getElementById("customAlert").style.backgroundColor = '#f44336';  
    }
    document.getElementById("customAlert").innerHTML = message;
    var x = document.getElementById("customAlert");
    x.className = "show";
    setTimeout(
        function() {
            x.className = x.classList.remove("show");
        }, 3500
    );
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const error = input.nextElementSibling;
            if (error && error.id.includes('Error')){
                error.style.display = 'none';
            }
        });
    });
});

createAdmin();

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
}
function closeForm() {
    var userform= document.getElementById('user');
    userform.style.display= 'none';
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
    customAlert('Bạn đã đăng ký thành công!', 'success');
    showLogin();
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
            i = '<li><button>'+user.fullname+'</button><button id="btnLogout" onclick="logout(\'../pages/index.html\')">Đăng xuất</button></li>'+
                '<li><img src="../assets/icon/setting.svg" alt="setting icon"/></li>'+
                '<li><img src="../assets/icon/cart.svg" alt="cart icon"/></li>'+
                '<li><img src="../assets/icon/search.svg" alt="search icon"/></li>';
        }else{
            i = '<li><button>'+user.fullname+'</button><button id="btnLogout" onclick="logout(\'index.html\')">Đăng xuất</button></li>'+
                '<li><img src="../assets/icon/cart.svg" alt="cart icon"/></li>'+
                '<li><img src="../assets/icon/search.svg" alt="search icon"/></li>';
        }
        document.querySelector('header ul').innerHTML = i;
        
    }
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


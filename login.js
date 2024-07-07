document.addEventListener('DOMContentLoaded', function() {
    var rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('login-email').value = rememberedEmail;
        document.getElementById('remember-me').checked = true;
    }
});

function login() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var rememberMe = document.getElementById('remember-me').checked;

    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }

    console.log('로그인 시도:', email, password);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('로그인 성공');
            } else {
                alert('로그인 실패: ' + xhr.responseText);
            }
        }
    };
    xhr.send(JSON.stringify({ email: email, password: password }));
}

function goToSignup() {
    window.location.href = 'signup.html'; 
}

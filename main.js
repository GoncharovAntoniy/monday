burger.onclick = function () {
    let x =document.querySelector('.navbar-menu')
    if (x.className == 'navbar-menu') {
        x.className += ' responcive'
    }
    else {
        x.className = 'navbar-menu'
    }
}

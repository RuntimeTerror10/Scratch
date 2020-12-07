const navigate =document.querySelector('nav');
window.onscroll =function(){
    var top = window.scrollY;
    if(top>=20){
        navigate.classList.add('active');
    }
    else{
        navigate.classList.remove('active');
    }
} 
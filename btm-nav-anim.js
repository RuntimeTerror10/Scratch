var arrow = document.getElementById('ar');
var links = document.getElementById('nv');
var arr =document.getElementById('a');

var show;

function pop(){
    if(show == 1){
        arrow.classList.add('btm-arrow-active');
        links.classList.add('btm-nav-active');
        arr.classList.add('arrow-active');
        return show = 0; 
    }
    else{
        arrow.classList.remove('btm-arrow-active');
        links.classList.remove('btm-nav-active');
        arr.classList.remove('arrow-active');
        return show = 1; 
    }
}

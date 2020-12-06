var show;
function show_hide() {
    if (show == 1) {
        document.getElementById("dflt").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("dflt").style.display = "block";
        return show = 1;

}
var show2;
function show_hide1(){
    if(show2 == 1){
        document.getElementById("ic").style.display="none";
        return show2 = 0;
    }
        else{
        document.getElementById("ic").style.display="block";
        return show2 = 1;

    }
}
var show3;
function show_hide2(){
    if(show3 == 1){
        document.getElementById("num").style.display="none";
        return show3 = 0;
    }
        else{
        document.getElementById("num").style.display="block";
        return show3 = 1;

    }
}
var show4;
function show_hide3(){
    if(show4 == 1){
        document.getElementById("col").style.display="none";
        return show4 = 0;
    }
        else{
        document.getElementById("col").style.display="block";
        return show4 = 1;

    }
}
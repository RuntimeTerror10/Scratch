var show;
function show_hide() {
    if (show == 1) {
        document.getElementById("align").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("align").style.display = "block";
        return show = 1;

}
var show1;
function show_hide1() {
    if (show1 == 1) {
        document.getElementById("deco").style.display = "none";
        return show1 = 0;
    }
    else
        document.getElementById("deco").style.display = "block";
        return show1 = 1;

}
var show2;
function show_hide2() {
    if (show2 == 1) {
        document.getElementById("weight").style.display = "none";
        return show2 = 0;
    }
    else
        document.getElementById("weight").style.display = "block";
        return show2 = 1;

}
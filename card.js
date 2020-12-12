var show;
function show_hide1() {
    if (show == 1) {
        document.getElementById("hov").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("hov").style.display = "block";
        return show = 1;

}
var show1;
function show_hide() {
    if (show1 == 1) {
        document.getElementById("stat").style.display = "none";
        return show1 = 0;
    }
    else
        document.getElementById("stat").style.display = "block";
        return show1 = 1;

}
var show2;
function show_hide2() {
    if (show2 == 1) {
        document.getElementById("flip-cd").style.display = "none";
        return show2 = 0;
    }
    else
        document.getElementById("flip-cd").style.display = "block";
        return show2 = 1;

}
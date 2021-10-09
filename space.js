var show;
function show_hide() {
    if (show == 1) {
        document.getElementById("ex1").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("ex1").style.display = "block";
        return show = 1;

}
var show1;
function show_hide1() {
    if (show1== 1) {
        document.getElementById("ex2").style.display = "none";
        return show1 = 0;
    }
    else
        document.getElementById("ex2").style.display = "block";
        return show1 = 1;

}
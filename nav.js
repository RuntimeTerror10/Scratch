var show;
function show_hide() {
    if (show == 1) {
        document.getElementById("nav").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("nav").style.display = "block";
        return show = 1;

}
var show1;
function show_hide1() {
    if (show1 == 1) {
        document.getElementById("inp").style.display = "none";
        return show1 = 0;
    }
    else
        document.getElementById("inp").style.display = "block";
        return show1 = 1;

}
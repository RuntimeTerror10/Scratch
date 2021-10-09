var show;
function show_hide() {
    if (show == 1) {
        document.getElementById("log").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("log").style.display = "block";
        return show = 1;

}
var show1;
function show_hide1() {
    if (show1== 1) {
        document.getElementById("cont").style.display = "none";
        return show1 = 0;
    }
    else
        document.getElementById("cont").style.display = "block";
        return show1 = 1;

}
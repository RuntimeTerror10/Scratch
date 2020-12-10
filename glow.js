var show;
function show_hide() {
    if (show == 1) {
        document.getElementById("glow1").style.display = "none";
        return show = 0;
    }
    else
        document.getElementById("glow1").style.display = "block";
        return show = 1;

}
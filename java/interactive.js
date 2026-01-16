let input = document.getElementById("opcity2");
function showMenu() {
    document.getElementById("menu").style.display = "inline-block";
}
input.addEventListener("input", opacity);
function opacity() {
    document.getElementById("backImg").style.backgroundColor = "rgb(0, 0 ,0," + input.value / 100 + ")";
    console.log(input.value);
}
function hideMenu() {
    document.getElementById("menu").style.display = "none";
}
let shkaf = document.getElementById("shid");
shkaf.addEventListener("mousemove", buttonAnimation);
function buttonAnimation(e) {
    let rect = shkaf.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let center = rect.width / 2;
    let d = (center - mouseX) / 5;

    if (mouseX > center) {
        console.log(d);

        shkaf.style.transform = "rotate(" + d + "deg)";
    } else {
        console.log(d);

        shkaf.style.transform = "rotate(" + d + "deg)";
    }
}
shkaf.addEventListener("mouseout", butstart);
function butstart() {
    shkaf.style.transform = "rotate(" + 0 + "deg)";


}

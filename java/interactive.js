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
    let center = rect.right / 2;
    let d = 0;
    if (mouseX > center) {
        console.log(">");
        d = mouseX / 10;
        shkaf.style.transform = "rotate(-" + d + "deg)";
    } else {
        d = mouseX / 10;

        shkaf.style.transform = "rotate(" + d + "deg)";
    }
}

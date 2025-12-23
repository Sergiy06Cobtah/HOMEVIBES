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

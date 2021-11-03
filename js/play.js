function start() {
    document.addEventListener("click", sendClick);
    function sendClick(event) {
        var x = event.clientX;
        var y = event.clientY;
        document.getElementById("test").innerHTML = x+","+y;
      }
}
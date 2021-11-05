function recClicks() {
    document.getElementById("game").addEventListener("click", (event) => {
        let rect = event.target.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        document.getElementById("testclick").innerHTML = x+", "+y;
    }, false);
}
function recPresses() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        document.getElementById("testpressdown").innerHTML =`Key pressed ${name} Key code value: ${code}`;
    }, false);

    document.addEventListener('keyup', (event) => {
        var name = event.key;
        var code = event.code;
        document.getElementById("testpressup").innerHTML =`Key lifted ${name} Key code value: ${code}`;
    }, false);

    recClicks();
}
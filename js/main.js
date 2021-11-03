function genCode() {
    var randNum = Math.round(Math.random()*90001+10000);
    document.getElementById("code").innerHTML = randNum;
    document.getElementById("code").classList.add("visible");
}
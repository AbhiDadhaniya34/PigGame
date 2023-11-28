var x = 0;
var y = 0;

function abhi() {
    var a = Math.trunc(Math.random() * 6) + 1;

    var b = "dice-" + a + ".png";
    document.getElementById("ad").setAttribute('src', b);
    x = a + x;
    document.getElementById("score--0").textContent = x;
    if(x >=100){
        document.getElementById("h1").textContent ="Player 1 Is Winner";
    }
}

function abhi1() {
    var a = Math.trunc(Math.random() * 6) + 1;
    var b = "dice-" + a + ".png";
    document.getElementById("ad").setAttribute('src', b);
    console.log(b);
    y = a + y;
    document.getElementById("ad1").textContent = y;
    if(y >=100){
        document.getElementById("h2").textContent ="Player 2 Is Winner";
    }
}

function abhi3(){
    x = 0;
    y = 0;
    document.getElementById("score--0").textContent = x;
    document.getElementById("ad1").textContent = y;
}
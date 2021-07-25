for (var i = 0; i < 26; i++) {
    var myVar = document.querySelectorAll(".myButton")[i];
    myVar.addEventListener("click", function () {
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
    });
}

document.addEventListener("keypress",function(even){
    var text = even.key;
    audioPlay(text);
    playAnimation(text);
});
function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio("sound/a.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sound/b.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("sound/c.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sound/d.mp3");
            audio.play();
            break;

        case "e":
            var audio = new Audio("sound/e.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("sound/f.mp3");
            audio.play();
            break;

        case "g":
            var audio = new Audio("sound/g.mp3");
            audio.play();
            break;

        case "h":
            var audio = new Audio("sound/h.mp3");
            audio.play();
            break;

        case "i":
            var audio = new Audio("sound/i.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sound/j.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sound/k.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sound/l.mp3");
            audio.play();
            break;

        case "m":
            var audio = new Audio("sound/m.mp3");
            audio.play();
            break;

        case "n":
            var audio = new Audio("sound/n.mp3");
            audio.play();
            break;

        case "o":
            var audio = new Audio("sound/o.mp3");
            audio.play();
            break;

        case "p":
            var audio = new Audio("sound/p.mp3");
            audio.play();
            break;

        case "q":
            var audio = new Audio("sound/q.mp3");
            audio.play();
            break;

        case "r":
            var audio = new Audio("sound/r.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sound/s.mp3");
            audio.play();
            break;

        case "t":
            var audio = new Audio("sound/t.mp3");
            audio.play();
            break;

        case "u":
            var audio = new Audio("sound/u.mp3");
            audio.play();
            break;

        case "v":
            var audio = new Audio("sound/v.mp3");
            audio.play();
            break;

        case "w":
            var audio = new Audio("sound/w.mp3");
            audio.play();
            break;

        case "x":
            var audio = new Audio("sound/x.mp3");
            audio.play();
            break;

        case "y":
            var audio = new Audio("sound/y.mp3");
            audio.play();
            break;

        case "z":
            var audio = new Audio("sound/z.mp3");
            audio.play();
            break;
    }
}

function playAnimation(text) {
    var selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");

    setTimeout(function () {
        selectedButton.classList.remove("anim");
    }, 1000);
}
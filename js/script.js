var player = document.getElementById("player")
var zombie = document.getElementById("zombie")

function jump() {
    if(player.classList != "animate") {
        player.classList.add("animate");
    }

    setTimeout(function() {
    player.classList.remove("animate");
    }, 500);
}

$(document).keydown(function(salto){
    if(salto.which == 32) {
       jump();
    }
});

var score = 0;
    var scored = setInterval(function() {
        score += 1;
    }, 10);

var gameOver = setInterval(function() {
    $("#score").html(score);
    var playerJump = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var zombieRun = parseInt(window.getComputedStyle(zombie).getPropertyValue("left"));

    if(zombieRun < 100 && zombieRun > 0 && playerJump >= 305) {
        zombie.style.animation = "none";
        zombie.style.display = "none";
        player.style.display = "none";
         $(".gameOver").fadeIn(2000); 
         $("#dead").fadeIn(); 
         clearInterval(scored);
    }
}, 10);


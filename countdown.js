function startCountDown(){
  var timeLeft =3;
  var elem = document.getElementById('countdown_div');
  
  var timerId = setInterval(countdown, 1000);
  function doSomething(){
  console.log("CountDown Complete");
  document.getElementById('gamemusic').play();
  start();
  document.getElementById('cntd').style.display = "none";
  window.navigator.vibrate(600);
  }
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      doSomething();
      var gameStatus = 0; 
    window.addEventListener('deviceorientation', function(event) {
     
      if (event.gamma < 20  && event.gamma > -20){
        gameStatus = gameStatus + 1;
       
      }

      if (gameStatus > 20){
        plusSlides(1, 0);window.navigator.vibrate(75);status();
     
      }
     
      function status(){
        gameStatus += 1
        console.log("Game Status:" + gameStatus);
        gameStatus = 0;
      }

      document.getElementById("gyro").innerHTML = event.gamma;

    //  if (event.beta < -50){
       
  //      plusSlides(1, 0);window.navigator.vibrate(50);down();document.getElementById//('I1').style.color = 'red';
     // }
      
      });
    } else {
      elem.innerHTML = timeLeft;
      timeLeft--;
    }
  }
}


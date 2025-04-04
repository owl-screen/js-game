
score = 0;
crossed = 

audio = new Audio('bg.mp3');
audiodd = new Audio('dead.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is:" , e .keyCode);
    if(e.keyCode == 38 || e.keyCode == 32){
      ghost =   document.querySelector('.ghost')
ghost.classList.add('animateghost');
setTimeout(() => {
    ghost.classList.remove('animateghost')
}, 700);
}
  if(e.keyCode == 39){
      ghost =   document.querySelector('.ghost')
     ghostx = parseInt(window.getComputedStyle(ghost , null).getPropertyValue('left'))
     ghost.style.left = ghostx + 112 +"px"
  
    }
 if(e.keyCode == 37){
      ghost =   document.querySelector('.ghost')
     ghostx = parseInt(window.getComputedStyle(ghost , null).getPropertyValue('left'))
     ghost.style.left = (ghostx - 112) +"px"
  
    }
    if(e.keyCode == 38 || e.keyCode == 32){
      ghost =   document.querySelector('.ghost')
ghost.classList.add('animateghost');
setTimeout(() => {
    ghost.classList.remove('animateghost')
}, 700);
}


}


setInterval(() => {
    ghost = document.querySelector('.ghost')
   over = document.querySelector('.over')
   pillar = document.querySelector('.pillar')

  gx = parseInt(window.getComputedStyle(ghost , null).getPropertyValue('left'))
  gy = parseInt(window.getComputedStyle(ghost , null).getPropertyValue('top'))
  
  px = parseInt(window.getComputedStyle(pillar , null).getPropertyValue('left'))
  py = parseInt(window.getComputedStyle(pillar , null).getPropertyValue('top'))

offsetX = Math.abs(gx - px)
offsetY = Math.abs(gy - py)

if (offsetX < 75 && offsetY < 52) {
   over.style.visibility = 'visible'
   pillar.classList.remove('obstacle')
   ghost.classList.add('fall'); // 👈 this makes it fall
//    ghost.classList.remove('animateghost')
audiodd.play();
setTimeout(() => {
    audio.pause();
    audiodd.pause();
    console.log('yyyy');
    
}, 1000);
}
else if( offsetX < 70 && crossed) {
    score++;
    newScore(score);
    crossed = false;
    setTimeout(() => {
        crossed = true;
    }, 1000);
   setTimeout(() => {
    aniDur = parseFloat(window.getComputedStyle(pillar , null).getPropertyValue('animation-duration'))  
newDur = aniDur -0.05;
pillar.style.animationDuration = newDur + 's'
 }, 500);
}

}, 100);


function newScore(score) {
    scorecount.innerHTML = "your score is " + score ;
}
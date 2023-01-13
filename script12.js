let countOver = 0;
let countOut = 0;

document.querySelector(".div").addEventListener("mouseover", function () {
  if (countOver == 0) {
    event.target.style.backgroundColor = "red";
    countOver++;
    console.log("countOver", countOver);
  } else if (countOver == 1) {
    event.target.style.backgroundColor = "yellow";
    countOver++;
    console.log("countOver", countOver);
  } else if (countOver == 2) {
    event.target.style.backgroundColor = "green";
    countOver++;
    console.log("countOver", countOver);
    countOver *= 0;
  }
});
document.querySelector(".div").addEventListener("mouseout", function () {
  event.target.style.backgroundColor = "darkviolet";
  countOut++;
  console.log("countOut", countOut);
});


document.querySelector('.block2').addEventListener('mouseover',function(){
    event.target.style.backgroundColor='yellow';
    event.target.style.color='violet';
    event.target.style.borderColor='black';
    event.target.textContent='Хочеш знайти який?';
})
document.querySelector('.block2').addEventListener('mousedown',function(){
    event.target.style.backgroundColor='black';
    event.target.style.color='white';
    event.target.style.borderColor='yellow';
    event.target.textContent='А я тобі не скажу!';
})
document.querySelector('.block2').addEventListener('mouseup',function(){
    event.target.style.backgroundColor='yellow';
    event.target.style.color='violet';
    event.target.style.borderColor='black';
    event.target.textContent='Хочеш знайти який?';
})

document.querySelector('.block2').addEventListener('mouseout',function(){
    event.target.style.backgroundColor='darkviolet';
    event.target.style.color='black';
    event.target.style.borderColor='yellow';
    event.target.textContent='У мене є секрет!';
})




document.getElementById('b1').addEventListener('click',function(){
    let pr=prompt('write url')
event.target.style.backgroundImage=`url(${pr})`;
})
document.getElementById('b2').addEventListener('click',function(){
    let pr=prompt('write url')
event.target.style.backgroundImage=`url(${pr})`;
})
document.getElementById('b3').addEventListener('click',function(){
    let pr=prompt('write url')
event.target.style.backgroundImage=`url(${pr})`;
})

   
function addColor() {
    if (event.target.className=='color'){
        event.target.style.color='red';
    }
    else if (event.target.className=='color1'){
        event.target.style.color='yellow';
    }
    else if (event.target.className=='color2'){
        event.target.style.color='green';
    }
    else if (event.target.className=='color3'){
        event.target.style.color='blue';
    }
    else if (event.target.className=='color4'){
        event.target.style.color='orange';
    }
    else if (event.target.className=='color5'){
        event.target.style.color='gray';
    }
}



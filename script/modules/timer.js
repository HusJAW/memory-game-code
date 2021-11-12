

export function countUpTimer(timeInterval){

const minutesDom = document.querySelector('.timer-container p:nth-of-type(2) span:nth-of-type(1)')
const secDom = document.querySelector('.timer-container p:nth-of-type(2) span:nth-of-type(2)')
const singlePlayerInfo = document.querySelector('.info-container-single-player')


singlePlayerInfo.classList.remove('hide')
let  minCounter = 0
let secCounter = 0 


function timer(){

    secCounter++

    if(secCounter < 60){
    secDom.innerText = secCounter < 10 ? `0${secCounter}` : secCounter
    }

   if(secCounter === 60){

    minCounter++
    minutesDom.innerText = minCounter < 10 ? `0${minCounter}` : minCounter;
    secCounter = 0 
   }
}

timeInterval = setInterval(timer, 1000)

}
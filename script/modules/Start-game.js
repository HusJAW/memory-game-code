



function creatGameGrid(){
const  onePlayerGridContainer = document.querySelector('.game-grid-one-player')

    


for (let i = 0; i< numArr4x4.length; i++){
    let randomId = Math.floor(Math.random() * 100);

    let playBox = document.createElement('div')
    playBox.id = `card-${randomId}`
    playBox.classList.add('four-by-four-button')
    
    onePlayerGridContainer.appendChild(playBox)
    
    let valueContent = document.createElement('p')
    valueContent.id = randomId
    playBox.appendChild(valueContent)
}

}


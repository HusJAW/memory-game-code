


export function removeChildren(div){
    while (div.firstChild){
        div.removeChild(div.firstChild)
    }
}


export function shuffleArray(array){
    let arrayLength = array.length;
    let randomIndex, lastNum

    while(arrayLength){
        randomIndex = Math.floor(Math.random()* arrayLength--)
        lastNum = array[arrayLength];
        array[arrayLength] = array[randomIndex]
        array[randomIndex] = lastNum
    }
    return array;
}


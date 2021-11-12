
export function menuButton(){
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('nav')
    const overlay = document.querySelector('.overlay')
    const resumGame = document.querySelector('nav button:nth-of-type(3)')
    
    
    
    menu.addEventListener('click', (e) => {
        nav.classList.toggle('hide')
        overlay.classList.toggle('hide')
    
    
    
    });
    
    overlay.addEventListener('click', (e) => {
        nav.classList.toggle('hide')
        overlay.classList.toggle('hide')
    });
    
    resumGame.addEventListener('click', (e) => {
        nav.classList.toggle('hide')
        overlay.classList.toggle('hide')
    });

    }

    
    export function windowSize(){
        const breakpointTablet = window.matchMedia("(min-width: 768px)")
        const breakpointMobile = window.matchMedia("(max-width: 768px)")
        const nav = document.querySelector('nav')

        if (breakpointTablet.matches){
        nav.classList.remove('hide')
        } else if(breakpointMobile.matches){
        nav.classList.add('hide')

        }



    }






    function newGameButton(){
        const newGameBtn = document.querySelector('nav button:nth-of-type(2)')

    }



   export function customButtonMediaQuery(){
        const breakpointTablet = window.matchMedia("(min-width: 768px)")
        const breakpointMobile = window.matchMedia("(max-width: 768px)")
        const customButtonInnerText = document.querySelectorAll('.custom-button p:nth-of-type(1)')



        if (breakpointTablet.matches){
            for (let i=0; i< customButtonInnerText.length; i++){
                
                customButtonInnerText[i].textContent = `Player ${1+i}`
            }
            



            } else if(breakpointMobile.matches){
                for (let i =0; i< customButtonInnerText.length; i++){
                
                    customButtonInnerText[i].innerText = `P${1+ i}`
                }
    
            }



    }
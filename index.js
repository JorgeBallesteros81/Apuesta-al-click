generateRandomNumber = () => Math.floor(Math.random()*11)

const clicksRedButton = document.getElementById("red-button")

const clicksCounter = document.getElementById("counter")

const clicksGreeButton = document.getElementById("bet-button")

let clicks = 0


clicksRedButton.addEventListener("click", () => {
        clicks++
        clicksCounter.innerHTML = clicks})
    

clicksGreeButton.addEventListener("click", () => {
        let luckyNumber = generateRandomNumber()
        let counter =  Number(clicksCounter.innerHTML)
      
       if( counter === luckyNumber){
        return setTimeout(() => {window.location.href = "premio.html"}, 1000) 
       }
       else {
        confirm("Esta vez no hubo suerte, quieres intentar de nuevo?")
         return  location. reload()
       } })
      









   




    









//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFetch)
let num = 0
function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
        //let num = Math.floor(Math.random() * data.drinks.length)  //pick random number in array
        if (data.drinks[num] === undefined) {
            num = 0
        }
        let drink = data.drinks[num]   //picks random drink in array based on num
        if (num < data.drinks.length - 1) {
            num++
        }
        else {
            num = 0
        }
        document.querySelector('h2').innerText = drink.strDrink
        document.querySelector('img').src = drink.strDrinkThumb
        document.querySelector('h3').innerText = drink.strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(numberOfNights){

    const constPerNight = 140
    const totalPrice = Number (numberOfNights) * constPerNight
    return totalPrice
}



function isOnlyNumbers(str) {
    const regex = new RegExp(/^[0-9]*/)
    return regex.test(str)
}

function includesNumbers(str){
    const regex = new RegExp(/\d/)
    return regex.test(str)
}



// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

    function planeRideCost(destination){
     if (destination === "London")return 183
     if (destination === "Paris")return 220
      return 300
    }   

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

    function rentalCarCost(carAnswer){
const dailyPrice = 40
const numberOfDays = Number(carAnswer)

let discount = 0
if ( numberOfDays >= 10)discount = 0.05

const totalPric = dailyPrice * numberOfDays * (1 - discount)
return totalPric
}



// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car crost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the 

function totalVacationCost(){
    let hotelAnswer 
    let carAnswer 
    let destination = ""

    while (! isOnlyNumbers(hotelAnswer)){
        hotelAnswer = prompt("How many nights would you like to stay ")
    }

    while (!isOnlyNumbers(carAnswer)){
        carAnswer = prompt ("How many days would you like to rent the car ")
    }

    while(destination == ""|| includesNumbers(destination)){
    destination = prompt("where are you going ?")
}

    const carPrice = rentalCarCost(carAnswer)
    const hotelPrice = hotelCost(hotelAnswer)
    const planePrice = planeRideCost(destination)

     console.log('hotelPrice:', hotelPrice)
     console.log('carPrice:', carPrice)
     console.log('planPrice:', planePrice)

     const totalPric = carPrice + hotelPrice + planePrice
     console.log("total Price ", totalPric)
}
totalVacationCost()
//confirm (T / F) 
// promtp returns a string

// let hasDiscount = confirm('Do you want to enter in a code?') 

// if (hasDiscount) {
//     console.log('User wants to enter in a code')
// } else {
//     console.log('They do not have a code')
// }


    // DECLAR VARIABLES (LET AND CONST)
    // IF, ELSE IF, ELSE (CONTROL FLOW)
    // LOOP STRUCTURE (HAVE THE COMPUTER DO SOMETHING SEVERAL TIMES FOR )
    // GRAB USER INPUT (CONFIRM AND PROMPT)



    // set item prices for 3 items (flights, nights in hotel, days travelling)

    //prices


function goShopping() {
    const flight = 100;
    const hotelNight = 100;
    const dayTrip = 100;

    //prompt the user for each item, asking how many of each they want
    // ask the user how many of each item they want to buy

    // const flightQty = prompt('How many flights do you want to buy?')
    // const hotelNightQty = prompt('How many hotel nights do you want to buy?')
    // const dayTripQty = prompt('How many day trips do you want to buy?')

    const flightQty = 1;
    const hotelNightQty = 1;
    const dayTripQty = 1;

    let total = (flight * flightQty) + (dayTrip * dayTripQty) + (hotelNight * hotelNightQty);

    
    // // there should be 2 different valid codes - each has it's own discount
    const discount1 = "DISCOUNT10"; //that is 10 % discount
    const discount2 = "nickelAndDime" //15 % off
    
    
    // let the user put in a discount code
    const input = prompt('Enter discount code:')
    
    if (input === discount1 || input === discount2) {
        // if that code doesn't match, they get no discount, give them their total
        

        // TOTAL 300
        
        //Discount 30

        let discountedAmount;


        if (input === discount1) {
            discountedAmount = total * .10;
        } else {
            discountedAmount = total * .15;
        }

        
        // switch(input) {
        //     case discount1:
        //         discountedAmount = total * .10;
        //         break;

        //     case discount2:
        //         discountedAmount = total * .15;
        //         break;
        // }

        total -= discountedAmount;       

    } else {
        // if they DO match, apply a discount, and give them their discounted total;
        console.log(`You DID NOT match a discount, but your total is ${total} `)
    }
}


for (let x = 0; x < 2; x++) {
    goShopping();
}
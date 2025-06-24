
 
function calculateChaiIngredients(numberOfCups){
   const water=numberOfCups*200;
   const milk =numberOfCups*50;
   const teaLeaves=numberOfCups*1;
   const sugar =numberOfCups*2;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
}
const cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = parseInt(cupsInput);
if (!isNaN(cups)) {
  calculateChaiIngredients(cups);
} else {
  console.log("Please enter a valid number.");
}

function calculateBodaFare(distanceInKm){
const baseFare= 50;
const chargePerKm=15;

const totalFare = baseFare + (distanceInKm * chargePerKm);

console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

const distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = parseFloat(distanceInput);
if (!isNaN(distance)) {
  calculateBodaFare(distance);
} else {
  console.log("Please enter a valid distance.");
}
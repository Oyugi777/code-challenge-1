
function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  let fee = amountToSend * feePercentage;

  if (fee < 10) fee = 10;
  else if (fee > 70) fee = 70;

  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}`);
  console.log("\nSend Money Securely!");
}

const amountInput = prompt("Unatuma Ngapi? (KES):");
const amount = parseFloat(amountInput);
if (!isNaN(amount)) {
  estimateTransactionFee(amount);
} else {
  console.log("Please enter a valid amount.");
}
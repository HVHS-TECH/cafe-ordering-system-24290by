let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {
  let customerName = document.getElementById("customerName").value.trim();
  let order = document.getElementById("nameField").value.trim().toLowerCase();
  let money = Number(document.getElementById("pocketmoneyField").value);

  if (!customerName || !order || isNaN(money)) {
    OUTPUT.innerHTML = `
      <h2>Receipt</h2>
      <p><b>Error:</b> Please enter your name, a valid order number, and a valid amount of money.</p>
    `;
    return;
  }

  OUTPUT.innerHTML = `
    <h2>Receipt</h2>
    <p><b>Name:</b> ${customerName}</p>
    <p><b>Order:</b> ${order}</p>
    <p><b>Money:</b> $${money}</p>
  `;

  if (order === "2p") {
    if (money >= 25) {
      let change = money - 25;
      OUTPUT.innerHTML += `
        <p>Successfully purchased burger!</p>
        <p><b>Change:</b> $${change}</p>
      `;
    } else {
      let needed = 25 - money;
      OUTPUT.innerHTML += `
        <p>Insufficient funds.</p>
        <p>You need $${needed} more to buy the burger.</p>
      `;
    }
  } else if (order === "4p") {
    if (money >= 10) {
      let change = money - 10;
      OUTPUT.innerHTML += `
        <p>Successfully purchased drink!</p>
        <p><b>Change:</b> $${change}</p>
      `;
    } else {
      let needed = 10 - money;
      OUTPUT.innerHTML += `
        <p>Insufficient funds.</p>
        <p>You need $${needed} more to buy the drink.</p>
      `;
    }
  } else if (order === "6p") {
    if (money >= 15) {
      let change = money - 15;
      OUTPUT.innerHTML += `
        <p>Successfully purchased fries!</p>
        <p><b>Change:</b> $${change}</p>
      `;
    } else {
      let needed = 15 - money;
      OUTPUT.innerHTML += `
        <p>Insufficient funds.</p>
        <p>You need $${needed} more to buy the fries.</p>
      `;
    }
  } else {
    OUTPUT.innerHTML += `
      <p><b>Invalid item.</b></p>
      <p>Order not created.</p>
    `;
  }
}

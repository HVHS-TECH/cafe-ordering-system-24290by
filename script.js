let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {

let customerName = document.getElementById("customerName").value;
let order = document.getElementById("nameField").value.trim().toLowerCase();
let money = Number(document.getElementById("pocketmoneyField").value);

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
}


else if (order === "4p") {
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
}


else {
OUTPUT.innerHTML += `
<p><b>Invalid item.</b></p>
<p>Order not created.</p>
        `;
    }
}

else if (order === "6p") {
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
}
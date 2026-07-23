let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {   

    let customerName = document.getElementById("customerName").value;
    let order = document.getElementById("nameField").value.trim().toLowerCase();
    let money = Number(document.getElementById("pocketmoneyField").value);

    // Check if the order is valid first
    if (order !== "2p") {
        OUTPUT.innerHTML = "<h2>Order not created.</h2>";
        return;
    }

    OUTPUT.innerHTML = `
        <h2>Receipt</h2>
        <p><b>Name:</b> ${customerName}</p>
        <p><b>Order:</b> ${order}</p>
        <p><b>Money:</b> $${money}</p>
    `;

    // Check if the customer has enough money
    if (money >= 25) {
        let change = money - 25;

        OUTPUT.innerHTML += `
            <p>Successfully purchased burger.</p>
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
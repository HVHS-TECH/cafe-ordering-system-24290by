let OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput() {   

    let customerName = document.getElementById("customerName").value;
    let order = document.getElementById("nameField").value;
    let money = Number(document.getElementById("pocketmoneyField").value);

    OUTPUT.innerHTML = `
        <h2>Reciept</h2>
        <p><b>Name:</b> ${customerName}</p>
        <p><b>Order:</b> ${order}</p>
        <p><b>Money:</b> ${money}</p>
    `;

    if (money >= 25) {
        OUTPUT.innerHTML += "<p>Successfuly purchased burger</p>";
    } else {
        OUTPUT.innerHTML += "<p>Insufficent funds.</p>";
    }
}  
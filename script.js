document.getElementById("calculate").addEventListener("click", function(event) {
    // Get the input values
    var entryPrice = document.getElementById("entryPrice").value;
    var stopLoss = document.getElementById("stopLoss").value;
    var accountBalance = document.getElementById("accountBalance").value;
    var percentageRisk = document.getElementById("percentageRisk").value;
    var pair = document.getElementById("pair").value;

    // Check if the inputs are empty or contain invalid characters
    if (entryPrice == "" || isNaN(entryPrice) || stopLoss == "" || isNaN(stopLoss) || accountBalance == "" || isNaN(accountBalance) || percentageRisk == "" || isNaN(percentageRisk)) {
        alert("Please enter valid numbers for Entry Price, Stop Loss, Account Balance and Percentage Risk.");
        return;
    }

    if (!accountBalance || !percentageRisk) {
        document.getElementById("lotSize").innerHTML = "Please enter Account Balance and Risk Percentage";
        return;
    }

    // Perform the calculation
    var lotSize = Math.abs((accountBalance * (percentageRisk / 100)) / (stopLoss - entryPrice));

    if (pair === "Step Index") {
        lotSize = lotSize / 10;
    }
    var risk = (accountBalance * (percentageRisk / 100));
    document.getElementById("lotSize").innerHTML = "LotSize: " + lotSize.toFixed(4);
    document.getElementById("risk").innerHTML = "Risk: $" + risk.toFixed(2);
    event.preventDefault();
});

    document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("entryPrice").value = "";
    document.getElementById("stopLoss").value = "";
    document.getElementById("accountBalance").value = "";
    document.getElementById("percentageRisk").value = "";
    document.getElementById("lotSize").innerHTML = "";
    document.getElementById("risk").innerHTML = "";
});
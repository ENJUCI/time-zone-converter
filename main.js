function convertTime() {
    const inputTime = document.getElementById("userTime").value;
    const fromZone = document.getElementById("fromZone").value;
    const toZone = document.getElementById("toZone").value;
    const resultDiv = document.getElementById("result");

    if (!inputTime) {
        resultDiv.innerHTML = "Please pick a date and time.";
        return;
    }


    const date = new Date(inputTime);


    const converted = date.toLocaleString("en-US", {
        timeZone: toZone,
        hour12: false
    });

    resultDiv.innerHTML = `Converted Time: <br><strong>${converted}</strong>`;
}

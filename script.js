document.getElementById('reportForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const district = document.getElementById('district').value;
    const area = document.getElementById('area').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const wallet = document.getElementById('wallet').value;

    // Here you can add your form submission logic, e.g., sending data to a server
    console.log({
        district,
        area,
        title,
        description,
        wallet,
    });

    // Example Stellar wallet logic
    if (StellarSdk.StrKey.isValidEd25519PublicKey(wallet)) {
        alert('Report submitted successfully with valid Stellar wallet address!');
    } else {
        alert('Invalid Stellar wallet address.');
    }
});

document.getElementById('recipientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const orgName = document.getElementById('orgName').value;
    const foodNeed = document.getElementById('foodNeed').value;
    const quantity = document.getElementById('quantity').value;
    const people = document.getElementById('people').value;

    const summary = `
      <h3>Request Summary:</h3>
      <p><strong>Organization:</strong> ${orgName}</p>
      <p><strong>Food Needed:</strong> ${foodNeed}</p>
      <p><strong>Quantity:</strong> ${quantity} kg</p>
      <p><strong>To Serve:</strong> ${people} people</p>
    `;

    document.getElementById('requestSummary').innerHTML = summary;
    document.getElementById('recipientForm').reset();
});

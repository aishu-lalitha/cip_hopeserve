document.getElementById('donationForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const foodName = document.getElementById('food-name').value;
  const quantity = document.getElementById('quantity').value;
  const expiry = document.getElementById('expiry').value;
  const address = document.getElementById('address').value;

  try {
    const response = await fetch('/submit_donation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ foodName, quantity, expiry, address })
    });

    const result = await response.json();
    console.log(result);

    if (result.success && Notification.permission === 'granted') {
      const registration = await navigator.serviceWorker.ready;

      if (registration.active) {
        registration.active.postMessage({
          title: 'Donation Alert',
          body: `Thank you for donating ${foodName}`
        });
      }

      // Delay redirection to allow notification to show
      setTimeout(() => {
        window.location.href = '/recipient.html';
      }, 1000);
    } else if (!result.success) {
      alert('Donation submission failed');
    }
  } catch (error) {
    console.error('Error submitting donation:', error);
  }
});

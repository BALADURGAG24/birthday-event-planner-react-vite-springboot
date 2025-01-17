import { useEffect, useState } from "react";

const RazorpayComponent = () => {
  const [rzp, setRzp] = useState(null);

  useEffect(() => {
    if (window.Razorpay) {
      const options = {
        key: "rzp_test_9u3kMcqchK88zT",
        amount: 10000, // Amount in paise (100 paise = 1 Rupee)
        currency: "INR",
        name: "My Dummy Store",
        description: "Test Transaction",
        handler: function (response) {
alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Dummy Store Address",
        },
      };
      const rzpInstance = new window.Razorpay(options);
      setRzp(rzpInstance);
    } else {
      console.error("Razorpay script not loaded.");
    }
  }, []);
const handleClick = () => {
    rzp.open();
  };

  return (
    <div>
      <h2>Test Product</h2>
      <p>Price: $100</p>
      <button onClick={handleClick}>Pay Now</button>
    </div>
  );
};

export default RazorpayComponent;
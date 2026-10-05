import React, { useEffect, useState } from "react";
import "./DonateModal.css";

const DonateModal = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (open) {
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="donate-modal" role="dialog" aria-modal="true" aria-labelledby="donate-title">
      <button className="donate-backdrop" onClick={onClose} aria-label="Close donation form"></button>

      <div className="donate-dialog">
        <button className="donate-close" onClick={onClose} aria-label="Close donation form">
          ×
        </button>

        <div className="donate-dialog-heading">
          <span>SUPPORT HRSA</span>
          <h2 id="donate-title">Make a Difference.</h2>
          <p>
            Your support can help HRSA continue meaningful humanitarian and community initiatives.
          </p>
        </div>

        {submitted ? (
          <div className="donate-success">
            <div className="donate-success-icon">✓</div>
            <h3>Thank You for Your Support</h3>
            <p>
              Your donation request has been received. Payment processing can be connected in the next backend phase.
            </p>
            <button type="button" className="donate-primary-button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="donate-form" onSubmit={handleSubmit}>
            <div className="donation-amounts" aria-label="Donation amount">
              <label className="amount-option">
                <input type="radio" name="amount" value="25" defaultChecked />
                <span>$25</span>
              </label>
              <label className="amount-option">
                <input type="radio" name="amount" value="50" />
                <span>$50</span>
              </label>
              <label className="amount-option">
                <input type="radio" name="amount" value="100" />
                <span>$100</span>
              </label>
              <label className="amount-option">
                <input type="radio" name="amount" value="250" />
                <span>$250</span>
              </label>
            </div>

            <div className="donate-form-grid">
              <div className="donate-field">
                <label htmlFor="donor-name">Full Name</label>
                <input id="donor-name" name="name" type="text" placeholder="Your full name" required />
              </div>
              <div className="donate-field">
                <label htmlFor="donor-email">Email Address</label>
                <input id="donor-email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="donate-field">
              <label htmlFor="donation-purpose">Donation Purpose</label>
              <select id="donation-purpose" name="purpose" defaultValue="Humanitarian Support">
                <option>Humanitarian Support</option>
                <option>Religious Support</option>
                <option>Community Development</option>
                <option>General Support</option>
              </select>
            </div>

            <div className="donate-field">
              <label htmlFor="payment-method">Preferred Payment Method</label>
              <select id="payment-method" name="paymentMethod" defaultValue="Bank Transfer">
                <option>Bank Transfer</option>
                <option>Mobile Payment</option>
                <option>Other</option>
              </select>
            </div>

            <p className="donate-note">
              This form is currently a donation request interface. Secure payment processing will be connected during the backend phase.
            </p>

            <button type="submit" className="donate-primary-button">
              Continue Donation <span>→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DonateModal;

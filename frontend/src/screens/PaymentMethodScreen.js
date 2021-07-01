import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentMethodScreen(props) {
  return (
    <div>
      <form className="form" >
        <div>
          <h1>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <Link to="/">
          <button className="primary" type="submit">
            Continue
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
import { useState } from 'react';

function Login() {
    return (
        <div className="login-container">
            <h2>Login to UTheta</h2>

        <form className="login-form">
        {/* Row 1: Email Input */}
        <div className="input-group">
          <input type="email" placeholder="Email Address" required />
            </div>

        {/* Row 2: Password Input */}
        <div className="input-group">
          <input type="password" placeholder="password" required />
        </div>

        {/* Row 3: Main Action Buttons (Side-by-Side) */}
        <div className="button-row">
          <button type="submit" className="btn primary-btn">Sign In</button>
          <button type="button" className="btn secondary-btn">I am New</button>
        </div>

        {/* Row 4: Secondary Action Buttons (Stacked Below) */}
        <div className="secondary-actions">
          <button type="button" className="btn text-btn">Forgot Password</button>
          <button type="button" className="btn text-btn">What is UTheta?</button>
        </div>
        </form>
        </div>
    );
}

export default Login;
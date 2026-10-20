import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    //Creating state variables to hold inputs
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
      e.preventDefault();
      console.log("Validating signup:", {username, email, password });
       //NETWORK FETCH LOGIC TO BACKEND HERE

       //
    };

return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
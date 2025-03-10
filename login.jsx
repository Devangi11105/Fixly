import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"

function Login() {
    const[email, setEmail] = useState("");
    const[passward, setPassward] = useState("");
    const[error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        setError("");

        try{
            const response = await axios.post("", {email, passward });

            if(response.data.success){
                navigate("/Home");
            }else{
                setError("Invalid email or passward");
            }
        }catch(error){
            setError("Error connecting to server");
        }
    };

    return (
        <div className="login-container">
          <h2>Already have account ?</h2>
          {error ? <p className="error">{error}</p> : null}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
            <input
              type="password"
              placeholder="Password"
              value={passward}
              onChange={(e) => setPassward(e.target.value)}
              required />
            <button
              type="submit">
              Login
            </button>
          </form>
        </div>
      );
}

export default Login;

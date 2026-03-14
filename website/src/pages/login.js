import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {

const navigate = useNavigate();
const location = useLocation();   // ✅ यह missing था

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {

e.preventDefault();

try {

const res = await axios.post(
"http://localhost:5000/login",
{
email,
password
}
);

if(res.data.message === "Login successful"){

alert("Login successful");

sessionStorage.setItem("token","user_logged");

// redirect to page user clicked
const redirectTo = location.state?.from || "/";
navigate(redirectTo);

}else{

alert(res.data.message);

}

}
catch(err){

console.log(err);
alert("Login failed");

}

};

return(

<div className="login-container">

<div className="login-card">

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>

</form>

<p>
New User? <Link to="/register">Register here</Link>
</p>

</div>

</div>

)

}

export default Login;
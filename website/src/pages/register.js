import axios from "axios";
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import "./Register.css";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const registerUser = async (e) => {

e.preventDefault();

try{

await axios.post(
"https://amit-swebsite.onrender.com/register",
{name,email,password}
);

alert("Registration successful");

navigate("/login");

}
catch(err){
console.log(err);
alert("Registration failed");
}

};

return(

<div className="register-container">

<div className="register-card">

<h2>Create Account</h2>

<form onSubmit={registerUser}>

<input
placeholder="Enter Name"
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="tel"
placeholder="Enter Mobile Number"
required
/>

<input
type="email"
placeholder="Enter Email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Enter Password"
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Register
</button>

</form>

<p>
Already have an account? <Link to="/login">Login</Link>
</p>

</div>

</div>

)

}

export default Register;
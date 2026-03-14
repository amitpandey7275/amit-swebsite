import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaPhone,
FaYoutube,
FaInstagram,
FaWhatsapp,
FaFacebook,
FaSnapchat
} from "react-icons/fa";

import "./Home.css";

function Home() {

const navigate = useNavigate();

const checkLogin = (e) => {

const token = sessionStorage.getItem("token");

if(!token){
e.preventDefault();
alert("Please login first");
navigate("/login");
}

};

return (

<div>

{/* Navbar */}

<nav className="navbar">

<ul>

<li><a href="#home">Home</a></li>

<li><a href="#about">About</a></li>

<li>
<Link to="/login" state={{from:"/gallery"}}>Gallery</Link>
</li>

<li>
<Link to="/login" state={{from:"/journey"}}>Life Journey</Link>
</li>

</ul>

</nav>


{/* Home */}

<section id="home" className="home">

<h1>Namaste 🙏</h1>

<h2>Welcome to my website</h2>

</section>


{/* About */}

<section id="about" className="section">

<h2>About Me</h2>

<p>

My name is <b>Amit Pandey</b>. I am passionate about programming,
web development, and building real-world technology projects.

I enjoy working with React, Node.js, IoT, and AI-based systems.
I continuously learn new technologies and create innovative projects.

</p>

</section>


{/* Projects */}

<section id="projects" className="section">

<h2>Projects</h2>

<div className="cards">

<div className="card">
<h3>ERP Software</h3>
<p>Educational management system for handling data and student records.</p>
</div>

<div className="card">
<h3>SHAKTI CLASSES</h3>
<p>Learning platform with quizzes, notes, and video lectures.</p>
</div>

<div className="card">
<h3>Smart Mirror</h3>
<p>AI based smart mirror using Raspberry Pi and OpenCV.</p>
</div>

</div>

</section>


{/* Skills */}

<section id="skills" className="section">

<h2>Skills</h2>

<p><b>Programming:</b> C, C++, Java, JavaScript</p>

<p><b>Web Development:</b> HTML, CSS, React.js, Node.js, Express.js</p>

<p><b>Database:</b> MongoDB, PostgreSQL</p>

<p><b>Technologies:</b> Arduino, IoT, Raspberry Pi</p>

</section>


{/* Education */}

<section id="education" className="section">

<h2>Education</h2>

<div className="cards">

<div className="card">
<h3>B.Tech Computer Science</h3>
<p>Currently pursuing Computer Science Engineering batch 2024-2028</p>
</div>

<div className="card">
<h3>12th Science</h3>
<p>Pt. RCMMPS Public School (CBSE) — 2023</p>
</div>

<div className="card">
<h3>10th</h3>
<p>St. Vishna RRN School (CBSE) — 2021</p>
</div>

</div>

</section>


{/* Experience */}

<section id="experience" className="section">

<h2>Experience</h2>

<div className="cards">

<div className="card">
<h3>Web Development</h3>
<p>Building full stack applications using React and Node.js.</p>
</div>

<div className="card">
<h3>IoT Projects</h3>
<p>Developed Arduino and Raspberry Pi based automation systems.</p>
</div>

</div>

</section>


{/* Achievements */}

<section id="achievements" className="section">

<h2>Achievements</h2>

<ul>

<li>Developed Smart Mirror with AI</li>

<li>Created educational platform Uttam Study Point</li>

<li>Strong knowledge of Data Structures and Algorithms</li>

</ul>

</section>


{/* Footer */}

<footer className="footer">

<div className="social-icons">

<a href="mailto:ap6238969@gmail.com"><FaEnvelope size={28}/></a>

<a href="tel:+917275606829"><FaPhone size={28}/></a>

<a href="https://github.com/amitpandey7275" target="_blank" rel="noreferrer"><FaGithub size={28}/></a>

<a href="https://linkedin.com/in/amit_pandey7275" target="_blank" rel="noreferrer"><FaLinkedin size={28}/></a>

<a href="https://www.youtube.com/@amit_pandey7275" target="_blank" rel="noreferrer"><FaYoutube size={28}/></a>

<a href="https://instagram.com/amit_pandey7275" target="_blank" rel="noreferrer"><FaInstagram size={28}/></a>

<a href="https://wa.me/917275606829" target="_blank" rel="noreferrer"><FaWhatsapp size={28}/></a>

<a href="https://facebook.com/amitpandey7275" target="_blank" rel="noreferrer"><FaFacebook size={28}/></a>

<a href="https://snapchat.com/add/amitpandey7275" target="_blank" rel="noreferrer"><FaSnapchat size={28}/></a>

</div>

<p>© 2026 Amit Pandey</p>
<p>Jai Mata Di 🙏</p>

</footer>

</div>

);

}

export default Home;
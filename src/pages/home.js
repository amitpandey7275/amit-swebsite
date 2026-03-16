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
Hello! I'm Amit Pandey, a B.Tech Computer Science student passionate about technology, programming, and building innovative digital solutions. I enjoy learning new technologies and developing projects that solve real-world problems.
</p>



<p>
You can view my Resume here: 
<a 
href="https://drive.google.com/file/d/1eYKgmx4_rqfrTYrca_t_oUP2fxCNbzsg/view?usp=sharing" 
target="_blank" 
rel="noreferrer"
>
  View Resume
</a>
</p>

</section>

{/* Projects */}

<section id="projects" className="section">

<h2>Projects</h2>

<h3>ERP Software</h3>

<p>
Developed an Educational ERP (Enterprise Resource Planning) system designed
to manage student records, academic information, and administrative data
efficiently. The system helps educational institutions organize student
details, course information, and institutional records in a structured way.
</p>

<p>
This project focuses on simplifying data management processes and improving
accessibility of academic information for administrators and teachers.
It demonstrates my ability to design structured software solutions for
real-world educational environments.
</p>


<h3>Educational Platform</h3>

<p>
Developed an educational learning platform aimed at helping students access
study materials and improve their learning experience. The platform provides
features such as quizzes, study notes, and video lectures to support
self-paced learning.
</p>

<p>
The goal of this project was to create a simple and accessible digital
learning environment where students can track their learning progress
and improve their understanding of academic subjects.
</p>

</section>


{/* Skills */}

<section id="skills" className="section">

<h2>Skills</h2>


<h3>Technical Skills</h3>

<p>
<b>Programming Languages:</b> C, C++, Java, and JavaScript.  
I have a strong foundation in programming concepts such as data structures,
problem solving, and algorithmic thinking.
</p>

<p>
<b>Web Development:</b> HTML, CSS, React.js, Node.js, and Express.js.  
I use these technologies to build responsive and interactive web applications
with both frontend and backend functionality.
</p>

<p>
<b>Database Management:</b> MongoDB and PostgreSQL.  
Experience in designing and managing databases for storing and handling
application data efficiently.
</p>



{/* Skills */}

<section id="skills" className="section">





<div className="skill">

<p>C / C++</p>

<div className="skill-bar">
<div className="skill-fill cpp">80%</div>
</div>

</div>


<div className="skill">

<p>Java</p>

<div className="skill-bar">
<div className="skill-fill java">60%</div>
</div>

</div>


<div className="skill">

<p>JavaScript</p>

<div className="skill-bar">
<div className="skill-fill js">70%</div>
</div>

</div>


<div className="skill">

<p>React.js</p>

<div className="skill-bar">
<div className="skill-fill react">70%</div>
</div>

</div>


<div className="skill">

<p>Node.js</p>

<div className="skill-bar">
<div className="skill-fill node">65%</div>
</div>

</div>

</section>


<h3>Soft Skills</h3>

<p>
<b>Problem Solving:</b> Ability to analyze problems logically and develop
efficient solutions through programming and structured thinking.
</p>

<p>
<b>Leadership:</b> Developed leadership and responsibility while serving
as the Head Boy during school, managing tasks and coordinating with teams.
</p>

<p>
<b>Communication:</b> Able to explain technical ideas clearly and collaborate
effectively with teammates during projects and academic activities.
</p>

<p>
<b>Continuous Learning:</b> Always interested in learning new technologies,
improving coding skills, and building real-world projects.
</p>

</section>


{/* Education */}

<section id="education" className="section">

<h2>Education</h2>

<h3>Bachelor of Technology (B.Tech) – Computer Science Engineering</h3>

<p>
Currently pursuing B.Tech in Computer Science Engineering (2024 – 2028).
During my studies, I am focusing on programming, web development, and
data structures while building practical projects to strengthen my
technical skills.
</p>


<h3>Class 12 – Science (CBSE)</h3>

<p>
Completed my 12th from Pt. RCMMPS Public School, Jhalwa, Prayagraj in 2023
with a Science background. During this time I was actively involved in
school leadership activities and served as the <b>Head Boy</b> of the school.
Because of these responsibilities, I had limited time for studies,
but the experience helped me develop leadership, discipline,
and management skills.
</p>


<h3>Class 10 – CBSE</h3>

<p>
I completed my Class 10 education from St. Vishna RRN School, Mundera,
Prayagraj in 2021 under the CBSE board. This academic year was quite
challenging because it coincided with the COVID-19 pandemic, which
significantly affected the normal learning process. Schools were closed
for a long period and studies were conducted mostly through online
classes.

Despite these challenges, I continued focusing on my studies and
maintained my interest in science and technology. The pandemic period
also helped me develop self-learning habits, adaptability, and the
ability to stay motivated even during difficult circumstances.
</p>

</section>



{/* Certifications & Achievements */}

<section id="certifications" className="section">

<h2>Certifications & Achievements</h2>

<h3>AI Fundamentals Certification</h3>
<p>
Successfully completed the AI Fundamentals certification offered by Microsoft and
Oracle AI Foundation. The course introduced core concepts of Artificial Intelligence
including machine learning basics, data-driven decision making, and real-world
applications of AI technologies.
</p>

<p>
<a href="https://drive.google.com/file/d/1uYygAyBcIar3YX1_sdQAWkCmJ8EVkP6j/view?usp=sharing" target="_blank" rel="noreferrer">
View Certificate
</a>
</p>


<h3>Hedera Hashgraph Certification</h3>
<p>
Completed certification on Hedera Hashgraph focusing on Blockchain and Distributed
Ledger Technology. The program covered decentralized systems, blockchain concepts,
and modern approaches to secure and scalable distributed applications.
</p>

<p>
<a href="https://drive.google.com/file/d/1TZ9JwdD1VO81gf7DqVcQ6MG-R7yzDPIZ/view?usp=sharing" target="_blank" rel="noreferrer">
View Certificate
</a>
</p>


<h3>IIT Bombay Certification in C Programming</h3>
<p>
Successfully completed the C Programming certification from IIT Bombay. The course
focused on core programming fundamentals including data types, control structures,
functions, arrays, and problem solving techniques using the C language.
</p>

<p>
<a href="https://drive.google.com/file/d/19cTAkU66Zndx-V73OhOhG7fu5N4wKzQN/view?usp=sharing" target="_blank" rel="noreferrer">
View Certificate
</a>
</p>


<h3>IIT Bombay Certification in C++ Programming</h3>
<p>
Completed C++ Programming certification from IIT Bombay with focus on
object-oriented programming concepts such as classes, inheritance,
polymorphism, and modular program design.
</p>

<p>
<a href="https://drive.google.com/file/d/1ElUmzutiaSNCd05fA0uvoeRAKvZXhJCi/view?usp=sharing" target="_blank" rel="noreferrer">
View Certificate
</a>
</p>


<h3>Hackathons and Coding Competitions</h3>
<p>
Participated in multiple hackathons and coding competitions organized in
college to enhance problem-solving skills, teamwork, and software development
experience. These events helped in gaining practical exposure to real-world
technical challenges.
</p>

</section>

{/* Inspiration */}

<section className="section">

<h2>Inspiration</h2>

<p>
"Code is like poetry — every line should have a purpose."
</p>

<p>
Keep learning, keep building, and never stop improving.
</p>

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

import React, { useState, useEffect } from 'react';
import './App.css'; 
import profilePic from './assets/anbu.jpg';
import naathaa from './assets/me.jpeg';
import projectpic from './assets/image1.png';
import projectpic1 from './assets/img.jpg';
import upcoming from './assets/image.jpeg';
import idea from './assets/ideathon.jpg';
import gaming from './assets/gaming.png';
import Typewriter from "typewriter-effect"
import { VscLiveShare } from "react-icons/vsc";
import shop from './assets/shop.png';
import task from './assets/task.png';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
  const createSpark = (x, y) => {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = x + "px";
    spark.style.top = y + "px";

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 400);
  };

  const handleMouseMove = (e) => {
    createSpark(e.clientX, e.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

useEffect(() => {
  const container = document.querySelector(".stars-container");

  for (let i = 0; i < 40; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = 3 + Math.random() * 5 + "s";
    star.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(star);
  }
}, []);


  return (
    <>
      <div className="stars-container"></div>
      <div className="nav" id="nav">
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
        <a href="#nav">Home</a>
        <a href="#skill">Skill</a>
        <a href="#project">Project</a>
        <a href="#ac">Achievement</a>
        <a href="#con">Contact Me</a>
        <a href="/Resume.pdf" download="Resume.pdf" className='do' > Resume</a>
      </div>
    </div>

      <div className="name">
        <div>
          <h1>
            I am Anbu<br/>Selvam<Typewriter options={{strings :['<span style="color:#2563eb">Developer</span>',
      '<span style="color:#2563eb">Designer</span>',
],autoStart :true,loop:true}}/>
          </h1>
          <div className="but">
            <button className="k">
              <a href="#ab" className="am">About me</a>
            </button>
          </div>
        </div>
        <img src={naathaa} alt="Anbu Selvam" style={{ width: '300px', borderRadius: '10px',margin:'3rem' }} />
      </div>

      <div className="ab" id="ab">
        <h1>About Me</h1>
        <p className="para">
          I am a passionate and dedicated web developer with strong experience in front-end and back-end technologies. I have hands-on knowledge in HTML, CSS, and React for creating responsive and user-friendly web interfaces, and a solid foundation in Java for building scalable back-end systems. I enjoy turning ideas into real-world applications that are efficient, maintainable, and visually appealing. I'm always eager to learn and improve, staying updated with the latest trends in web development.


        </p>

        <h1 className="section-title">Education</h1>

        <div className="edu-block">
          <h2>Bachelor of Engineering:</h2>
          <p className="hs">
            B.E, Department of Computer Science (2023-2027)<br />
            Bannari Amman Institute of Technology, Sathyamangalam, Erode(Dt).<br/>
            CCPA : 7.65

          </p>
        </div>

        <div className="edu-block">
          <h2>Higher Education:</h2>
          <p className="hs">
            Seventh-day Adventist Matriculation Higher Secondary School, Sivaganga(Dt).<br/>
            Grade : 81.33%.
          </p>
        </div>
      </div>

      <h2 id="skill" className="sk">Skill</h2>

      <div className="card">
        <div className="section">
          <h2>Programming Languages</h2>
          <ul>
            <li>Java</li>
            <li>C</li>
            <li>C++ (Basic)</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="section">
          <h2>Frontend</h2>
          <ul>
            <li>HTML,CSS</li>
            <li>React,UI/UX</li>
            <li>JavaScript  </li>
          </ul>
        </div>

        <div className="section">
          <h2>Database</h2>
          <ul>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
       <h1 id="project" className="sk">Project</h1>
       <div className="about-container" id="about">
        <h2 style={{textAlign:'center',color:' #40c9ff'}}>My Portfolio</h2>
      <div className="project-card">
        <div className="project-content">
          <img
            className="project-image"
            src={projectpic}
            alt="Project"
          />
          <p className="project-description">
            I developed a responsive personal portfolio using React with Vite for fast development and build performance. The UI is styled using custom CSS, showcasing sections like About Me, Projects, and Contact. It features a modern, dark-themed design with interactive project cards and GitHub integration. This project highlights my frontend skills and clean code practices.
          </p>
        </div>
        <div className="github-button-container">
          <a href='https://github.com/ANBUSELVAM-S/portfolio.git' style={{color:'white',textDecoration:'none'}}><button className="github-button">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18
              A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,
              2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,
              1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,
              2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,
              4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
            Continue with GitHub
          </button></a>
          
        </div>
        <div className="github-button-container">
          <a href='https://anbuport.netlify.app' style={{color:'white',textDecoration:'none'}}><button className="github-button">
          <VscLiveShare /> Live Demo
          </button></a>
          
        </div>
      </div>

       <h2 style={{textAlign:'center',color:' #40c9ff',padding:'1rem'}}>ShopFusion</h2>
      <div className="project-card">
        <div className="project-content">
          <img
            className="project-image"
            src={shop}
            alt="Project"
          />
          <p className="project-description">
            This project is a sleek and responsive e-commerce product showcase built using React.
It features a modern navigation bar with sections like Home, Favourite, Orders, Cart, and Logout for smooth user flow.
Each product card displays high-quality images, brand names, pricing, and includes interactive buttons such as Add to Cart and Order Now.
The layout follows a clean grid structure, providing a visually appealing and user-friendly shopping experience.
The interface is optimized for clarity, making it easy for users to browse and compare multiple items.
Overall, this UI demonstrates front-end skills in layout design, component structure, responsiveness, and clean styling.</p>
        </div>
        <div className="github-button-container">
          <a href='https://github.com/ANBUSELVAM-S/Shopfusion.git' style={{color:'white',textDecoration:'none'}}><button className="github-button">
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18
              A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,
              2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,
              1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,
              2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,
              4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
            Continue with GitHub
          </button></a>
          
        </div>
        <div className="github-button-container">
          <a href='https://shopfusion-tau.vercel.app' style={{color:'white',textDecoration:'none'}}><button className="github-button">
          <VscLiveShare /> Live Demo
          </button></a>
          
        </div>
      </div>
      <h2 style={{textAlign:'center',paddingTop:'15px',color:' #40c9ff'}}>Hostel Fault Management System</h2>
      <div className="project-card">
        <div className="project-content">
          <img
            className="project-image"
            src={projectpic1}
            alt="Project"
          />
          <p className="project-description">
Developed a full-stack Hostel Fault Management System integrating React.js, Node.js, MySQL, and an ML-based text classification model. Implemented secure user authentication, automated fault categorization, and real-time email notifications for students, staff, and administrators. Designed responsive UI dashboards, ensuring seamless interaction and fault tracking across all user roles. Built and deployed a Flask ML API for category prediction, integrated with backend workflows for automated staff assignment. Ensured system reliability through extensive testing, optimization, and end-to-end documentation.</p>
        </div>
        <div className="github-button-container">
          <a href='https://github.com/kpajay-45/hostel-fault-management-system.git' style={{color:'white',textDecoration:'none'}}><button className="github-button" >
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18
              A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,
              2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,
              1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,
              2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,
              4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
            Continue with GitHub
          </button></a>
        </div>
        <div className="github-button-container">
          <a href='' style={{color:'white',textDecoration:'none'}}><button className="github-button">
          <VscLiveShare /> Live Demo
          </button></a>
          
        </div>
      </div>
      <h2 style={{textAlign:'center',paddingTop:'15px',color:' #40c9ff'}}>Online task completion tracker</h2>
      <div className="project-card">
        <div className="project-content">
          <img
            className="project-image"
            src={task}
            alt="Project"
          />
          <p className="project-description">
This Task Management System is a full-stack web application built using React for the frontend and Node.js with Express and MySQL for the backend. It allows users to securely log in, add tasks with date and time, and track them as pending or completed. The dashboard shows total, completed, and pending tasks with visual charts for better understanding. A responsive sidebar with a hamburger menu ensures smooth use on mobile devices. The system stores user data and tasks in a database and fetches them in real time using REST APIs. Overall, it helps users organize, monitor, and manage their daily tasks efficiently.</p>
        </div>
        <div className="github-button-container">
          <a href='https://github.com/ANBUSELVAM-S/TaskManager.git' style={{color:'white',textDecoration:'none'}}><button className="github-button" >
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18
              A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,
              2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,
              1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,
              2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,
              4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
            Continue with GitHub
          </button></a>
        </div>
        <div className="github-button-container">
          <a href='' style={{color:'white',textDecoration:'none'}}><button className="github-button">
          <VscLiveShare /> Live Demo
          </button></a>
          
        </div>
      </div>
    </div>
     <h1 id="ac" className="sk">Acheivement</h1>
     <div className="about-container" id="about">
      <div className="project-card">
        <h2 style={{textAlign:'center',paddingBottom:'15px',color:' #40c9ff'}}>Ideathon</h2>
        <div className="project-content">
        
          <p className="project-description">
I was awarded a Certificate of Participation by Bannari Amman Institute of Technology for actively contributing to IDEATHON '24, organized by BIT - Special Labs. During the event, I presented an innovative idea titled "Birthday Reminder", showcasing creativity and problem-solving skills. The event, held on 17th April 2024, provided a great platform to explore ideas, collaborate, and gain valuable exposure in the field of technology and innovation.          </p>
        </div>
        <div className="github-button-container">
          <a href={idea} style={{color:'white',textDecoration:'none'}}><button className="github-button" style={{backgroundColor:'blue'}}>
            View Certifitate
          </button></a>
        </div>
        </div>
        <div className="project-card">
          <h2 style={{textAlign:'center',paddingBottom:'15px',color:' #40c9ff'}}>National Conference on Recent Advances in Design and Digital Multimedia – NCRADDM 2023</h2>
          <div className="project-content">
          <p className="project-description">
I received a Certificate of Participation from Bannari Amman Institute of Technology for presenting a paper titled "Gaming and Animation" at the National Conference on Recent Advances in Design and Digital Multimedia – NCRADDM 2023. The event was organized by the Department of Computer Science and Design and held on 22nd December 2023. This conference provided a valuable opportunity to showcase research work and gain insights into emerging trends in digital multimedia and design technologies.</p>
        </div>
        <div className="github-button-container">
          <a href={gaming} style={{color:'white',textDecoration:'none'}}><button className="github-button" style={{backgroundColor:'blue'}}>
            View Certifitate
          </button></a>
        </div>
        </div>
      </div>
      
     
  
      <h1 id="con" className="con">Contact me</h1>

      <div className="form-container">
        <form className="form" action="https://formspree.io/f/xyzpklqb" method="POST">  
          <div className="form-group">
            <label htmlFor="email">Enter your Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="4"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>

      {/* Social Icons */}
      <ul className="wrapper">
  {/* LinkedIn */}
  <li className="icon linkedin">
    <a
      href="https://www.linkedin.com/in/anbu-selvam-s-80b727307/"
      target="_blank"
      rel="noreferrer"
      className="am"
    >
      <span className="tooltip">LinkedIn</span>
      <svg viewBox="0 0 448 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.84 108.1C24.33 108.1 0 83.77 0 53.46S24.33-1.18 53.84-1.18c29.5 0 53.84 24.33 53.84 54.64 0 30.31-24.34 54.64-53.84 54.64zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.8 31.2-2.3 5.6-2.9 13.3-2.9 21.1V448h-92.5V148.9h88.8v40.8h1.3c12.4-19 34.2-46.1 83.4-46.1 60.9 0 106.5 39.8 106.5 125.2V448z" />
      </svg>
    </a>
  </li>

  {/* Email */}
  <li className="icon email">
    <a href="mailto:anbuselvam.sk05@gmail.com" className="am">
      <span className="tooltip">Email</span>
      <svg viewBox="0 0 512 512" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M502.3 190.8L327.4 338.5c-15.9 13.5-39.8 13.5-55.7 0L9.7 190.8C3.9 186.1 0 179 0 171.3V80c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v91.3c0 7.7-3.9 14.8-9.7 19.5zM0 248.2v183.8c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V248.2L327.4 395.9c-31.9 27.1-78.8 27.1-110.6 0L0 248.2z" />
      </svg>
    </a>
  </li>

  {/* Instagram */}
  <li className="icon instagram">
    <a
      href="https://www.instagram.com/anbu_.05/"
      target="_blank"
      rel="noreferrer"
      className="am"
    >
      <span className="tooltip">Instagram</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.2em"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.83 0 5.56.01 4.7.05 3.85.09 3.27.22 2.76.42A3.9 3.9 0 0 0 .42 2.76C.22 3.27.09 3.85.05 4.7.01 5.56 0 5.83 0 8c0 2.17.01 2.44.05 3.3.04.85.17 1.43.37 1.94.21.53.48.97.92 1.42.45.44.89.72 1.42.92.51.2 1.09.33 1.94.37C5.56 15.99 5.83 16 8 16s2.44-.01 3.3-.05c.85-.04 1.43-.17 1.94-.37.53-.21.97-.48 1.42-.92.44-.45.72-.89.92-1.42.2-.51.33-1.09.37-1.94.04-.86.05-1.13.05-3.3s-.01-2.44-.05-3.3c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 0 0-.92-1.42 3.9 3.9 0 0 0-1.42-.92c-.51-.2-1.09-.33-1.94-.37C10.44.01 10.17 0 8 0Zm0 1.44c2.14 0 2.39.01 3.23.05.78.04 1.2.17 1.49.28.37.14.64.32.92.6.28.28.45.55.6.92.11.28.24.71.28 1.49.04.84.05 1.1.05 3.23s-.01 2.39-.05 3.23c-.04.78-.17 1.2-.28 1.49a2.47 2.47 0 0 1-.6.92c-.28.28-.55.45-.92.6-.29.11-.71.24-1.49.28-.84.04-1.1.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.17-1.49-.28a2.47 2.47 0 0 1-.92-.6 2.47 2.47 0 0 1-.6-.92c-.11-.29-.24-.71-.28-1.49C1.45 10.39 1.44 10.14 1.44 8c0-2.14.01-2.39.05-3.23.04-.78.17-1.2.28-1.49a2.47 2.47 0 0 1 .6-.92c.28-.28.55-.45.92-.6.29-.11.71-.24 1.49-.28C5.61 1.45 5.86 1.44 8 1.44ZM8 3.89a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 1.44a2.67 2.67 0 1 1 0 5.34 2.67 2.67 0 0 1 0-5.34Zm4.99-1.33a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92Z" />
      </svg>
    </a>
  </li>

  {/* GitHub */}
  <li className="icon github">
    <a
      href="https://github.com/ANBUSELVAM-S"
      target="_blank"
      rel="noreferrer"
      className="am"
    >
      <span className="tooltip">GitHub</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5 0 17.89 3.44 22.39 8.2 23.98c.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2.01-3.34.73-4.04-1.61-4.04-1.61-.54-1.36-1.33-1.73-1.33-1.73-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.66-.3-5.46-1.34-5.46-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.51.12-3.15 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.85.12 3.15.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.47 5.94.43.37.81 1.1.81 2.22 0 1.61-.01 2.91-.01 3.3 0 .31.21.68.82.56C20.56 22.39 24 17.89 24 12.5 24 5.87 18.63.5 12 .5z" />
      </svg>
    </a>
  </li>

  {/* LeetCode */}
  <li className="icon leetcode">
    <a
      href="https://leetcode.com/u/anbu-sk/"
      target="_blank"
      rel="noreferrer"
      className="am"
    >
      <span className="tooltip">LeetCode</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1024 1024" height="1.5em">
        <path d="M632.1 169.4c18.1-18.5 35.7-37.5 54.3-55.6 41.9-40.3 99.2-41.3 138.2-2.4 39 38.9 37.8 96.4-2.9 138.8-67.5 68.7-135.2 137.1-202.9 205.3-94.6 95.5-189.2 191.1-284.2 286.3-30.2 30.1-74.4 33.2-109.8 8.1-32.9-23.3-46.5-66.7-32.1-102.9 7.1-17.7 19.4-33.4 32.2-48 48.6-56 99-110.2 148.5-165.3 11.8-13.1 12.7-17.4.6-31-17.3-19.9-33.9-40.4-49.6-61.2-9.9-12.9-20.2-25.6-27.8-39.7-19.8-37.2-9.7-83.3 23.4-112.5 32.2-28.3 77.9-30.4 116.2-5.2 20.8 13.9 37.8 33.2 53.3 52.5 22.5 27.4 40.2 58.1 63.2 90.4l95.4-95.4c6.8-6.9 14-13.4 20.6-20.2z" />
      </svg>
    </a>
  </li>
</ul>

    </>
  );
}

export default App;

import React from 'react';
import '../../styles/aboutInformation.css';
import { user } from "../../data/user";

const AboutInformation = () => {
    return (
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src={"andre.jpg"} alt="Andre Mulaja" className="about-photo" />
          </div>
          <div className="about-text">
            <p className="about-paragraph">
              My name is Andre Mulaja, a passionate full-stack web, desktop, and mobile app developer. My journey into the world of programming began in 2018 when I enrolled at the Université Protestante du Congo (UPC) to study Computer Engineering. It was there that I was introduced to various programming languages such as C/C++, PHP, Java, and Python. This exposure sparked my love for programming.
              <br /><br />
              In 2020, I took a significant step by moving to Ottawa to further my education at La Cité Collégiale, where I pursued a degree in Computer Engineering Technology. During my time at La Cité, I acquired numerous skills and gained a deep understanding of software development. In 2023, I proudly graduated with an advanced college diploma.
              <br /><br />
              Recognizing the challenges faced by new graduates in securing their first job due to lack of experience, I decided to create a group of recent graduates and final-year students. The goal was to stay up-to-date with the latest technologies, enhance our skills, and eventually transform this group into a startup. This initiative, named TaskFlow Labs, aims to maintain our GitHub profiles active, build real projects for our portfolios, and gain real-world experience by working with actual clients. We also embrace methodologies like Scrum and Agile to simulate a professional working environment.
              <br /><br />
              As a full-stack developer, I specialize in building scalable, secure, and reliable applications using technologies such as Node.js, React/Next, Electron, React Native, ASP.net, and Django. I am also a cloud enthusiast with a particular passion for AWS. My proficiency in development tools like GitHub, VS Code, and Visual Studio allows me to deliver high-quality code that adheres to best practices and industry standards.
              <br /><br />
              Outside of my professional life, I enjoy cooking and exploring new culinary recipes. I believe in maintaining a healthy work-life balance, which helps me stay creative and motivated. I am also an active member of several online developer communities where I share my knowledge and learn from others.
              <br /><br />
              Feel free to connect with me on my social networks:
              <ul>
                <li><a href={user.media.linkedin} target="_blank" className="about-link">LinkedIn</a></li>
                <li><a href={user.media.github} target="_blank" className="about-link">GitHub</a></li>

              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
export default AboutInformation;

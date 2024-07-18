import { projects } from "./projects";

export const user = {
    
    name: "Andre Mulaja",
    telephone: "+1 (819) 930-7936",
    mail: "mulajaandre@gmail.com",
    image: "homepage.jpg",
    location: {
        city: "Ottawa",
        province: "Ontario",
        country: "Canada"
    },
    title: "Full-stack web, desktop, and mobile app developer with a passion for cloud technologies.",
    summary: "I am a full-stack with expertise in various programming languages, databases, and frameworks. I have experience in building scalable, secure, and reliable applications using technologies such as Node.js, React/Next, Electron, React Native, ASP.net, Django, and more. I enjoy solving complex problems, learning new skills, and creating high-quality code that follows best practices and industry standards. I am passionate about cloud computing with AWS and proficient in using development tools like GitHub, VS Code, and Visual Studio. I am always looking for new challenges and opportunities to grow as a developer.",
    skills: {
        languages: ["PHP", "Java", "Python", "C#", "HTML", "CSS", "JavaScript"],
        databases: ["MySQL", "MongoDB", "Oracle", "SQL Server"],
        frameworks: ["React/Next", "Electron", "React Native", "Node.js", "ASP.net", "Django"],
        operatingSystems: ["Windows", "Linux", "Mac"],
        developmentTools: ["GitHub", "VS Code", "Visual Studio"],
        cloudComputing: ["AWS (Lightsail, Beanstalk, EC2, RDS, S3)"],
        other: ["Distributed Programming", "Data Structures", "Software Quality Assurance", "Design Patterns"]
    },
    experience: [{

            company: "ELK'S Shine & Clean",
            role: "Webmaster",
            platform: ["Webador", "HTML", "CSS", "JavaScript"],
            startDate: "May 2024",
            endDate: "Present",
            logo: ""

        },
        {
            company: "Private Tutoring",
            role: "Tutor",
            type: "Private Tutoring",
            platform: ["programming languages", "Algorithm", "..." ],
            startDate: "December 2020",
            endDate: "Present",
            logo: ""
        }
    ],
    projects,

    startup: {
        name: "TaskFlow Labs",
        description: "TaskFlow Labs is a startup I founded, assembling a talented team comprising developers, a designer, an analyst, a project manager, and marketing agents—all recent graduates. Our mission is to:",
        goals: [
            "Keep our knowledge current",
            "Pursue continuous learning",
            "Maintain active GitHub profiles",
            "Build real-world project portfolios",
            "Gain practical experience with clients in a professional setting",
            "Adopt Agile and Scrum methodologies",
            "Ultimately, launch a successful startup"
        ],
        role: "As CEO and full-stack developer with six years of experience, I specialize in Next.js, React, Electron, React Native, Node.js, and AWS. I provide leadership, technical guidance, and training to ensure our team delivers high-quality work."
    },
    interests: ["Cloud Technologies", "Cooking"],
    personalInfo: {
        sister: {
            event: "Recently welcomed a baby girl"
        },
        mascot: "I have a fondness for teddy bears and would like to incorporate them into our logo."
    },
    media: {
        github: "https://github.com/MR-C0DE",
        linkedin: "https://www.linkedin.com/in/andré-mulaja-427b671a4/"
    }
}
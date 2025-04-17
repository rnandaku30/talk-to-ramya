// data/data.js

export const SECTION_IDS = ["about", "experience", "education", "projects", "skills"];

export const personalInfo = {
    name: "Ramyashree Nandakumar",
    title: "Full Stack Developer",
    email: "ramyashree.nandakumar@gmail.com",
    phone: "+1 (571) 663-3026",
    linkedin: "https://linkedin.com/in/ramyashree-nandakumar",
    github: "https://github.com/rnandaku30",
    portfolio: "http://ramya-portfolio.s3-website-us-east-1.amazonaws.com/",
    address: "Fairfax, VA, USA",
    quote:"“Build scalable systems. Solve real problems. Stay curious.”",
    summary:
        "Experienced Full-Stack Developer with 4+ years of expertise in backend development, microservices, API integrations, and cloud-based solutions...",
};


export const aboutMe = [
    "I'm a Full Stack Developer with over 4 years of experience building scalable backend systems, cloud-integrated services, and AI-powered applications. From designing enterprise-grade microservices at Ellucian to optimizing payment workflows with AWS Serverless and NestJS, I enjoy architecting solutions that are reliable, secure, and performance-driven.",
    "Currently, I'm pursuing my Master's in Computer Science at George Mason University, focusing on Artificial Intelligence, Deep Learning, and Machine Learning. My academic work often complements my real-world projects, such as building an AI-based credit card fraud detection system and an image captioning model that enhances accessibility.",
    "I’m also working as a Teaching Assistant, where I mentor students in Python and Java through inclusive lesson design, adaptive materials, and project-based learning. My efforts have significantly boosted classroom engagement and accessibility, especially for students with diverse learning needs.",
    "My favorite projects combine thoughtful user experience with intelligent automation. Recently, I’ve been building RoutineWise — a neuro-friendly planner that adapts to user moods and routines using AI, Firebase, and Google Cloud. Whether I’m building microservices, deploying on Kubernetes, or integrating ML models, I’m passionate about delivering software that’s as elegant as it is functional.",
    "Beyond tech, I love tinkering with UI design, exploring AI ethics, and creating tools that make people’s lives easier — especially in education and mental wellness. I thrive in collaborative environments and love mentoring, shipping fast, and learning deeply."
]

export const education = [
    {
        degree: "Master of Science in Computer Science",
        institution: "George Mason University, Fairfax, VA",
        duration: "Aug 2023 – May 2025",
        gpa: "3.74/4.0",
        coursework: [
            "Analysis of Algorithms", "Component-based Software Development",
            "Software Engineering for the World Wide Web", "Artificial Intelligence", "Machine Learning", "Deep Learning"
        ],
    },
    {
        degree: "Bachelor of Technology",
        institution: "CMR Institute of Technology, Bangalore, India",
        duration: "Aug 2015 – Jun 2019",
        gpa: "8.83/10",
        coursework: [
            "Java", "JavaScript", "Python", "Data Structures", "Algorithms", "Operating Systems", "Object Oriented Programming"
        ],
    },
];

export const experiences = [
    {
        title: "Teaching Assistant",
        company: "George Mason University",
        location: "Fairfax, VA, USA",
        duration: "Aug 2024 – Present",
        "description": "  As a Teaching Assistant at GMU, I supported over 25 students across various Computer Science courses. I focused on creating inclusive and engaging learning environments using cloud-based tools and adaptive materials. My role involved delivering personalized support in Python and Java, conducting workshops, and improving classroom participation through gamified learning strategies.",
        achievements: [
            "Improved student engagement by 30% by creating interactive and adaptive learning materials using cloud-based platforms.",
            "Enhanced academic performance by 25% by delivering personalized coding support in Python and Java.",
            "Increased accessibility for students with special needs by designing customized lesson content using accessible technologies.",
            "Boosted classroom participation by 20% through gamified coding challenges and hands-on workshops.",
        ],
    },
    {
        title: "Software Engineer II",
        company: "Ellucian Higher Education Systems",
        duration: "Jun 2020 – Aug 2023",
        description: "  As a Software Engineer at Ellucian, I developed and maintained microservices supporting large-scale education platforms. I led the automation of Department for Education (DfE) data processes, reducing manual workload by 80%. My work focused on optimizing ERP integrations through real-time, event-driven pipelines and enhancing interoperability across Finance, Payments, and Student modules.",
        achievements: [
            "Engineered microservices to automate Department for Education (DfE) admissions data, eliminating 80% of manual entry.",
            "Built real-time event-driven data pipelines using PL/SQL and AWS SNS for ERP publishing and sync.",
            "Collaborated across teams to enhance Finance, Payments, and Student data flows, improving interoperability and performance.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company: "Ellucian Higher Education Systems",
        duration: "Mar 2020 – Jun 2020",
        description: "  During my internship at Ellucian, I designed a flexible file storage system capable of dynamically routing files between AWS S3, on-premise servers, and Oracle databases based on environment configurations. This significantly improved storage efficiency and laid the groundwork for scalable, hybrid infrastructure handling.",
        achievements: [
            "Developed a flexible file storage system supporting AWS S3, on-prem servers, and Oracle DB for optimal storage handling.",
            "Reduced Oracle DB storage load by 40% through intelligent file routing to cloud storage.",
        ],
    },

];


export const projectsSummary = [
    {
        key: "ellucian-payment-services",
        title: "Ellucian Payment Services",
        tech_stack: ["Node.js", "React.js", "DynamoDB", "NestJS", "AWS (Serverless)"],
        achievements: [
            "Developed a SaaS-based payment solution for Ellucian products, integrating multiple third-party payment partners.",
            "Ensured fault tolerance and scalability using AWS (Serverless, DynamoDB) and React.js for seamless user experience.",
            "Reduced payment failure rates by 20%, improving overall system reliability."
        ]
    },
    {
        key: "quercus-logging-system",
        title: "Quercus Logging System",
        tech_stack: ["Node.js", "PL/SQL", "AWS S3", "Amazon Athena"],
        achievements: [
            "Designed a microservice to fetch and push logs to AWS S3 for enhanced data accessibility and reporting.",
            "Integrated Amazon Athena to enable on-demand query execution and analytics for stored logs.",
            "Improved logging accessibility by 30%, enabling faster debugging and issue resolution."
        ]
    },
    {
        key: "arihant-ispat",
        title: "Manufacturing Process Optimization System – Arihant Ispat",
        tech_stack: ["Java", "Spring Boot", "JSP", "MySQL", "Git", "AWS"],
        achievements: [
            "Engineered a manufacturing system, optimizing production workflows and reducing material handling inefficiencies by 25%.",
            "Implemented version control with Git and deployed the system on AWS, improving deployment efficiency by 30% and reducing infrastructure overhead by 40%.",
            "Developed a backend system using Spring Boot, JSP, and MySQL, reducing data retrieval time by 40% and improving data consistency across production modules."
        ]
    },
    {
        "title": "Enterprise Inventory Management System",
        "key": "inventory-management",
        "tech_stack": [
            "Java (Multithreading, Collections, Streams, Generics)",
            " Spring Boot",
            " PostgreSQL",
            "Docker",
            "Kubernetes"
        ],
        "achievements": [
            "Built a high-efficiency inventory system, improving stock tracking and order fulfillment, reducing inventory errors by 40%.",
            "Enhanced backend processing with Core Java multithreading & Streams API, cutting query execution time by 30%.",
            "Deployed with Kubernetes & Docker, ensuring auto-scaling and reducing downtime by 50%."
        ]
    },
    {
        "title": "Automated Image Captioning System – AI for Visual Understanding",
        "key": "automated-image-captioning",
        "tech_stack": [
            "TensorFlow",
            "Keras",
            "ResNet50",
            "GPT-2 Tokenizer"
        ],
        "achievements": [
            "Created an AI-driven captioning model, enhancing image-text pairing accuracy, achieving a BLEU score of 0.67.",
            "Processed 120,000+ images, increasing dataset efficiency and training speed by 30%.",
            "Integrated ResNet50 with an attention-based LSTM, refining text generation by 20%."
        ]
    },
    {
        "title": "Credit Card Fraud Detection – AI for Financial Security",
        "key": "credit-card-fraud-detection",
        "tech_stack": [
            "Python",
            "Scikit-Learn",
            "TensorFlow",
            "Pandas",
            "Matplotlib"
        ],
        "achievements": [
            "Developed fraud detection models, boosting precision to 95% and lowering false positives by 30%.",
            "Utilized SMOTE for class balancing, improving anomaly detection accuracy by 20%.",
            "Optimized Random Forest & Gradient Boosting models, reducing fraud classification errors by 25%."
        ]
    }
];

export const projectDetails = {
    "ellucian-payment-services": {
        "title": "Ellucian Payment Services",
        "image": "images/payment-system.jpg",
        "description": "Led the development of a SaaS-based enterprise payment platform integrated with AWS.",
        "details": {
            "projectOverview": "Developed a highly scalable microservices-based payment processing system, integrating various third-party payment gateways.",
            "approach": [
                "Designed a centralized payment gateway integrating Touchnet, Flywire, and Payment Client APIs.",
                "Developed microservices using Node.js, NestJS, and AWS Serverless.",
                "Implemented retry mechanisms and circuit breakers, reducing payment failures by 30%.",
                "Ensured PCI-DSS compliance by securing API authentication and payment data handling."
            ],
            "solutionAndResults": "Reduced payment processing failures by 20%, ensuring a 99.9% uptime for payment services."
        }
    },
    "arihant-ispat": {
        title: "Manufacturing Process Optimization System – Arihant Ispat",
        image: "images/arihant.jpeg",
        description: "Engineered a manufacturing system to optimize production workflows and reduce inefficiencies.",
        details: {
            projectOverview: "Developed a full-stack manufacturing optimization platform to streamline production processes, with real-time tracking and scheduling.",
            approach: [
                "Designed backend with Spring Boot, JSP, and MySQL for handling production data.",
                "Integrated optimization algorithms like TSP for task scheduling.",
                "Used Git for version control and deployed on AWS for scalability.",
                "Implemented modules for raw material flow, machining, heat treatment, and dispatch tracking."
            ],
            solutionAndResults: "Reduced handling inefficiencies by 25%, cut down deployment effort by 30%, and improved module-level data consistency by 40%."
        }
    },
    "automated-image-captioning": {
        "title": "Automated Image Captioning System",
        "image": "images/image-captioning.png",
        "key": "automated-image-captioning-system",
        "description": "Developed an AI-powered system for generating captions for images using deep learning.",
        "details": {
            "projectOverview": "Designed a deep learning model that generates captions for images, improving accessibility.",
            "approach": [
                "Used ResNet50 for feature extraction and LSTM for sequence generation.",
                "Implemented Attention Mechanism to improve caption accuracy.",
                "Trained on the MS-COCO dataset with 120,000+ images."
            ],
            "solutionAndResults": "Achieved a BLEU score of 0.67, significantly outperforming baseline models."
        }
    },
    "quercus-logging-system": {
        "title": "Quercus Logging System",
        "image": "images/logging-system.jpg",
        "key": "quercus-logging-system",
        "description": "Developed a microservice to store and analyze logs using AWS S3 and Athena.",
        "details": {
            "projectOverview": "Implemented a scalable logging system to manage cloud-based event logs efficiently.",
            "approach": [
                "Built a microservice using Node.js and PL/SQL to fetch logs in real-time.",
                "Integrated AWS S3 for storage and Amazon Athena for querying logs.",
                "Enabled real-time monitoring and analytics for debugging production issues."
            ],
            "solutionAndResults": "Improved logging accessibility by 30%, enabling faster debugging and issue resolution."
        }
    },
    "inventory-management": {
        "title": "Enterprise Inventory Management System",
        "image": "images/inventory.png",
        "key": "inventory-management",
        "description": "Developed a Java-based inventory system for efficient stock management.",
        "details": {
            "projectOverview": "Designed a Spring Boot-based inventory management system, improving stock tracking and fulfillment.",
            "approach": [
                "Implemented Java Streams API & Multithreading to optimize order processing.",
                "Designed a PostgreSQL-backed data layer for seamless storage.",
                "Deployed using Docker and Kubernetes, ensuring high availability."
            ],
            "solutionAndResults": "Reduced inventory errors by 40%, improving order fulfillment rates."
        }
    }, "credit-card-fraud-detection": {
        "title": "Credit Card Fraud Detection",
        "image": "images/fraud-detection.jpeg",
        "description": "Developed a fraud detection model using AI & ML, achieving 95% accuracy.",
        "details": {
            "projectOverview": "Built AI-powered fraud detection models to identify anomalies in real-time banking transactions.",
            "approach": [
                "Trained models on 100,000+ transactions using Scikit-Learn & TensorFlow.",
                "Implemented Isolation Forest & One-Class SVM for anomaly detection.",
                "Used SMOTE to handle class imbalance, improving detection rates."
            ],
            "solutionAndResults": "Achieved 95% precision, reducing fraud-related financial losses significantly."
        }
    }
};

export const skills = [
    {
        title: "Languages",
        items: ["Java", "Python", "Node.js", "JavaScript", "PL/SQL"],
    },
    {
        title: "Frameworks",
        items: [
            "Spring Boot",
            "Hibernate",
            "React.js",
            "Nest.js",
            "TensorFlow",
            "Keras",
        ],
    },
    {
        title: "Cloud & Databases",
        items: ["AWS", "Oracle", "PostgreSQL", "MongoDB"],
    },
    {
        title: "DevOps & Tools",
        items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    },
    {
        title: "Other",
        items: [
            "API Development",
            "Microservices",
            "Payment Integrations",
            "AI/ML",
        ],
    },
];


export const awards = [
    {
        title: "High-Impact Award",
        description:
            "Led a project transition ensuring 99.9% uptime and reducing operational costs by 25%.",
    },
];

export const chatBot = {
    suggestions: [
        "What are your top 3 projects",
        "How can I contact you",
        "What do you specialize in",
        "Take me to projects section",
    ]
};

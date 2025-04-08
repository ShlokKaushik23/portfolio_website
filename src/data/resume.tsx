import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shlok Kaushik",
  initials: "SK",
  url: "https://dillion.io",
  location: "India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Mtech AI Student IIT Patna",
  summary:
    "🎓 I'm currently pursuing my M.Tech in Artificial Intelligence at IIT Patna. I’m a builder at heart, a researcher by passion, and a tech explorer by soul.  💡 I specialize in blending AI/ML/GenAI, Full Stack Development, and innovative research to craft solutions that are not just functional—but impactful. Whether it’s training deep neural networks, designing ML models, or building intuitive web apps, I love turning complex problems into elegant, real-world solutions. ",
  avatarUrl: "/shlok.jpg",
  skills: [
    "Python", "C++", "Javascript", "Dart", "DSA", "OOPs", "System Design", 
    "Numpy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "Pytorch",
    "Transformers",
    "LLMs",
    "GENAI",
    "Graph Neural Network",
    "Knowledge Distillation",
    "Contrastive Learning",

    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Redux",
    "Tailwind",
    "Shadcn",
    "Vite",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "JQuery",
    "Rest APIs",
    "Streamlit",

    "Flutter", "Java", "Firebase",

    "Machine Learning",
    "Deep Learning",
    "NLP",
    "AI",
    "Probability and Statistics",
    "DBMS",
    "Algorithms",
  ],

  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "iitp.shlokkaushik@gmail.com",
    tel: "+91-9870919285",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShlokKaushik23",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shlokkaushik/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Data Analytics & Network Science (DANeS) Lab IIT Patna",
      href: "https://www.iitp.ac.in/~danes/index.html",
      location: "On-site",
      title: "Research Associate",
      logoUrl: "/iitp_logo.png",
      start: "May 2024",
      end: "Ongoing",
      description:
        "● Attention-Based Spatial-Temporal Graph Networks for Traffic Flow Prediction Exploring GNN-based models for spatio-temporal forecasting to improve traffic flow prediction. Utilizing contrastive learning techniques to enhance feature fusion and capture complex traffic patterns.",

      description_:
        " ● Solving Cold-Start in Cross-Domain Recommendations with GNN and LLMs Developing a hybrid recommendation system that integrates GNNs and LLMs to address cold-start challenges. Optimizing multi-modal embedding techniques to improve recommendation accuracy in sparse data scenarios.",
    },
    {
      company: "IIT Patna",
      href: "https://www.iitp.ac.in",
      // badges: [],
      location: "On-site",
      title: "Teaching Assistant",
      logoUrl: "/iitp_logo.png",
      start: "May 2024",
      end: "Ongoing",
      description:
        "Conducting Labs and Classes of BTech Student in Programming Language and DBMS Course. Setting up their Exam Papers, Quizzes and evalution throughout curriculum.",

    },
    {
      company: "Studio Morethanthat",
      // badges: [],
      href: "https://www.studiomorethanthat.com/",
      location: "Remote (Prague, Czech Republic UK)",
      title: "Software Engineer (Prague, Czech Republic UK)",
      logoUrl: "/smtt_logo.png",
      start: "July 2022",
      end: "July 2023",
      description:
        "Developed responsive MPAs using React.js, Redux, and Tailwind CSS, translating Figma designs into pixel-perfect implementations. Optimized web applications for performance, SEO, and Core Web Vitals, while integrating. RESTful APIs and GraphQL endpoints. Implemented CI/CD pipelines.Achieved a 40% improvement in site loading times through lazy loading and code splitting techniques.",
    },
    {
      company: "HCL Technologies",
      href: "https://www.hcltech.com/",
      // badges: [],
      location: "Noida, India",
      title: " Graduate Engineer Trainee (Noida, India)",
      logoUrl: "/hcl_logo.jpg",
      start: "March 2022",
      end: "June 2022",
      description:
        "Automated data extraction and processing pipelines using Python scripts, improving operational efficiency by 25%. Conducted unit testing and debugging on REST API integration projects, ensuring 100% seamless data flow across systems.",
    },
    {
      company: "Studio Morethanthat",
      href: "https://www.studiomorethanthat.com/",
      location: "Remote (Prague, Czech Republic UK)",
      title: " Web Designer & Developer Intern (Prague, Czech Republic UK)",
      logoUrl: "/smtt_logo.png",
      start: "June 2021",
      end: "November 2021",
      description:
        "Designed and developed responsive web interfaces using HTML,CSS,Bootstrap, CharkaUI, AJAX, Javascript andJQuery. Deployed websites on Hostinger, optimized for SEO and performance, and integrated APIs, ensuring scalability and functionality.",
    },
    {
      company: "Institute of Nurturing Quriosities X Keystone",
      href: "https://www.linkedin.com/company/ieee-adgitm-student-branch/ ",
      // badges: [],
      location: "New Delhi, India",
      title: "Content Developer Intern (New Delhi, India)",
      logoUrl: "/sunali_intern.jpg",
      start: "Janaury 2021",
      end: "Janaury 2022",
      description:
        "Curated study content for Physics, Chemistry and Mathematics (PCM) from Class 12 to JEE level, while managing app process and workflow to streamline learning and preparation.",
    },
    {
      company: "IEEE ADGITM",
      href: "https://www.linkedin.com/company/ieee-adgitm-student-branch/ ",
      // badges: [],
      location: "New Delhi, India",
      title: "Chairperson IEEE Computer Society",
      logoUrl: "/ieee_logo.png",
      start: "Janaury 2021",
      end: "Janaury 2022",
      description:
        " IEEE Computer Society at IEEE ADGITM : Organized over 10 technical events and workshops, engaging more than 500 participants, and improved event feedback scores by 35%.",
    },
    {
      company: "Harvard Conference",
      href: "https://www.hpair.org/",
      // badges: [],
      location: "Remote",
      title: "Gold Delegate (Selection Rate 2-3%)",
      logoUrl: "/hpair_logo.jpg",
      start: "August 2021",
      end: "August 2022",
      description:
        "The Harvard Project for Asian and International Relations (HPAIR) is a student-led organization that hosts conferences to discuss international issues in Asia. Selected among 300 Delegates with total participants of more than 50,000+ student across globe.",
    },

  ],
  education: [
    {
      school: "Indian Institute of Technology, Patna",
      href: "https://www.iitp.ac.in/",
      degree: "M.Tech Artificial Intelligence (Percentage: 84.5%)",
      logoUrl: "/iitp_logo.png",
      start: "August 2023",
      end: "Ongoing",
      description:
        "The Harvard Project for Asian and International Relations (HPAIR) is a student-led organization that hosts conferences to discuss international issues in Asia. Selected among 300 Delegates with total participants of more than 50,000+ student across globe.",
    },
    {
      school: "Guru Gobind Singh Indraprastha University, New Delhi",
      href: "http://www.ipu.ac.in/",
      degree: "B.Tech Computer Science & Engineering (CPI: 8.41)",
      logoUrl: "/ggispu_logo.png",
      start: "Aug 2018",
      end: "July 2022",
    },
    {
      school: "DAV Public School",
      href: "https://davpsbaghpat.org/",
      degree: "Higher Secondary Education (Percentage: 86.4%)",
      logoUrl: "/dav_logo.jpg",
      start: "2016",
      end: "2017",
    },
    {
      school: "DAV Public School",
      href: "https://davpsbaghpat.org/",
      degree: "Secondary Education (CGPA: 9.8)",
      logoUrl: "/dav_logo.jpg",
      start: "2014",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Efficient Traffic Flow Prediction ",
      href: "https://github.com/dillionverma/portfolio",
      dates: "",
      active: true,
      description:
        "Developed a GNN-based spatio-temporal with knowledge distillation forecasting system, increasing traffic flow prediction accuracy by 15% and enabling better urban traffic management. Enhanced prediction accuracy using contrastive learning, improving feature fusion for complex traffic data by 25%.",
      technologies: [
        "GNN",
        "Knowledge Distillation",
        "Spatio-Temporal",
        "Deep Learning",
        "PEMS-Dataset",
        "Constrastive Learning",
        "Transfer Learning",
        
      ],
      links: [
        {
          type: "DL Project",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/traffic_prediction.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Cross-Domain Recommendations",
      // href: "https://magicui.design",
      dates: "",
      active: true,
      description:
        "Designed a hybrid recommendation system using GNNs and LLMs to solve Cold-Start in Cross-Domain Recommendations, improving prediction accuracy in sparse data scenarios by 20%. Addressed cold-start problems, enhancing multi-modal embedding techniques by 30%",
      technologies: [
        "LLMs",
        "Gpt",
        "LLama",
        "GCN",
        "Amazon Multi Domain Dataset",
        "Embeddings",
      
      ],
      links: [
        {
          type: "LLM Project",
          // href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          // href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/llm_project.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Social Media Web App",
      // href: "https://llm.report",
      dates: "",
      active: true,
      description:
        "Developed a feature-rich social media app using the MERN stack, including chat features, file sharing, and group conversations, providing seamless functionality and scalability. Integrated FaceAPI and FaceNet CNN for facial recognition, enhancing tagging accuracy by 30%, and utilized Twilio for real-time messaging.",
      technologies: [
        "React",
        "Express",
        "Mongo",
        "Nodejs",
        "TailwindCSS",
        "Twilio",
        "FaceNET",
        "Stream.io",
        "APIs",
      ],
      links: [
        {
          type: "Website",
          // href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          // href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/social_app.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Class Management Apps ",
      // href: "https://automatic.chat",
      dates: "",
      active: true,
      description:
        "Built apps enabling assignment management, video/audio sharing, and real-time teacher insights, improving remote learning experiences during COVID-19. Achieved a 20% increase in student engagement and streamlined remote teaching processes.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
        "Authentication",
        "DartUI",
        "APIs",
       
      ],
      links: [
        {
          type: "Mobile App",
          // href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/flutter.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Medical-NLP-Web-App",
      // href: "https://automatic.chat",
      dates: "",
      active: true,
      description:
        "This project focuses on developing an AI-based system that converts medical transcripts into structured SOAP (Subjective, Objective, Assessment, Plan) notes. By leveraging Natural Language Processing (NLP) techniques, the model extracts key medical details such as symptoms, diagnoses, treatments, and prognoses from physician-patient conversations.",
      technologies: [
        "NLP",
        "Streamlit",
        "NER",
        "Sentiment Analysis",
        "SOAP formatting",
       
      ],
      links: [
        {
          type: "NLP Project",
          // href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/medical.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Texudio App",
      // href: "https://automatic.chat",
      dates: "",
      active: true,
      description:
        "Multilingual Audio-to-Text Transcription using OpenAI Whisper. A simple web app that converts .mp3 audio files into accurate text transcriptions using OpenAI's Whisper model, all through a clean and responsive Streamlit interface.",
      technologies: [
        "Openai-whisper",
        "Streamlit",
        "torch",
        "Ffmpeg",
   
       
      ],
      links: [
        {
          type: "NLP Project",
          // href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project/texudio.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Guest Speaker at IEEE ADGITM",
      dates: "SPEAKER",
      location: "October 2023",
      description:
        "Hosted a workshop on Full Stack Development and Career Guidance at IEEE ADGITM, attended by over 150 students, receiving a 90% positive feedback score.",
      image:
        "/ieee_logo.png",
      mlh: "https://www.kaggle.com/shlokkaushik",
      links: [
        {
          title: "Chairperson IEEE Computer Society",

          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1ndFRwDE8c18ntyDTPfK8w1USAAT2kcFG/view?usp=sharing",
        },
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1kxWkFyv40nBN5pavNvVZ-GX0v4ZEEZxS/view?usp=sharing",
        },

      ],
    },
    {
      title: "Binance Build for Bharat Hackathon",
      dates: "ONLINE",
      location: "January 2022",
      description:
        "Top 50 Startup Ideations showcasing solutions for rural development challenges.",
      image:
        "/binance_logo.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.binance.com/en-IN/blog/communitybuild-for-bharat-hackathon-results--finalists-421499824684901566",
        },
      ],
    },
    {
      title: "Featured in Hindustan Times & Dainik Jagran",
      dates: "INDIA",
      location: "August 2020",
      description:
        "Featured in Hindustan Times and Dainik Jagran for developing a mobile application under the Local for Vocal initiative, showcasing innovation and support for local entrepreneurship.",
      icon: "public",
      image:
        "/hindustan_logo.webp",
      links: [
        {
          title: "Newspaper Articles",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/10LVpArZmZOEuGvRFPXOz7hap7WqTnr6r/view",
        },
      ],
    },
    {
      title: "Harvard Project for Asian & International Relations Conference",
      dates: "CAMBRIDGE, MA",
      location: "August 2021",
      description:
        "Selected for the Harvard Project for Asian and International Relations (HPAIR) Conference, engaging in global discussions on economics, policy, and innovation.",
      image:
        "/hpair_logo.jpg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1iwyekmilzER2vkUj4BQo3hsGFlAGpkAp/view",
        },
        {
          title: "Letter of Recommendation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1lI5YLg-Fz3URWKcLctWBVnTNzBfmsIaT/view",
        },
      ],
    },

    {
      title: "Harvard US-India Initiative",
      dates: "VIRTUAL",
      location: "Feburary 2021",
      description:
        "The conference aimed to provide participants with the opportunity to learn from leaders and connect with future leaders to understand how they can make an impact on the world, focusing on India's dynamic diversity and growing global influence. ",
      image:
        "/huii_logo.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.huii.in/",
        },
        
      ],
    },
    
    {
      title: "Computer Society of India",
      dates: "ADGITM, NEW DELHI",
      location: "August 2021 - June 2022",
      description:
        "Computer Society of India is a non-profit professional meet to exchange views and information learn and share ideas. CSI also encourages and assists professionals to maintain integrity and competence of the profession and fosters a sense of partnership amongst members.",
      image:
        "/csi_logo.png",
      
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://csiindia.org/",
        },
        
      ],
    },

    {
      title: "Computer Society KSIJIT",
      dates: "ONLINE",
      location: "October 2021",
      description:
        "Event Ambassador for the React Project Development Bootcamp organised by Computer Society of India, Student Chapter. ",
      image:
        "/kjsit_logo.png",
      
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/19xDl7xGPXHYKXO5i1ouakLIBU__P14dK/view?usp=sharing",
        },
        
      ],
    },
    {
      title: "NASA Astronomy Olympiad",
      dates: "ONLINE",
      location: "",
      description:
        "Earned top honors as a winner in the prestigious NASA Astronomy Olympiad for exceptional capabilities to analyze complex astronomical data and solve advanced problems related to astrophysical phenomena.",
      image:
        "/nasa_logo.jpeg",
      
      links: [
        
        
      ],
    },
    {
      title: "TechFest IIT Bombay",
      dates: "ONLINE",
      location: "April 2021",
      description:
        "Served as an Event Ambassador at IIT Bombay Tech Fest, promoting and managing event engagement for one of India's largest technology festivals. ",
      image:
        "/techfest_logo.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://techfest.org/",
        },
      ],
    },
    
  ],
} as const;

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
    "Completed by Btech in CSE'22, Currently at IIT Patna pursuing my MTech in Artificial Intelligence, Build Apps that got recoginzed in 3 Newspaper in 2020, served as a CS Chairperson at IEEE ADGITM,  ● NominatedBinance Build for Bharat Hackathon, Top 114 Startup Ideations (2022), Attend HPAIR Conference among 300 delegates across globe, ",
  avatarUrl: "/shlok.jpg",
  skills: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Pytorch",
    "GenAI",
    "LLMs",
    "Pandas",
    "Numpy",
    "Matpolio",
    "Statistics",
    "Mathematics",
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
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
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
        "● Attention-Based Spatial-Temporal Graph Networks for Traffic Flow Prediction Exploring GNN-based models for spatio-temporal forecasting to improve traffic flow prediction. Utilizing contrastive learning techniques to enhance feature fusion and capture complex traffic patterns." ,

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
        "Conducting Labs and Classes of BTech Student in Programming Language and DBMS Course. Setting up their Exam Papers, Quizzes and evalution throughout curriculum." ,

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
      degree: "M.Tech Artificial Intelligence (Percentage: 83.9%)",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
      title: "",
      dates: "LLM & GNN",
      location: "IIT Patna",
      description:
        "Designed a hybrid recommendation system using GNNs and LLMs, improving prediction accuracy in sparse data scenarios by 20%. Addressed cold-start problems, enhancing multi-modal embedding techniques by 30%.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      links: [
        
      ],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for peoplexc, vdldkfd shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circulcvcvcxvar Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

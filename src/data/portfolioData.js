export const personal = {
  name: 'Aman Raja',
  role: 'Software Engineer',
  tagline: 'Ambitious software engineer focused on full-stack development, support operations, and practical problem solving.',
  email: 'amanraja424@gmail.com',
  phone: '+91-9366690599',
  location: 'New Delhi, India',
  github: 'https://github.com/amanraja0',
  linkedin: 'https://linkedin.com/in/amanraja0',
  resume: '/resume.pdf',
  summary:
    'Master\'s-level computer science graduate with experience in full-stack development, technical support, APIs, databases, and systems that prioritize maintainability and clear user outcomes.',
};

export const skills = [
  {
    category: 'Programming Languages',
    icon: '💻',
    items: [
      { name: 'Java', level: 'Advanced' },
      { name: 'C++', level: 'Advanced' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3', level: 'Advanced' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙️',
    items: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'TailwindCSS', level: 'Intermediate' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Vue.js', level: 'Intermediate' },
      { name: 'PrismaORM', level: 'Intermediate' },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'Oracle SQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'Cloud & Tools',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 'Expert' },
      { name: 'GitHub', level: 'Expert' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'AWS', level: 'Familiar' },
      { name: 'GCP', level: 'Familiar' },
      { name: 'Render', level: 'Familiar' },
      { name: 'Jira', level: 'Intermediate' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Excel', level: 'Intermediate' },
    ],
  },
  {
    category: 'Core Concepts',
    icon: '🧠',
    items: [
      { name: 'DSA', level: 'Advanced' },
      { name: 'OOP', level: 'Advanced' },
      { name: 'Linux', level: 'Intermediate' },
      { name: 'SDLC', level: 'Advanced' },
      { name: 'SOLID', level: 'Intermediate' },
      { name: 'Microservices', level: 'Intermediate' },
      { name: 'Debugging', level: 'Advanced' },
      { name: 'SQL Query Optimization', level: 'Advanced' },
    ],
  },
];

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'Extramarks Education Pvt. Ltd.',
    duration: 'Sep 2025 – Feb 2026',
    description:
    'Greater Noida, Uttar Pradesh — Created responsive frontend modules for the Extramarks Smart Scholar portal using React.js, ensuring stable rendering for 70,000+ users. Integrated core RESTful APIs with Node.js and resolved critical UI bugs, reducing data loading lag by 15%.',
  },
  {
    role: 'Full-Stack Web Development Intern',
    company: 'Prodigy InfoTech',
    duration: 'Jun 2025 – Jul 2025',
    description:
      'Remote — Built a responsive Dribbble clone utilizing React, Vue, and Tailwind CSS to construct clean, interactive user interfaces. Implemented dynamic content delivery using JavaScript and resolved cross-browser layout glitches, improving page rendering speed by 20%.',
  },
];

export const projects = [
  {
    title: 'StockForge (Inventory Platform)',
    description:
      'Designed a fulfillment backend using Node.js and Prisma ORM, implementing atomic stock deduction logic to ensure accurate, real-time inventory tracking. Created a secure React.js administrative dashboard featuring low-stock alerts, order-status pipelines, and JWT role-based access controls.',
    tech: ['Node.js', 'Express', 'React.js', 'MySQL', 'PrismaORM'],
    github: '#',
    demo: '#',
  },
  {
    title: 'ExpenseIQ (Smart Expense Tracker)',
    description:
      'Developed a secure expense-tracking platform using Spring Boot and PostgreSQL, protecting 10+ API endpoints with JWT authentication. Designed a React.js dashboard with dynamic charts for automated expense categorization and smart spending insights.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'React.js'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Interactive Algorithm Visualizer',
    description:
      'Built a web application using React.js and Tailwind CSS to animate Bubble, Merge, and QuickSort algorithms step-by-step. Implemented JavaScript state controls allowing users to adjust sorting speed, pause animations, and generate dynamic data arrays.',
    tech: ['React.js', 'TailwindCSS', 'JavaScript', 'DSA'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Dribble Clone (UI/UX Project)',
    description:
      'Developed a responsive Dribbble clone utilizing React, Vue, and Tailwind CSS to construct clean, interactive user interfaces. Implemented dynamic content delivery using JavaScript and resolved cross-browser layout glitches, improving page rendering speed by 20%.',
    tech: ['React.js', 'TailwindCSS', 'JavaScript'],
    github: '#',
    demo: '#',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Galgotia College of Engineering and Technology',
    duration: '2023 – 2025',
    description: "Master's degree in computer science focused on software engineering and cloud computing. Percentage: 70.06%",
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Lnct University',
    duration: '2019 – 2022',
    description: 'Core coursework in programming, databases, web technologies, and object-oriented concepts. Percentage: 84%',
  },
];

export const achievements = [
  {
    title: 'Hackathon Contributor',
    description: 'Volunteered in a hackathon during BCA, led 3+ teams, helped organize logistics for 100+ participants, and contributed to an award-winning solution.',
  },
  {
    title: 'NCC B Certificate',
    description: 'Earned NCC B Certificate and served as leader for 100+ students, demonstrating leadership, teamwork, and organization.',
  },
];

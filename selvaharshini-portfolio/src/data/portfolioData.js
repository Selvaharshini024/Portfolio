// All portfolio content lives here. Edit this file to update the site —
// components read from these objects rather than hard-coding text.

export const profile = {
  name: 'Selvaharshini C',
  firstName: 'Selvaharshini',
  role: 'Computer Science Engineering Student | Software Developer',
  tagline:
    'Building practical software solutions through web development, full-stack technologies, and emerging AI technologies.',
  email: 'selvaharshini2005@gmail.com',
  phone: '+91 8098110386',
  linkedin: 'https://www.linkedin.com/in/selvaharshini06',
  github: 'https://github.com/Selvaharshini024',
  photoUrl: 'https://drive.google.com/thumbnail?id=1zR27v-b8m4BKEqxjoHZ-iA7f3s7KXaZE&sz=w800',
  resumePath: '/resume/Selvaharshini_C_Resume.pdf',
  about: [
    "I'm a final-year Computer Science Engineering student with a strong foundation in full-stack web development and a growing interest in artificial intelligence and data-related technologies.",
    'Over the past few years I have worked across the MERN stack, building applications that handle real problems — project coordination, e-commerce flows, and healthcare record-keeping — while paying close attention to clean REST API design and database structure.',
    "I learn quickly, enjoy breaking down ambiguous problems into working systems, and I'm looking for a software engineering role where I can keep building things that are actually used.",
  ],
}

export const education = [
  {
    degree: 'Bachelor of Engineering, Computer Science',
    institution: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
    duration: '2023 – 2027',
    detail: 'CGPA: 9.2 / 10',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'RKR Gnanodhaya Matriculation Higher Secondary School, Kodingiam',
    duration: 'April 2023',
    detail: '96.5%',
  },
]

export const skillGroups = [
  {
    title: 'Programming',
    skills: ['Java', 'Python'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Mongoose'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Visual Studio Code', 'Microsoft Excel', 'WordPress', 'MongoDB Atlas'],
  },
  {
    title: 'Other Technologies',
    skills: ['Blynk', 'Arduino IDE', 'IoT'],
  },
  {
    title: 'Soft Skills',
    skills: ['Critical Thinking', 'Decision Making', 'Collaboration', 'Learning Agility'],
  },
]

// category is used for the project filter: 'fullstack' | 'web' | 'iot'
export const projects = [
  {
    id: 'projectflow',
    name: 'ProjectFlow',
    subtitle: 'Full-Stack Project Management Tool',
    date: 'June 2026',
    category: 'fullstack',
    description:
      'A collaborative project management platform enabling efficient project and task management through REST APIs and full CRUD operations.',
    features: [
      'Task and project CRUD via REST APIs',
      'Real-time updates for collaborative editing',
      'Structured MongoDB schema with Mongoose',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Socket.io'],
    github: 'https://github.com/Selvaharshini024/CodeAlpha_ProjectManagementTool',
    demo: null,
  },
  {
    id: 'shopwave',
    name: 'ShopWave',
    subtitle: 'Full-Stack E-Commerce Application',
    date: 'June 2026',
    category: 'fullstack',
    description:
      'A full-stack e-commerce application supporting product browsing, shopping cart, checkout, and order management through REST APIs and database integration.',
    features: [
      'Product catalog and shopping cart flow',
      'Secure authentication with JWT and bcrypt',
      'Order management backed by MongoDB',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt'],
    github: 'https://github.com/Selvaharshini024/CodeAlpha_ECommerceStore',
    demo: null,
  },
  {
    id: 'medicare-pro',
    name: 'MediCare Pro',
    subtitle: 'Complete Healthcare Management System',
    date: 'November 2025',
    category: 'fullstack',
    description:
      'A scalable healthcare management system enabling appointment scheduling, secure medical record management, and role-based dashboards for patients, doctors, and administrators.',
    features: [
      'Role-based dashboards for three user types',
      'Appointment scheduling workflow',
      'Secure medical record management',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS'],
    github: null,
    demo: null,
  },
  {
    id: 'restaurant-menu',
    name: 'Static Restaurant Menu Card',
    subtitle: 'Responsive Menu Layout',
    date: 'June 2025',
    category: 'web',
    description:
      'A responsive static restaurant menu card with a clean, visually appealing layout, emphasizing readability and user-friendly design.',
    features: [
      'Fully responsive layout across devices',
      'Typography-led, readable menu presentation',
    ],
    stack: ['HTML', 'CSS'],
    github: 'https://github.com/Selvaharshini024/Delicious_Bites-Restaurant_Menu',
    demo: null,
  },
  {
    id: 'smart-door-lock',
    name: 'Smart Door Lock System',
    subtitle: 'ESP32 and Blynk IoT Project',
    date: 'May 2025',
    category: 'iot',
    description:
      'An IoT-based smart door lock system enabling secure remote access and real-time lock status monitoring through a smartphone.',
    features: [
      'Remote lock/unlock via the Blynk app',
      'Real-time lock status monitoring',
      'ESP32 firmware written in Embedded C',
    ],
    stack: ['ESP32', 'Blynk', 'Arduino IDE', 'Embedded C', 'IoT'],
    github: null,
    demo: null,
  },
]

export const experience = [
  {
    role: 'Full Stack Development Intern',
    company: 'CodeAlpha',
    duration: 'May 2026 – June 2026',
    description:
      'Contributed to the development of a full-stack e-commerce application, gaining practical experience across frontend, backend, database integration, and RESTful APIs.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas', 'REST API', 'VS Code'],
    certificate: 'https://drive.google.com/file/d/1sXj2_9AfGLu5-4kugoSCi5hPw1nFTOSt/view?usp=drivesdk',
  },
  {
    role: 'Web Development Intern',
    company: 'KHO Social LLP, Coimbatore',
    duration: 'June 2025',
    description:
      'Contributed to the design and enhancement of responsive websites, gaining practical experience in website structuring, content management, and improving overall user experience.',
    stack: ['HTML', 'CSS', 'WordPress', 'VS Code'],
    certificate: 'https://drive.google.com/file/d/1npJEFmjgatsUAJLYbuoCWWXU8yV_M4Fx/view?usp=drivesdk',
  },
]

export const certifications = [
  {
    name: 'Quantum Computing & Intro to Quantum Machine Learning',
    org: 'Udemy',
    date: 'September 2026',
    link: 'https://drive.google.com/file/d/1JXAruNmIGIssTYAq3HiYieU6alNSJW9D/view?usp=drivesdk',
  },
  {
    name: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    org: 'AWS Academy',
    date: 'August 2026',
    link: 'https://drive.google.com/file/d/1Nh7eV9vVIpnrzhcoAfTvQ79x7fF2470h/view?usp=drivesdk',
  },
  {
    name: 'TCS iON National Qualifier Test (NQT)',
    org: 'TCS iON',
    date: 'July 2026',
    link: 'https://drive.google.com/file/d/1cAxoDXLDEvfrl3JCzsLgcxL0sy7QsA3f/view?usp=drivesdk',
  },
  {
    name: 'Introduction to Artificial Intelligence',
    org: 'Infosys Springboard',
    date: 'April 2026',
    link: 'https://drive.google.com/file/d/12JXcq_F0wiViOFqrqkFXt2bPhqIAimQ5/view?usp=drivesdk',
  },
  {
    name: 'Introduction to Data Science',
    org: 'Infosys Springboard',
    date: 'April 2026',
    link: 'https://drive.google.com/file/d/1-k8fKjI9poT1ur8o0BlWfsY4ljC45wdv/view?usp=drivesdk',
  },
  {
    name: 'Cybersecurity Essentials',
    org: 'Cisco Networking Academy',
    date: 'July 2025',
    link: 'https://drive.google.com/file/d/1CpzoGIvHpz0OtGXMXvkSE61wU4HX4ZJB/view?usp=drivesdk',
  },
  {
    name: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    date: 'July 2025',
    link: 'https://drive.google.com/file/d/1I3R6Qhu8YM_IQ8vjchazH2drVB48p-z4/view?usp=drivesdk',
  },
  {
    name: 'Generative AI',
    org: 'GUVI',
    date: 'September 2024',
    link: 'https://drive.google.com/file/d/1YaZoK95KPvTvH8dH_5ZQAXAwsp4OAPqT/view?usp=drivesdk',
  },
  {
    name: 'LinguaSkill',
    org: 'Cambridge English / Pearson',
    date: 'May 2024',
    link: 'https://drive.google.com/file/d/1ke-ccRU0qUTcHywtGa7UMHhLoMzXHTOO/view?usp=drivesdk',
  },
  {
    name: 'Introduction to Programming in C',
    org: 'NPTEL',
    date: 'March 2024',
    link: 'https://drive.google.com/file/d/1N9B8egKnZYgSaZY5svz_nmoalAlhIEZr/view?usp=drivesdk',
  },
]

export const achievements = [
  {
    title: 'Arutchelvar Vidya Sakthi Scholarship',
    description: 'A 100% merit scholarship awarded for excellent academic performance.',
  },
  {
    title: 'Hindi Degree Certificate',
    description: 'Earned from Dhakshina Bharat Hindi Prachar Sabha.',
  },
]

export const languages = ['Tamil', 'English', 'Hindi']

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Languages', href: '#languages' },
  { label: 'Contact', href: '#contact' },
]

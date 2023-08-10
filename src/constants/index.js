import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  youtube,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  instagram,
  linkedin,
  premierpro,
  photoshop
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Powerlifter",
    icon: mobile,
  },
  {
    title: "Nutrition Expert",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "premierpro",
    icon: premierpro,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photoshop,
  }
];

const experiences = [
  {
    title: "Content Creator",
    company_name: "Youtube",
    icon: youtube,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
      "I develop youtube Vlogs and Shorts related to fitness.",
      "Each bite-sized video is packed with effective workouts, expert tips, and the positive vibes we all need to conquer our goals together.",
      "Comment, share, and tag your workout buddies—it's all about the power of unity.",
    ],
  },
  {
    title: "Not Your Regular Influencer",
    company_name: "Instagram",
    icon: instagram,
    iconBg: "#E6DEDD",
    // date: "Jan 2021 - Feb 2022",
    points: [
      "From fashion to travel, self-care to inspiration, my Instagram is your window into a world of positivity.",
      "Each post is a snapshot of life's beauty and a celebration of my journey.",
      "Why the love affair with Reels? Because it's more than just a trend—it's an art form that lets us pack a punch of creativity in just a few seconds."
    ],
  },
  {
    title: "Software Developer",
    company_name: "Linkedin",
    icon: linkedin,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "If you have a project, an idea, or just want to geek out over tech, let's connect!",
      "From setting up the store to handling asynchronous actions, I can guide you through the crucial aspects of modern web development.",
      "I've developed robust APIs and microservices that power the magic you see on the frontend."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

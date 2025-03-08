import { FaIndustry } from "react-icons/fa";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about_us" },
  { name: "Our Projects", link: "/our_projects" },
  { name: "Contact Us", link: "/contact_us" },
];

import {
  FaBuilding,
  FaHome,
  FaLightbulb,
  FaHardHat,
  FaChartLine,
  FaEye,
  FaMoneyBill,
  FaTools,
} from "react-icons/fa";

export const landingPageHeader =
  "We are committed to every client and team member, making extraordinary projects a reality.";

export const subHeroContent = {
  heading: "With numerous ongoing projects",
  subHeading: "Skilled engineers and top-tier equipment",
  buttonText: "Contact Us",
  text: "We are fully equipped with the best human resources and machinery to deliver exceptional service anywhere in the world.",
  attr: [
    { value: "83", title: "Completed Projects" },
    { value: "200", title: "Employees" },
    { value: "20", title: "Qualified Architects" },
    { value: "25", title: "Global Recognitions" },
  ],
};

export const HowWeWork = {
  title: "How We Work",
  heading: "Discover Our Client Collaboration Process",
  text: "We’ve partnered with various companies on remarkable projects. Let us bring your visionary ideas to life. Yes, We Can.",
  buttonText: "Learn More",
};

export const ourServices = {
  title: "Our Services",
  heading: "Explore Our Comprehensive Services",
  subHeading:
    "We handle the planning, so you can focus on creativity during implementation.",
  buttonText: "View All Services",
  services: [
    {
      icon: <FaBuilding />,
      heading: "Architecture Design",
      subHeading:
        "We craft unique architectural designs. Our architects are globally recognized and award-winning.",
    },
    {
      icon: <FaHome />,
      heading: "Interior Design",
      subHeading:
        "From models to installations, our projects are of the highest quality, ensuring award-winning results.",
    },
    {
      icon: <FaLightbulb />,
      heading: "Innovation and Planning",
      subHeading:
        "We utilize cutting-edge technology to plan and execute your project seamlessly from start to finish.",
    },
    {
      icon: <FaHardHat />,
      heading: "Construction and Building",
      subHeading:
        "Our construction projects are executed with precision, ensuring top-tier quality and recognition.",
    },
  ],
};

export const workProcess = {
  heading: "Our Work Process",
  processes: [
    {
      icon: <FaChartLine />,
      heading: "Planning",
      text: "We start by creating a detailed and efficient plan for your project.",
    },
    {
      icon: <FaEye />,
      heading: "Supervision",
      text: "We oversee every aspect of your project from inception to completion.",
    },
    {
      icon: <FaMoneyBill />,
      heading: "Planning & Budget",
      text: "We ensure the plan and budget are meticulously followed and implemented.",
    },
    {
      icon: <FaTools />,
      heading: "Building",
      text: "Construction is carried out in a fully integrated and efficient manner.",
    },
  ],
};

export const imageSlide = [
  "/assets/images/img (1).jpg",
  "/assets/images/img (2).jpg",
  "/assets/images/img (3).jpg",
  "/assets/images/img (4).jpg",
  "/assets/images/img (5).jpg",
  "/assets/images/img (6).jpg",
  "/assets/images/img (7).jpg",
  "/assets/images/img (8).jpg",
  "/assets/images/img (9).jpg",
  "/assets/images/img (10).jpg",
];

export const contactUs = {
  title: "Contact Us",
  logo: "/assets/svg/iwlgo2.svg",
  CompanyName: "Emmanuel Woods",
  contactInfo: [
    { title: "Address", info: "Block C National Library Estate Ikorody Lagos" },
    { title: "Email", info: "info@emmanuelwoods.com" },
    { title: "Phone", info: "+2349158439214" },
  ],
  text: "Feel free to call us anytime—we aim to respond to all inquiries within 24 hours.",
};

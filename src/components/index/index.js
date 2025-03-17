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

export // Company data
const aboutUs = {
  companyName: "Emmanuelwood Integrated Company Limited",
  AboutCardHeader: {
    heading: "About Us",
    achievments: [
      { value: 20, text: "Years of experience" },
      { value: 32, text: "Quality Design" },
      { value: 1500, text: "Satisfied Clients around the world" },
    ],
    subheading: "learn more",
  },
  introduction: {
    title: "Introduction",
    text: "Emmanuelwood Integrated Company Limited is a premier construction and infrastructure development company dedicated to transforming visions into reality. Since our inception, we have been at the forefront of delivering world-class construction solutions, setting the standard for excellence, innovation, and sustainability in the industry.",
  },
  headquarters: "Lagos, Nigeria", // Added placeholder headquarters
  allTexts: [
    {
      section: "Mission",
      content: [
        {
          key: "Mission",
          text: "To deliver innovative and sustainable construction solutions that create value for our clients, empower communities, and shape a better future.",
        },
        {
          key: "Vision",
          text: "To become a globally recognized leader in the construction industry, known for excellence, integrity, and transformative impact.",
        },
      ],
    },
    {
      section: "Core Values",
      content: [
        {
          key: "Integrity",
          text: "We uphold honesty, transparency, and ethical practices in every project and interaction.",
        },
        {
          key: "Excellence",
          text: "We are committed to achieving the highest standards in every aspect of our work.",
        },
        {
          key: "Customer Satisfaction",
          text: "We prioritize the needs and expectations of our clients, ensuring their complete satisfaction at every stage of the project.",
        },
        {
          key: "Innovation",
          text: "We embrace creativity and innovation to provide cutting-edge solutions to complex construction challenges.",
        },
        {
          key: "Sustainability",
          text: "We promote eco-friendly construction practices to ensure a lasting positive impact on the environment.",
        },
      ],
    },
    {
      section: "Why Choose Us",
      content: [
        {
          key: "Why Choose Us",
          items: [
            "Unmatched Quality: We maintain strict quality control standards and use premium materials to ensure every project meets and exceeds industry benchmarks.",
            "Timely Delivery: Our efficient project management processes and proactive communication enable us to complete projects on schedule.",
            "Client-Centric Approach: We place our clients at the heart of everything we do, offering personalized solutions that align with their goals and vision.",
            "Innovation & Technology: We leverage cutting-edge technologies, modern equipment, and advanced construction methodologies to drive innovation and efficiency.",
            "Sustainability: Our commitment to environmentally friendly practices ensures that we contribute positively to the communities and ecosystems we operate in.",
          ],
        },
      ],
    },
    {
      section: "Services",
      content: [
        {
          key: "Our Services",
          items: [
            "Residential Construction: Building elegant, durable, and functional homes tailored to meet the unique lifestyles of our clients.",
            "Commercial Construction: Developing cutting-edge office spaces, retail complexes, and business facilities that inspire productivity and success.",
            "Industrial Construction: Designing and constructing warehouses, factories, and other industrial facilities to meet the highest operational standards.",
            "Infrastructure Development: Delivering roads, bridges, and public infrastructure that support growth and connectivity.",
            "Renovation & Remodeling: Upgrading existing structures to meet modern standards of aesthetics and functionality.",
            "Project Management: Providing end-to-end project oversight, ensuring timely delivery, cost efficiency, and uncompromising quality.",
          ],
        },
      ],
    },
    {
      section: "Team",
      content: [
        {
          key: "Our Team",
          text: "At the core of our success is a team of highly skilled professionals, engineers, architects, project managers, and craftsmen who bring their vast experience and unwavering dedication to every project. We pride ourselves on fostering a culture of collaboration, integrity, and excellence, which drives us to consistently exceed our clients' expectations.",
        },
      ],
    },
    {
      section: "Legacy",
      content: [
        {
          key: "Our Legacy",
          text: "Over the years, Emmanuelwood Integrated Company Limited has successfully completed numerous landmark projects that stand as a testament to our capabilities and dedication. We take immense pride in being a part of our clients' success stories, helping them build homes, businesses, and infrastructure that endure for generations.",
        },
      ],
    },
  ],
};

 
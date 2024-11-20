import zenlist from "./media/zenlist.png";
import rebellion from "./media/rebellion.png";

export enum ECodeTool {
  HTML = "HTML",
  CSS = "CSS",
  JAVASCRIPT = "Javascript",
  REACT = "React",
  REACT_NATIVE = "React Native",
  GRAPHQL = "Graphql",
  PYTHON = "Python",
  VUE = "Vue",
}

export interface IBulletPoint {
  heading?: string;
  details?: string;
}

export interface IPortfolioItem {
  title: string;
  url: string;
  mainImage: string;
  description?: string;
  bulletPoints?: IBulletPoint[];
  tools?: ECodeTool[];
}

export const portfolioData: IPortfolioItem[] = [
  {
    title: "Founders Network",
    mainImage: "",
    url: "https://foundersnetwork.com/",
    description:
      "Founders Network is a LinkedIn-style social platform designed to connect founders with one another and with investors, helping align strategic goals and secure funding for the next phase of growth.",
    bulletPoints: [
      {
        heading: "Working Full Stack: ",
        details:
          "Rebuilt the frontend to standardize coding conventions and wrote new endpoints in the python API to support new features and optimize performance.",
      },
      {
        heading: "Profile Settings Overhaul: ",
        details:
          "Designed and implemented a new profile settings section, following UX patterns from AirBnB and LinkedIn, addressing user frustrations with a long, error-prone form by simplifying the experience and adding meaningful error messaging.",
      },
      {
        heading: "State Management Optimization: ",
        details:
          "Replaced a complex Redux-based data management system with React Query, streamlining error handling, loading states, and data caching. This shift also enabled efficient optimistic updates, improving app responsiveness.",
      },
      {
        heading: "Real-Time Chat: ",
        details:
          " Implemented WebSockets to enable real-time chat messaging, typing indicators, and read receipts, eliminating the need for users to refresh the page to see new messages.",
      },
      {
        heading: "Billing System Revamp: ",
        details:
          "Led the full-stack implementation of a new billing form using the Stripe API, replacing a cumbersome legacy solution for a more seamless payment experience.",
      },
      {
        heading: "Membership Applications: ",
        details:
          "Replaced a cumbersome 3 page membership application form with a streamlined single page form with clear indication of required fields and error handling for duplicate applications to reduce incomplete applications.",
      },
    ],
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
      ECodeTool.GRAPHQL,
      ECodeTool.PYTHON,
    ],
  },
  {
    title: "Rebellion Defense",
    url: "https://rebelliondefense.com/",
    mainImage: rebellion,
    description:
      "Rebellion Defense specializes in AI driven data visualization solutions for the US military.",
    bulletPoints: [
      {
        heading: "Developed Full-stack Solutions: ",
        details:
          "Used Next.js and Python to create a weapons target assignment aid, enabling the US Military to operate at speed and scale with a focus on asset target pairing and threat detction.",
      },
      {
        heading: "Analyzed client-provided data: ",
        details:
          "Designed python models that incorporated a wide range of parameters, including target types, munitions effectiveness, military asset locations, asset range, and compatible weaponry. This ensured precise and efficient targeting, improving operational efficiency and decision-making.",
      },
    ],
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
      ECodeTool.VUE,
      ECodeTool.GRAPHQL,
      ECodeTool.PYTHON,
    ],
  },
  {
    title: "Zenlist, Inc.",
    url: "https://www.zenlist.com",
    mainImage: zenlist,
    description:
      "Zenlist is a real estate tech platform (similar to Zillow) that enables agents to manage clients, share properties, and automate communications, while offering a best-in-class property search experience for home buyers.",
    bulletPoints: [
      {
        heading: "Developed and implemented profile section: ",
        details:
          "Empowered over 65,000 users to manage personal information, notification preferences, Stripe billing, MLS memberships, and Zapier integrations.",
      },
      {
        heading: "Collaborated with backend engineers: ",
        details:
          "Built a proprietary chat platform based on product designs, enabling media sharing, internal links, group messaging, and push notifications for seamless communication inside of the platform.",
      },
      {
        heading: "Learned React Native on the job: ",
        details:
          "Hired to joined the mobile app team, collaborating asynchronously with developers across multiple continents and time zones to deliver key features and updates.",
      },
      {
        heading: "Created a custom library of styled components: ",
        details:
          "Followed the product style guide, and integrated Storybook to document use cases and ensure consistency across teams.",
      },
    ],
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
      ECodeTool.REACT_NATIVE,
      ECodeTool.GRAPHQL,
    ],
  },
];

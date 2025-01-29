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
  FIREBASE = "Firebase",
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
    title: "Queue Dating App",
    mainImage: "",
    url: "https://queuedatingapp.com/",
    description:
      "Queue is a platform that empowers users to forge deeper and more authentic connections through a unique communication model resulting in an unparalleled user experience.",
    bulletPoints: [
      {
        heading: "Core UI: ",
        details:
          "Built a styled component library to standardize UI elements and match Figma designs, using React Native and TypeScript, improving design consistency and reducing redundant code.",
      },
      {
        heading: "Performance Optimization: ",
        details:
          "Optimized performance and API efficiency by refactoring list components from ScrollView to FlatList and implementing caching with TanStack Query, leading to faster load times and smoother interactions.",
      },
      {
        heading: "Gesture Handling: ",
        details:
          "Redesigned profile swiping and engagement features, including dating app-style swiping, in-chat profile views, and a modal for liking/commenting on profile elements, using React Native, Reanimated, and Firebase, increasing user interaction.",
      },
      {
        heading: "Messaging: ",
        details:
          "Enhanced chat experience with auto-populated conversation starters and an options menu for chat management, improving first-message engagement and user control.",
      },
      {
        heading: "Authentication: ",
        details:
          "Streamlined navigation and authentication by refactoring app routes, improving login flows, and implementing component reset logic, using React Navigation, Firebase Auth, and React Context, ensuring a seamless user experience.",
      },
    ],
    tools: [
      ECodeTool.REACT_NATIVE,
      ECodeTool.JAVASCRIPT,
      ECodeTool.CSS,
      ECodeTool.FIREBASE,
    ],
  },
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
          "Used Next.js and Python to create a weapons target assignment aid, enabling the US Military to operate at speed and scale with a focus on asset target pairing and threat detection.",
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

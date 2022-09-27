import oldschool from "./media/app.png";
import txleaguer from "./media/tx-leaguer.png";
import synth from "./media/synth.png";
import zenlist from "./media/zenlist.png";
import spacex from "./media/spacex.png";

export enum ECodeTool {
  HTML = "HTML",
  CSS = "CSS",
  JAVASCRIPT = "Javascript",
  REACT = "React",
  REACT_NATIVE = "React Native",
  GRAPHQL = "Graphql",
}

export interface IPortfolioItem {
  title: string;
  url: string;
  mainImage: string;
  description?: string;
  tools?: ECodeTool[];
}

export const portfolioData: IPortfolioItem[] = [
  {
    title: "Zenlist, Inc.",
    url: "https:www.zenlist.com",
    mainImage: zenlist,
    description:
      "Zenlist is a real estate tech platform similar to Zillow. I worked as a frontend engineer on the mobile and web teams. Zenlist uses React, React Native, Redux and Graphql.",
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
      // ECodeTool.REACT_NATIVE,
      ECodeTool.GRAPHQL,
    ],
  },
  {
    title: "Mission Tracker",
    url: "https://spacex-mission-tracker.netlify.app/",
    mainImage: spacex,
    description:
      "Mission Tracker accesses the Space-X api to gather information about upcoming missions.",
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
    ],
  },
  {
    title: "Old School",
    url: "https://portfolio-old-school.vercel.app/",
    mainImage: oldschool,
    description:
      "Uses React to build a single page web application that feels like an old Mac desktop. It incorparates draggable windows and updatable desktop wallpaper.",
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
    ],
  },
  {
    title: "Tx Leaguer Brewing",
    url: "https://txleaguer.com/",
    mainImage: txleaguer,
    description:
      "Texas Leaguer Brewing is a craft brewery based out of Houston, TX. Their site uses a WordPress backend to allow them to upload new locations where their beer can be found and new job postings. The front end of the site is built using Next.js.",
    tools: [
      ECodeTool.HTML,
      ECodeTool.CSS,
      ECodeTool.JAVASCRIPT,
      ECodeTool.REACT,
    ],
  },
  {
    title: "Sound Synthesizer",
    url: "https://parcelsynth.netlify.app/",
    mainImage: synth,
    description:
      "This MIDI synthesizer uses the Web Audio API and the Web MIDI API combined with Tone.js, a web audio javascript library, to make a fully playable synthesizer. The keyboard layout with built using only HTML/CSS and responds to mouse clicks, keyboard input and MIDI Controllers attached to the computer. The user can switch between two different sound types.",
    tools: [ECodeTool.HTML, ECodeTool.CSS, ECodeTool.JAVASCRIPT],
  },
];

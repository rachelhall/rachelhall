import oldschool from "./media/app.png";
import txleaguer from "./media/tx-leaguer.png";
import synth from "./media/synth.png";
import { DiReact } from "react-icons/di";
import { IconType } from "react-icons";

export enum ECodeTool {
  HTML = "HTML",
  CSS = "CSS",
  JAVASCRIPT = "Javascript",
  REACT = "React",
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
  },
  {
    title: "Sound Synthesizer",
    url: "https://parcelsynth.netlify.app/",
    mainImage: synth,
  },
];

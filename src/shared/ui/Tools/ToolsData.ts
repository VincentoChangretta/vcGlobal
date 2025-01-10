import { toolsCSS, toolsHTML, toolsJS, toolsPHP, toolsREACT, toolsSASS } from "shared/images";

interface toolsDataTypes {
    id: string,
    img: string,
}

export const toolsData: toolsDataTypes[] = [
  { id: "html", img: toolsHTML },
  { id: "css", img: toolsCSS },
  { id: "sass", img: toolsSASS },
  { id: "js", img: toolsJS },
  { id: "react", img: toolsREACT },
  { id: "php", img: toolsPHP },
];

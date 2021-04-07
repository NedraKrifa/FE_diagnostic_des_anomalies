import dayjs from 'dayjs';
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);


export const isAuthenticated = () =>{
    return localStorage.getItem('token');
}

export const convertDate = (date) =>{
    return dayjs(date).format('llll');
}

const TagTheme = [
  { theme: "magenta", color: "#c41d7f" },
  { theme: "red", color: "#cf1322" },
  { theme: "volcano", color: "#d4380d" },
  { theme: "orange", color: "#d46b08" },
  { theme: "gold", color: "#d48806" },
  { theme: "lime", color: "#7cb305" },
  { theme: "green", color: "#389e0d" },
  { theme: "cyan", color: "#08979c" },
  { theme: "blue", color: "#096dd9" },
  { theme: "geekblue", color: "#1d39c4" },
  { theme: "purple", color: "#531dab" },
];

export const TagThemeAlea = () => {
    let max = TagTheme.length;
    let randomInt=Math.floor(Math.random() * max);
    return TagTheme[randomInt];
}
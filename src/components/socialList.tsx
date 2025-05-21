import github from "../assets/icons/github-icon.svg";
import linkedIn from "../assets/icons/linkedin-icon.svg";
import fiverr from "../assets/icons/fiverr-icon.svg";
import twitter from "../assets/icons/twitter-icon.svg";
import twitterDarkMode from "../assets/icons/twitter-darkmode-icon.svg";
import { useEffect, useState } from "react";

interface SocialTypes {
  url: string;
  text: string;
  icon: {
    darkmode?: string;
    lightmode: string;
  };
}

const social: SocialTypes[] = [
  {
    url: "https://github.com/RealKendpr/",
    text: "Github",
    icon: {
      lightmode: github.src,
    },
  },
  {
    url: "https://www.linkedin.com/in/kendpr/",
    text: "Linkedin",
    icon: {
      lightmode: linkedIn.src,
    },
  },
  // {
  //   url: "https://www.fiverr.com/kendpr/",
  //   text: "Fiverr",
  //   icon: {
  //     lightmode: fiverr.src,
  //   },
  // },
  {
    url: "https://twitter.com/kendpr",
    text: "Twitter",
    icon: {
      lightmode: twitter.src,
      darkmode: twitterDarkMode.src,
    },
  },
];

export function SocialList() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(isDarkMode.matches);

    const darkModeChangeListener = (e: MediaQueryListEvent) =>
      setDarkMode(e.matches);
    isDarkMode.addEventListener("change", darkModeChangeListener);

    return () => {
      isDarkMode.removeEventListener("change", darkModeChangeListener);
    };
  }, [darkMode]);

  return (
    <ul className="flex gap-x-4 *:duration-150 *:ease-in-out">
      {social.map((i) => (
        <li key={i.text} className="squish w-8">
          <a href={i.url}>
            <img
              className="size-8"
              loading="lazy"
              src={
                darkMode && i.icon.darkmode ? i.icon.darkmode : i.icon.lightmode
              }
              alt={i.text}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

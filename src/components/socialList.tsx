import github from "../assets/icons/github-icon.svg";
import linkedIn from "../assets/icons/linkedin-icon.svg";
import twitter from "../assets/icons/twitter-icon.svg";
import twitterDarkMode from "../assets/icons/twitter-darkmode-icon.svg";

interface SocialTypes {
  url: string;
  text: string;
  icon: {
    darkmode?: string;
    lightmode?: string;
  };
}

const social: SocialTypes[] = [
  {
    url: "https://github.com/RealKendpr/",
    text: "Github",
    icon: {
      darkmode: github.src,
    },
  },
  {
    url: "https://www.linkedin.com/in/kendpr/",
    text: "Linkedin",
    icon: {
      darkmode: linkedIn.src,
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
  return (
    <ul className="flex gap-x-4 *:duration-150 *:ease-in-out">
      {social.map((i) => (
        <li key={i.text} className="squish w-8">
          <a href={i.url}>
            <img
              className="size-8"
              loading="lazy"
              src={i.icon.darkmode}
              alt={i.text}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

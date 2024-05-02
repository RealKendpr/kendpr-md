import github from "../assets/icons/github-icon.svg";
import linkedIn from "../assets/icons/linkedin-icon.svg";
import fiverr from "../assets/icons/fiverr-icon.svg";

const social = [
  {
    url: "https://github.com/RealKendpr/",
    text: "Github",
    icon: github.src,
  },
  {
    url: "https://www.linkedin.com/in/kendpr/",
    text: "Linkedin",
    icon: linkedIn.src,
  },
  {
    url: "https://www.fiverr.com/kendpr/",
    text: "Fiverr",
    icon: fiverr.src,
  },
];
export function SocialList() {
  return (
    <ul className="flex gap-x-4 *:duration-150 *:ease-in-out">
      {social.map((i) => (
        <li key={i.text} className="squish w-8">
          <a href={i.url}>
            <img loading="lazy" src={i.icon} alt={i.text} />
          </a>
        </li>
      ))}
    </ul>
  );
}

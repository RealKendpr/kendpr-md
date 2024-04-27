export function SocialList() {
  return (
    <ul className="flex gap-x-4 *:duration-150 *:ease-in-out">
      <li className="squish w-8">
        <a href="https://github.com/RealKendpr">
          <picture>
            <source
              srcSet="./assets/icons/github-icon-light.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img
              loading="lazy"
              src="./assets/icons/github-icon-dark.svg"
              alt="Github"
            />
          </picture>
        </a>
      </li>
      <li className="squish w-8">
        <a href="https://www.linkedin.com/in/kendpr/">
          <img
            loading="lazy"
            src="./assets/icons/linkedin-icon.svg"
            alt="Linkedin"
          />
        </a>
      </li>
      <li className="squish w-8">
        <a href="https://www.fiverr.com/kendpr">
          <img
            loading="lazy"
            src="./assets/icons/fiverr-icon.svg"
            alt="Fiverr"
          />
        </a>
      </li>
    </ul>
  );
}

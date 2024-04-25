function DialogMenu() {
  return (
    <dialog class="block">
      <div>
        <ul class="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
        </ul>
        <ul class="social-list">
          <li>
            <a href="https://github.com/RealKendpr">
              <picture>
                <source
                  srcset="./assets/github-icon-dark.svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img src="./assets/github-icon-light.svg" alt="" />
              </picture>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kendpr/">
              <img src="./assets/linkedin-icon.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.fiverr.com/kendpr">
              <img src="./assets/fiverr-icon.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button class="menu-button">&#10060;</button>
      </div>
    </dialog>
  );
}

export function Navigation() {
  return (
    <>
      <div></div>
      <DialogMenu />
    </>
  );
}

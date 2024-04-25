export function DialogMenu() {
  return (
    <dialog class="z-50 fixed inset-0 flex-col-reverse py-4 px-[clamp(1rem,_5%,_2rem)] w-3/4 max-w-[500px] rounded-2xl border">
      <div>
        <ul class="grid 5px">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
        </ul>
        <ul class="mt-1 flex gap-x-4">
          <li class="w-8">
            <a href="https://github.com/RealKendpr">
              <picture>
                <source
                  srcset="./assets/github-icon-light.svg"
                  media="(prefers-color-scheme: dark)"
                />
                <img src="./assets/github-icon-dark.svg" alt="" />
              </picture>
            </a>
          </li>
          <li class="w-8">
            <a href="https://www.linkedin.com/in/kendpr/">
              <img src="./assets/linkedin-icon.svg" alt="" />
            </a>
          </li>
          <li class="w-8">
            <a href="https://www.fiverr.com/kendpr">
              <img src="./assets/fiverr-icon.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="text-right">
        <button class="menu-button">&#10060;</button>
      </div>
    </dialog>
  );
}

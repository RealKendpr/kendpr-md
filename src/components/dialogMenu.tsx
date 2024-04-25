import { useEffect, useRef } from "react";

export function DialogMenu({
  dialogStatus,
  setDialogStatus,
}: {
  dialogStatus: string;
  setDialogStatus: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogStatus === "open"
      ? dialog.current?.showModal()
      : dialog.current?.close();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") e.preventDefault();
    };
    dialogStatus === "open"
      ? addEventListener("keydown", handleKeyDown)
      : removeEventListener("keydown", handleKeyDown);
  }, [dialogStatus]);

  return (
    <dialog
      ref={dialog}
      className="fixed z-50 inset-0 rounded-2xl py-4 px-[clamp(1rem,_5%,_2rem)] border w-3/4 max-w-[500px]"
    >
      <div className="flex flex-col-reverse">
        <div>
          <ul className="grid 5px">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
          <ul className="mt-1 flex gap-x-4">
            <li className="w-8">
              <a href="https://github.com/RealKendpr">
                <picture>
                  <source
                    srcSet="./assets/github-icon-light.svg"
                    media="(prefers-color-scheme: dark)"
                  />
                  <img src="./assets/github-icon-dark.svg" alt="" />
                </picture>
              </a>
            </li>
            <li className="w-8">
              <a href="https://www.linkedin.com/in/kendpr/">
                <img src="./assets/linkedin-icon.svg" alt="" />
              </a>
            </li>
            <li className="w-8">
              <a href="https://www.fiverr.com/kendpr">
                <img src="./assets/fiverr-icon.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-right">
          <button
            onClick={() => setDialogStatus("close")}
            className="menu-button"
          >
            &#10060;
          </button>
        </div>
      </div>
    </dialog>
  );
}

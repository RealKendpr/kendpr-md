import { useState } from "react";
import { DialogMenu } from "./dialogMenu";

export function Navigation() {
  const [dialogStatus, setDialogStatus] = useState<string>("close");

  return (
    <nav className="fixed left-0 top-0 right-0 bg-black z-40">
      <div className="py-2 px-[2%] max-w-lg flex justify-between mx-auto">
        <a className="block w-8" href="#">
          <picture>
            <source
              srcSet="./assets/logo-is_light.svg"
              media="(prefers-color-scheme: dark)"
            />
            <img src="./assets/logo-is_dark.svg" alt="Kendpr's Logo" />
          </picture>
        </a>
        {dialogStatus === "close" && (
          <button
            onClick={() => setDialogStatus("open")}
            className="open-button text-2xl hover:cursor-pointer"
          >
            &#129386;
          </button>
        )}
      </div>
      <DialogMenu
        dialogStatus={dialogStatus}
        setDialogStatus={setDialogStatus}
      />
    </nav>
  );
}

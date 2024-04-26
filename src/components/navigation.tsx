import { useState } from "react";
import { DialogMenu } from "./dialogMenu";
import { Logo } from "./logo";

export function Navigation() {
  const [dialogStatus, setDialogStatus] = useState<string>("close");

  return (
    <nav className="fixed left-0 top-0 right-0 bg-black z-40">
      <div className="py-2 px-[2%] max-w-lg flex justify-between mx-auto">
        <a href="#b">
          <Logo location="navigation" />
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

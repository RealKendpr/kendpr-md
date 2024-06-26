import { useEffect, useState } from "react";
import { DialogMenu } from "./dialogMenu";
import { Logo } from "../logo";

export function Navigation({ pageType }: { pageType: string }) {
  const [dialogStatus, setDialogStatus] = useState<string>("close");

  useEffect(() => {
    if (dialogStatus === "open") {
      document.body.style.overflowY = "hidden";
    } else document.body.style.overflowY = "auto";
  }, [dialogStatus]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 border-b border-b-neutral-200 bg-neutral-500 bg-opacity-70 backdrop-blur-md dark:border-b-neutral-700 dark:bg-neutral-800 dark:bg-opacity-50">
      <div className="mx-auto flex max-w-screen-sm justify-between px-[3%] py-2 sm:px-0">
        <a href="/kendpr-md">
          <Logo location="navigation" />
        </a>
        {dialogStatus === "close" && (
          <button
            onClick={() => setDialogStatus("open")}
            className="squish text-2xl duration-150 ease-in-out hover:cursor-pointer"
          >
            &#129386;
          </button>
        )}
      </div>
      <DialogMenu
        pageType={pageType}
        dialogStatus={dialogStatus}
        setDialogStatus={setDialogStatus}
      />
    </nav>
  );
}

import { useEffect, useRef } from "react";
import { SocialList } from "./socialList";
import { NavLinks } from "./navLinks";

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
      if (e.key === "Escape") setDialogStatus("close");
    };
    dialogStatus === "open"
      ? addEventListener("keydown", handleKeyDown)
      : removeEventListener("keydown", handleKeyDown);
  }, [dialogStatus]);

  return (
    <dialog
      onClick={() => setDialogStatus("close")}
      ref={dialog}
      className="fixed inset-0 w-3/4 max-w-screen-xsm rounded-2xl border border-neutral-500 bg-neutral-700 backdrop:bg-neutral-800 backdrop:bg-opacity-50"
      title="Dialog Menu"
    >
      <div
        className="flex flex-col-reverse px-[clamp(1rem,_5%,_2rem)] py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="last-of-type:prose-ul:mt-4 ">
          <NavLinks />
          <SocialList />
        </div>
        <div className="text-right">
          <button
            className="squish duration-150 ease-in-out"
            onClick={() => setDialogStatus("close")}
            aria-labelledby="Close Button"
          >
            &#10060;
          </button>
        </div>
      </div>
    </dialog>
  );
}

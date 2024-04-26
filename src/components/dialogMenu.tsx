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
      title="Dialog Menu"
    >
      <div className="flex flex-col-reverse">
        <div className="last-of-type:prose-ul:mt-4 ">
          <NavLinks />
          <SocialList />
        </div>
        <div className="text-right">
          <button
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

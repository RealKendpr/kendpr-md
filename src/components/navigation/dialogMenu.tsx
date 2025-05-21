import { useEffect, useRef } from "react";
import { SocialList } from "../socialList";
import { NavLinks } from "../navLinks";

export function DialogMenu({
  pageType,
  dialogStatus,
  setDialogStatus,
}: {
  pageType: string;
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
      className="open:open-dialog fixed m-auto w-3/4 max-w-[500px] rounded-2xl border border-neutral-300 bg-neutral-500 backdrop:bg-neutral-900/50 backdrop:backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900"
      aria-labelledby="Menu"
      title="Menu"
    >
      <div
        className="flex flex-col-reverse px-[clamp(1rem,5%,2rem)] py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="prose-ul:last-of-type:mt-4">
          <NavLinks pageType={pageType} setDialogStatus={setDialogStatus} />
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

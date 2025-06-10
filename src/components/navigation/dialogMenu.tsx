import { useEffect, useRef } from "react";
import { SocialList } from "../socialList";
import { NavLinks } from "../navLinks";

export function DialogMenu({
  pageType,
  dialogStatus,
  setDialogStatus,
}: {
  pageType: string;
  dialogStatus: "close" | "open";
  setDialogStatus: React.Dispatch<React.SetStateAction<"close" | "open">>;
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
      className="group invisible fixed grid min-h-dvh min-w-full place-items-center bg-neutral-900/50 backdrop-blur-md open:visible"
      aria-hidden={true}>
      <div
        className="flex w-3/4 max-w-[500px] scale-0 flex-col-reverse rounded-2xl border border-neutral-700 bg-neutral-900 px-[clamp(1rem,5%,2rem)] py-4 opacity-50 transition-all duration-200 ease-out group-open:scale-100 group-open:opacity-100"
        tabIndex={0}
        aria-label="Menu"
        aria-hidden={dialogStatus === "close" ? true : false}
        onClick={(e) => e.stopPropagation()}>
        <div className="prose-ul:last-of-type:mt-4">
          <NavLinks pageType={pageType} setDialogStatus={setDialogStatus} />
          <SocialList />
        </div>
        <div className="text-right">
          <button
            className="squish duration-150 ease-in-out"
            onClick={() => setDialogStatus("close")}
            aria-labelledby="Close Button">
            &#10060;
          </button>
        </div>
      </div>
    </dialog>
  );
}

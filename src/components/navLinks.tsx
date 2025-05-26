export function NavLinks({
  pageType,
  setDialogStatus,
  footer,
}: {
  pageType: string;
  setDialogStatus?: React.Dispatch<React.SetStateAction<string>>;
  footer?: boolean;
}) {
  const linkList = [
    { url: "/", text: "Home" },
    { url: "/#about", text: "About Me" },
    { url: "/posts", text: "Posts" },
    // { url: "#contact", text: "Contact" },
    { url: "/#works", text: "Works" },
  ];

  return (
    <ul className={`grid gap-1 ${footer ? "justify-self-end" : ""}`}>
      {linkList.map((link) => (
        <li
          data-iscurrentpage={
            pageType.toLowerCase() === link.text.toLowerCase()
              ? "true"
              : "false"
          }
          className="data-iscurrentpage:hidden"
          key={link.url}>
          <a
            onClick={() => {
              setDialogStatus ? setDialogStatus("close") : null;
            }}
            href={link.url}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

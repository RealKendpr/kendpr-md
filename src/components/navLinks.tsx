export function NavLinks({
  setDialogStatus,
}: {
  setDialogStatus: React.Dispatch<React.SetStateAction<string>> | null;
}) {
  const linkList = [
    { url: "/#about", text: "About Me" },
    { url: "/posts", text: "Posts" },
    { url: "#contact", text: "Contact" },
    { url: "/#works", text: "Works" },
  ];

  return (
    <ul className="grid gap-1 place-self-end">
      {linkList.map((link) => (
        <li>
          <a
            onClick={() => {
              setDialogStatus ? setDialogStatus("close") : null;
            }}
            href={link.url}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

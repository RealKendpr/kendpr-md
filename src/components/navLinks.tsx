export function NavLinks({
  setDialogStatus,
}: {
  setDialogStatus: React.Dispatch<React.SetStateAction<string>> | null;
}) {
  const linkList = [
    { url: "/kendpr-md/#about", text: "About Me" },
    { url: "/kendpr-md/posts", text: "Posts" },
    { url: "#contact", text: "Contact" },
    { url: "/kendpr-md/#works", text: "Works" },
  ];

  return (
    <ul className="grid gap-1 place-self-end">
      {linkList.map((link) => (
        <li key={link.url}>
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

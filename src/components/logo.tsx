import icondark from "../assets/icons/logo-for-dark.svg";

export function Logo({ location }: { location: string }) {
  return (
    <div className="w-6">
      <picture>
        <img
          loading={location === "navigation" ? "eager" : "lazy"}
          src={icondark.src}
          alt="Website Logo"
          width={32}
          height={32}
        />
      </picture>
    </div>
  );
}

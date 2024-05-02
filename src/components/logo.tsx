import icondark from "../assets/icons/logo-for-dark.svg";
import iconlight from "../assets/icons/logo-for-light.svg";

export function Logo({ location }: { location: string }) {
  return (
    <div className="w-6">
      <picture>
        <source srcSet={icondark.src} media="(prefers-color-scheme: dark)" />
        <img
          loading={location === "navigation" ? "eager" : "lazy"}
          src={iconlight.src}
          alt="kendpr Logo"
        />
      </picture>
    </div>
  );
}

export function Logo({ location }: { location: string }) {
  return (
    <div className="w-8">
      <picture>
        <source
          srcSet="./assets/icons/logo-is_light.svg"
          media="(prefers-color-scheme: dark)"
        />
        <img
          loading={location === "navigation" ? "eager" : "lazy"}
          src="./assets/icons/logo-is_dark.svg"
          alt="kendpr Logo"
          id="footer-logo"
        />
      </picture>
    </div>
  );
}

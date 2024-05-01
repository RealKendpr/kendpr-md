export function Logo({ location }: { location: string }) {
  return (
    <div className="w-8">
      <picture>
        <source
          srcSet="/kendpr-md/assets/icons/logo-is_light.svg"
          media="(prefers-color-scheme: dark)"
        />
        <img
          loading={location === "navigation" ? "eager" : "lazy"}
          src="/kendpr-md/assets/icons/logo-is_dark.svg"
          alt="kendpr Logo"
        />
      </picture>
    </div>
  );
}

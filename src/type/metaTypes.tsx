export interface MetaTagProps {
  title: string;
  description: string;
  image?: {
    internal: boolean;
    src: string;
  };
  url: URL;
}

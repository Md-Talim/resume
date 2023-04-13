interface UnderlinedLinkProps {
  link: string;
  title: string;
  color: string;
}

const UnderlinedLink = ({ link, title, color }: UnderlinedLinkProps) => {
  interface colors {
    light: string;
    dark: string;
  }

  const colorVariants: colors = {
    light: 'text-gray1 hover:border-b-gray1',
    dark: 'text-gray3 hover:border-b-gray3',
  };

  return (
    <a
      href={link}
      className={`border-b border-b-primary ${
        colorVariants[color as keyof colors]
      } ${color === 'light' && 'font-medium'}`}
    >
      {title}
    </a>
  );
};

export default UnderlinedLink;

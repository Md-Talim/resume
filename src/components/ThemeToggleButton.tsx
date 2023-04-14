type Props = {
  toggleTheme: () => void;
  icon: string;
};

const ThemeToggleButton = ({ toggleTheme, icon }: Props) => {
  return (
    <button
      className="fixed bottom-4 right-4 aspect-square h-10 rounded-full bg-gray1 p-4 shadow-xl dark:bg-primary sm:h-16"
      onClick={toggleTheme}
    >
      <img src={icon} alt={'theme icon'} />
    </button>
  );
};

export default ThemeToggleButton;

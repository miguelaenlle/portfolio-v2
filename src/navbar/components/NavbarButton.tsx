const NavbarButton: React.FC<{
  text: string;
  selectedButton: string;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const handleSelect = () => {
    props.handleGoToPage(props.text);
  };
  return (
    <div
      onClick={handleSelect}
      className={`hover:cursor-pointer ${
        props.selectedButton === props.text
          ? "text-zinc-800 font-bold"
          : "text-zinc-500"
      } hover:text-zinc-800 hover:font-bold text-xl transition-all p-2`}
    >
      {props.text}
    </div>
  );
};
export default NavbarButton;

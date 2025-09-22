import NavbarButton from "./NavbarButton";

const Navbar: React.FC<{
  selectedPage: string;
  isTransparent: boolean;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  return (
    <div
      className={`transition-all fixed top-0 left-0 z-40 h-14 flex space-x-4 w-screen items-center p-10 ${
        props.isTransparent ? "" : "bg-zinc-50 shadow-md"
      }`}
    >
      {!props.isTransparent && (
        <p className="text-2xl font-bold mr-2">Miguel Aenlle</p>
      )}
      {["About", "Projects", "Skills", "Contact"].map((buttonText, index) => {
        return (
          <div key={`navbar-button-${buttonText}`}>
            <NavbarButton
              delay={0.1 * index}
              text={buttonText}
              selectedButton={props.selectedPage}
              handleGoToPage={props.handleGoToPage}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Navbar;
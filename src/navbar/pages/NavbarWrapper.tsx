import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../shared/helpers/get-window-dimensions";
import Navbar from "../components/Navbar";

const NavbarWrapper: React.FC<{
  selectedPage: string;
  children: JSX.Element;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const windowDimensions = useWindowDimensions();
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const location = window.scrollY;
      const show = location < 100;
      if (show) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };
    handleScroll()
    document.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div >
      {windowDimensions.width > 600 && (
        <Navbar
          selectedPage={props.selectedPage}
          isTransparent={isTransparent}
          handleGoToPage={props.handleGoToPage}
        />
      )}
      {props.children}
    </div>
  );
};
export default NavbarWrapper;

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
    let timeoutId: number | null = null;

    const handleScroll = () => {
      // Clear any pending timeout
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      // Debounce: run the logic after 100ms of no scrolling
      timeoutId = window.setTimeout(() => {
        const location = window.scrollY;
        console.log("location", location);
        const show = location < 100;
        setIsTransparent(show);
      }, 100);
    };

    // Set initial value on mount
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: remove listener and clear timeout
      document.removeEventListener("scroll", handleScroll);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
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

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const NavbarWrapper: React.FC<{
  children: JSX.Element;
  handleGoToPage: (newPage: string) => void;
}> = (props) => {
  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    let frameId: number | null = null;

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        setIsTransparent(window.scrollY < 80);
        frameId = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);
  return (
    <div>
      <Navbar
        isTransparent={isTransparent}
        handleGoToPage={props.handleGoToPage}
      />
      {props.children}
    </div>
  );
};
export default NavbarWrapper;

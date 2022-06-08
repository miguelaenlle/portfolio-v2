import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
const Modal: React.FC<{ children: JSX.Element; handleDismiss: () => void }> = (
  props
) => {
  const history = useHistory();
  const modalObject = document.getElementById("modal");
  const handleClickOutside = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      props.handleDismiss();
    }
  };
  if (modalObject) {
    return ReactDOM.createPortal(
      <div
        onClick={handleClickOutside}
        className="animate-in fade-in z-50 fixed top-0 left-0 w-screen h-screen overflow-y-scroll bg-black bg-opacity-60"
      >
        {props.children}
      </div>,
      modalObject
    );
  } else {
    return <div>Failed</div>;
  }
};
export default Modal;

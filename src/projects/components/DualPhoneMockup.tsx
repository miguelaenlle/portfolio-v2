import { useInView } from "react-hook-inview";
import Preview from "../../shared/models/Preview";
const DualPhoneMockup: React.FC<{ images: Preview[] }> = (props) => {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  if (props.images.length > 1) {
    return (
      <div ref={ref} className = "w-full flex lg:justify-center">
        <img
          className={
            isVisible
              ? `transition-all block animate-in fade-in slide-in-from-top-52 duration-1000 object-contain nonlg:w-1/2 lg:w-1/3 nonlg:max-w-[250px]`
              : "invisible"
          }
          src={props.images[0].mockupPath}
        />
        <img
          className={
            isVisible
              ? `transition-all block animate-in fade-in slide-in-from-top-48 duration-700 object-contain nonlg:w-1/2 lg:w-1/3 nonlg:max-w-[250px]`
              : "invisible"
          }
          src={props.images[1].mockupPath}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default DualPhoneMockup;

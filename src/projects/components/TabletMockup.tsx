import Preview from "../../shared/models/Preview";
import { useInView } from "react-hook-inview";

const TabletMockup: React.FC<{ images: Preview[] }> = (props) => {
  const [ref, isVisible] = useInView({
    unobserveOnEnter: true,
  });

  if (props.images.length > 0) {
    return (
      <div ref={ref} className="flex justify-center">
        <img
          className={
            isVisible
              ? `transition-all block animate-in fade-in slide-in-from-right-52 duration-1000 object-contain max-w-3xl`
              : "hidden"
          }
          src={props.images[0].mockupPath}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default TabletMockup;

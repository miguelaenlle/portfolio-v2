import { useDisplay } from "../hooks/use-display";

const Icon: React.FC<{ link: string; children: JSX.Element; delay: number }> = (
  props
) => {
  const { displayed } = useDisplay(props.delay-100);

  return (
    <a href={props.link} target={"_blank"}>
      <div
        className={`group transition-all bg-zinc-500 hover:bg-zinc-800 hover:cursor-pointer w-12 h-12 p-2 rounded-lg shadow-md hover:shadow-lg ${
          displayed
            ? `block animate-in fade-in slide-in-from-top duration-500 delay-${props.delay}`
            : "invisible"
        }`}
      >
        <div className="transition-all group-hover:scale-110">
          {props.children}
        </div>
      </div>
    </a>
  );
};
export default Icon;

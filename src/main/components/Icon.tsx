const Icon: React.FC<{ link: string; children: JSX.Element }> = (props) => {
  return (
    <a href={props.link} target={"_blank"}>
      <div className="group transition-all bg-zinc-600 hover:bg-zinc-700 hover:cursor-pointer w-14 h-14 p-2.5 rounded-lg">
        <div className="transition-all group-hover:scale-110">
          {props.children}
        </div>
      </div>
    </a>
  );
};
export default Icon;

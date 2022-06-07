const Icon: React.FC<{ link: string; children: JSX.Element }> = (props) => {
  return (
    <a href={props.link} target={"_blank"}>
      <div className="group transition-all bg-zinc-500 hover:bg-zinc-700 hover:cursor-pointer w-12 h-12 p-2 rounded-lg shadow-md hover:shadow-lg">
        <div className="transition-all group-hover:scale-110">
          {props.children}
        </div>
      </div>
    </a>
  );
};
export default Icon;

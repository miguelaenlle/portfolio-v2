const Header: React.FC<{ text: string }> = (props) => {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" aria-hidden="true" />
      <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
        {props.text}
      </h2>
    </div>
  );
};
export default Header;

const Header: React.FC<{ text: string }> = (props) => {
  return (
    <div className="border-b-2 border-b-zinc-200 py-3">
      <p className="text-2xl text-slate-600">{props.text}</p>
    </div>
  );
};
export default Header;

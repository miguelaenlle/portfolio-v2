const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="w-full max-w-[1400px] mx-auto px-5">{props.children}</div>;
};
export default Wrapper;

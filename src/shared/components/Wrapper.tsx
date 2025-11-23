const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="w-screen p-10 micro:p-5">{props.children}</div>;
};
export default Wrapper;

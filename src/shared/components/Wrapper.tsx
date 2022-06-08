const Wrapper: React.FC<{ children: JSX.Element }> = (props) => {
  return <div className="mx-auto max-w-screen-2xl p-10 micro:p-5">{props.children}</div>;
};
export default Wrapper;

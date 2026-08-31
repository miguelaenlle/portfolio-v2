const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
      {props.children}
    </div>
  );
};
export default Wrapper;

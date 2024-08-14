import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <ReactLoading type="bars" color="#33ccff" height="80px" width="80px" />
    </div>
  );
};

export default Loading;

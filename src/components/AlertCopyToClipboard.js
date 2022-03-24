const AlertCopyToClipboard = ({ copyState }) => {
  const mountedClass = {
    bottom: "10px",
    transition: "bottom 0.35s ease-out",
  };
  const unmountedClass = {
    bottom: "-45px",
    transition: "bottom 0.35s ease-in",
  };

  return (
    <div className="alert" style={copyState ? mountedClass : unmountedClass}>
      👍 Sticker Copied! Time to share!
    </div>
  );
};

export default AlertCopyToClipboard;

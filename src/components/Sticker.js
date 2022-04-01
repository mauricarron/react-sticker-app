import PropTypes from "prop-types";

const Sticker = ({ id, title, url, setCopyState }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(url);

    setCopyState(true);
    setTimeout(() => {
      setCopyState(false);
    }, 2000);
  };

  return (
    <img
      key={id}
      alt={title}
      src={url}
      className="img-sticker"
      onClick={handleClick}
    />
  );
};

Sticker.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  setCopyState: PropTypes.func.isRequired,
};

export default Sticker;

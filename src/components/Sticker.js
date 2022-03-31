import React from "react";

const Sticker = ({ id, title, url, setCopyState }) => {
  const handleClick = () => {
    const regex = /^(.*?).webp/;
    const copyURL = url.match(regex);
    console.log(copyURL);

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

export default Sticker;

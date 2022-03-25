import PlaceholderImage from "./PlaceholderImage";

const PlaceholderGrid = () => {
  const placeholderShapes = [];
  for (let i = 0; i < 15; i++) {
    placeholderShapes.push(<div className="img-placeholder"></div>);
  }

  return (
    <div className="grid-term">
      {placeholderShapes.map((img, i) => (
        <PlaceholderImage img={img} key={`${i}_${img}`} />
      ))}
    </div>
  );
};

export default PlaceholderGrid;

const GoodsItem = (props) => {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addToBasket,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
      <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn deep-orange darken-2"
          onClick={() => addToBasket({ id, name, price })}>Buy</button>
        <span className="right" style={{ fontSize: '1.8rem' }}>{price} eur</span>
      </div>
    </div>
  );
};

export default GoodsItem;

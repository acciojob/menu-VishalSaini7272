

function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`}
        >
          <img src={item.img} alt={item.name} className="menu-img" />
          <div className="menu-info">
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="category">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;


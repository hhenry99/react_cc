function ListGroup() {
  const listItems = [
    { id: 1, name: "The King" },
    { id: 2, name: "Is Coming" },
    { id: 3, name: "And His" },
    { id: 4, name: "Name Is" },
    { id: 5, name: "Jesus" },
  ];

  return (
    <>
      <h1>This is a ListGroup</h1>

      {/* Correct way to conditionally render content */}
      {listItems.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <ul className="list-group">
          {listItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;

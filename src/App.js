import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    loadItems();
    async function loadItems() {
      const response = await fetch(
        "https://fetch-me.vercel.app/api/shopping/items"
      );
      const data = await response.json();
      setItems(data.data);
      console.log(data);
    }
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={searchItem}
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      />
      {items
        .filter((item) => {
          if (searchItem === "") {
            return true;
          }

          return item.name.de.toLowerCase().includes(searchItem.toLowerCase());
        })
        .map((item) => {
          return <div key={item._id}>{item.name.de}</div>;
        })}
      {/*      {items.filter((item) => {
        return item.name.de.includes;

    if (searchItem === "") {
          return true;
        } else if (item.name.de.includes(searchItem)) {
          return true;
        }
        return false; 
      })} */}

      <button>Suche</button>
      {/*  <ul>
        {items.map((items) => (
          <li key={items._id}> {items.name.de}</li>
        ))}
      </ul> */}
    </>
  );
}

export default App;

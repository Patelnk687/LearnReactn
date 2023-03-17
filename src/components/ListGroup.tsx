import { useState } from "react";

//{items:[],heading:string}
interface Props{
items: string[];
heading: string;
//(item: string)=> void;
onSelectItem:(item: string)=> void;
}

function ListGroup({items, heading,onSelectItem}:Props) {
  //hook
  const [selectedIndex, setSelectedIndex]= useState(-1);
  


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(i);
            onSelectItem(item);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Dropdown() {
  const dropdownItem = [
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
    { id: 1, content: "this is the first item" },
    { id: 2, content: "this is the second item" },
    { id: 3, content: "this is the third item" },
  ];
  const dropdownRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const detectOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", detectOutside);
    return () => {
      document.removeEventListener("mousedown", detectOutside);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="dropdown" onClick={toggle}>
        {dropdownItem[current].content}
        <span>
          <FaChevronDown />
        </span>
      </div>
      {open && (
        <div className="item-container" ref={dropdownRef}>
          {dropdownItem.map((i, index) => (
            <div key={i.id}>
              <p
                onClick={() => {
                  setCurrent(index);
                  setOpen(false);
                }}
              >
                {i.content}
              </p>
              {index < dropdownItem.length - 1 && <hr />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

import { useEffect, useRef, useState } from "react";

const Department = () => {
  const items = [
    "Get it fast", "My Items", "Memorial", "Dinner Solutions", "Pharmacy Delivery",
    "Father's Day", "Graduation", "New Arrivals", "Auto Services", "Only At Walmart",
    "Registry", "Walmart +"
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropDown}
        className="hover:rounded-full border border-transparent hover:border-blue-500 p-2"
      >
        Departments
      </button>

      {isOpen && (
        <div className="w-52 absolute left-0 border border-gray-200 text-xs gap-4 bg-white overflow-hidden rounded-b-lg text-black">
          <ul>
            {items.map((item, index) => (
              <li
                className="list-none cursor-pointer hover:bg-blue-100 w-full p-3 hover:border hover:border-l-4 hover:border-l-blue-600"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Department;

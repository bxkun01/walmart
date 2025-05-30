import { useState, useEffect, useRef } from "react"

const Services = () => {
  const items = ['Get it fast', 'My Items', 'Memorial', 'Dinner Solutions', 'Pharmacy Delivery',
    "Father's Day", 'Graduation', 'New Arrivals', 'Auto Services', 'Only At Walmart ', 'Registry', 'Walmart +']
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  function toggleDropDown() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropDown} className='hover:rounded-full border border-transparent hover:border-blue-500 cursor-pointer p-2 hidden lg:flex'>Services</button>
      {isOpen && (
        <div className=" w-36 absolute right-0 left-1 border border-gray-200 text-xs  gap-4 bg-white overflow-hidden rounded-b-lg  text-black">
          <div>{items.map((item, index) =>
            <li className='list-none cursor-pointer hover:bg-blue-100 w-full p-3 hover:border hover:border-l-4 hover:border-l-blue-600' key={index}>{item}</li>)}
          </div>
        </div>
      )}

    </div>



  )
}

export default Services
import React, { useState, useRef, useEffect } from 'react';
import searchButton from '../assets/icons/search-button.png'

const Search = () => {
  const products = ['banana', 'chocolate', 'apple',
     'shirt', 'manga', 'lamp', 'chopstick', 'perfume','monkey','money','love','pants','hat','legendary sword of ren', 'dream realm',
    'gradient blue shirt','hell','heaven','god'];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(products);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const searchBoxRef = useRef();

  const handleSearchToggle = () => {
    setDropdownVisible(true);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = products.filter(product =>
      product.toLowerCase().includes(term.toLowerCase())
    );

    if(results==''){
      setDropdownVisible(false)
    }else{
      setFilteredResults(results);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-1 relative" ref={searchBoxRef}>
      <input
        type="text"
        placeholder="Search"
        className="px-5 placeholder-blue-800 h-11 rounded-full text-sm text-black lg:w-full focus:rounded-none flex-grow"
        onChange={handleSearchChange}
        value={searchTerm}
        onClick={handleSearchToggle}
      />
      <button onMouseDown={(e) => e.preventDefault()} className="absolute right-2 bottom-2 size-7 rounded-full bg-blue-900 flex justify-center"><img src={searchButton}  className='object-contain w-5'/></button>

      {isDropdownVisible && (
        <div className="absolute top-[45px] shadow-lg w-full h-[340px] z-[999] px-5 text-black bg-white overflow-y-auto">
          <ul className="divide-y divide-gray-300 py-2 flex flex-col gap-3">
            {filteredResults.map((product, i) => (
              <li key={i}>{product}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;

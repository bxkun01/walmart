import React from 'react'

const Footer = () => {
    const walmartLinks = [
  "All Departments",
  "Store Directory",
  "Careers",
  "Our Company",
  "Sell on Walmart.com",
  "Help",
  "Product Recalls",
  "Accessibility",
  "Tax Exempt Program",
  "Get the Walmart App",
  "Safety Data Sheet",
  "Terms of Use",
  "Privacy Notice",
  "California Supply Chain Act",
  "Privacy choices iconYour Privacy Choices",
  "Notice at Collection",
  "AdChoices",
  "Consumer Health Data Privacy Notices",
  "Brand Shop Directory",
  "Pharmacy",
  "Walmart Business",
  "#IYWYK",
  "Delete Account"
];

  return (
    <footer className='px-4 border border-transparent border-t-gray-200 border-t-3 py-5 lg:bg-blue-800 w-full lg:flex lg:items-center lg:flex-col'>
        <ul className='text-xs leading-1 text-gray-600 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:px-48 lg:gap-y-1'>{walmartLinks.map((link,index)=><li className=' lg:text-white cursor-pointer ' key={index}>{link}</li>)}</ul>
        <span className='text-gray-600 lg:text-white text-xs mt-5'>© 2025 Walmart. The trademarks Walmart and the Walmart Spark design are registered with the US Patent and Trademark Office. All Rights Reserved.</span>
    </footer>
  )
}
export default Footer
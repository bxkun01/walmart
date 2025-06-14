import { useState } from "react";
import chevronDown from '../assets/icons/chevron-down.png';
import chevronUp from '../assets/icons/chevron-up.png';

const sections = [
  {
    title: "Product Details",
    content: `Officially 100% Authenthic Half It Exclusive Branded I'm A Proud Dad Of An Awesome 
    Daughter Funny Daddy Gift Fathers day T-Shirt. We are not the typical print shop. We put quality before profit
    and never cut ink to squeeze a few extra margin points. With that said, our prices are unbeatably good and super 
    duper affordable. We put extra care into your shirt to make sure it's the perfect gift,
    casual day out, or to celebrate that perfect day! We will never send you a shirt that we wouldn't wear ourselves!`
  },
  {
    title: "Specifications",
    content: `Country of Origin - USA\nClothing Size - XL\nSleeve Length Style - Everyday Wear\nFabric Content - 100% Cotton`
  },
  {
    title: "Directions",
    content: `Fabric Care Instructions: Machine Wash Cold`
  },
  {
    title: "Warranty",
    content: `Please be aware that the warranty terms on items offered for sale by third party Marketplace sellers may differ from those displayed in this section. Use the 'Contact seller' feature to confirm warranty terms.`
  }
];

const AboutItem = () => {
  const [openSections, setOpenSections] = useState(Array(sections.length).fill(false));

  const toggleSection = (index) => {
    const updated = [...openSections];
    updated[index] = !updated[index];
    setOpenSections(updated);
  };

  return (
    <div className='divide-y-2 divide-gray-300'>
      <div className='font-bold text-md pb-4'>About this item</div>

      {sections.map((section, index) => (
        <div key={index} className="p-3 text-sm">
          <div className="flex justify-between items-center">
            <div>{section.title}</div>
            <img
              src={openSections[index] ? chevronUp : chevronDown}
              className='w-6 hover:cursor-pointer'
              onClick={() => toggleSection(index)}
              alt="toggle"
            />
          </div>

          {openSections[index] && (
            <div className="text-xs mt-2 whitespace-pre-line">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutItem;

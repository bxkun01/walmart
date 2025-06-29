import { useState } from "react";
import chevronDown from '../assets/icons/chevron-down.png';
import chevronUp from '../assets/icons/chevron-up.png';

const Section = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="p-3 text-sm divide-b last:divide-none">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        <img
          src={isOpen ? chevronUp : chevronDown}
          alt="toggle"
          className="w-6"
        />
      </div>
      {isOpen && (
        <div className="text-xs mt-2 whitespace-pre-line">{description}</div>
      )}
    </div>
  );
};

const AboutItem = ({ detail }) => {
  return (
    <div className="divide-y-2 divide-gray-300 min-w-fit">
      <div className="font-bold text-md pb-4">About this item</div>
      {detail.map((section, idx) => (
        <Section
          key={idx}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  );
};

export default AboutItem;

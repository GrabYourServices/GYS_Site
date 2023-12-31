import React, { useState, useEffect } from 'react';

interface DropdownProps {
  buttonLabel: string;
  items: string[];
  onSelect: (item: string) => void;
  errored: boolean,
}

const Dropdown: React.FC<DropdownProps> = ({ buttonLabel, items, onSelect, errored }) => {
  const [label, setLabel] = useState(buttonLabel);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Update the label when the buttonLabel prop changes
    setLabel(buttonLabel);
  }, [buttonLabel]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition duration-500 relative inline-block text-left w-full max-w-[calc(100%-0.5rem)] flex justify-center items-center flex-col">
      <button
        type="button"
        className={`transition duration-500 mt-4 ml-2 bg-transBlack border-2 rounded-lg ${errored ? 'border-rose-500' : 'border-yellow'} font-normal text-start px-4 py-2 flex items-center w-[calc(100%-0.5rem)] hover:opacity-75 hover:bg-transBlack hover:border-2 hover:border-yellow`}
        style={{ color: `${label === buttonLabel ? '#888888' : '#ffffff'}` }}
        onClick={toggleDropdown}
      >
        {label}
      </button>

      {isOpen && (
        <div className="transition duration-500 origin-bottom-right relative bg-transparent border-2 border-yellow mt-2 top-0 w-[calc(100%-0.5rem)] ml-2 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                onClick={() => {
                  toggleDropdown();
                  setLabel(item);
                  onSelect(item);
                }}
                className="block px-4 py-2 text-sm text-base-100 hover:bg-yellow hover:text-black"
                style={{ color: '#888' }}
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

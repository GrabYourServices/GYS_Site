// components/Accordion.tsx

import { useState } from 'react';
import { Transition } from '@headlessui/react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {

  return (
    <div className="wrapperCards">
      <div className="colsCard"> 
        {items.map((item, index) => (
          <div className="colCard" key={index} >
            <div className="containerCards">
              <div className="front bg-black border-2 border-yellow">
                <div className="inner">
                  <p className="font-MainFont">{item.title}</p>
                </div>
              </div>
              <div className="back bg-black border-2 border-yellow">
                <div className="inner">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Accordion;

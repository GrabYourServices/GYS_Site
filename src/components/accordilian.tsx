// components/Accordion.tsx
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

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
                <div className="inner flex flex-col justify-center items-center">
                  <FaAngleDoubleDown size={32} className='m-0 moving-ic-alt text-yellow'/>
                  <p className="font-MainFont border-none mt-4">{item.title}</p>
                  <FaAngleDoubleUp size={32} className='m-0 moving-ic text-yellow'/>
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

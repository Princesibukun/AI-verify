// import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
export type AccordionGroupInterface = {
  title?: string;
  content?: string;
};

const Accordion: React.FC<AccordionGroupInterface> = (
  props: AccordionGroupInterface
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-[100%] w-full">
      <div
        className="accordion-header md:text-sm text-xs font-semibold flex flex-row justify-between items-center mb-8"
        onClick={toggleAccordion}
      >
        {props.title} {!isOpen ? <FiPlus /> : <FiMinus />}
      </div>
      <div
        className={`accordion-content text-xs ${!isOpen ? "hidden" : "block"}`}
      >
        {props.content}
      </div>
    </div>
  );
};

export default Accordion;

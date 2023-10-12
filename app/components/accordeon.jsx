'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";


const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

function Accordion({ children, multiple, defaultIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({ children }) {
  return <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }} viewport={{ once: true }} className="border-gradient-br-red-purple-gray-900 border-transparent border-solid overflow-hidden mb-2 rounded-lg border border-b-4 border-r-4 active:border transition-all duration-100">{children}</motion.div>;
}

function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`cursor-pointer transition-[background-color] duration-[0.15s] ease-[ease-in-out] p-2 hover:bg-[#3f3f3f] active:bg-[#686868] ${isActive ? "active" : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {children}
    </motion.div>
  );
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
        >
          <div className="p-5">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Accordeon({ data }) {
  return (
    <div className="">
      <Accordion multiple>
        {data.map((i) => (
          <AccordionItem key={i}>
            <AccordionHeader>{i.title}</AccordionHeader>
            <AccordionPanel>
              {i.text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

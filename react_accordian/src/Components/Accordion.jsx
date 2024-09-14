import { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./UI/FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((currElem) => {
          return (
            <FAQ
              key={currElem.id}
              curData={currElem}
              isActive={activeId === currElem.id}
              onToggle={() => handleButton(currElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Accordion;

import { useState } from "react";
import AccordionComponent from "./components/AccordionComponent";
import "./AccordionMain.scss";

const data = [
  {
    id: "1",
    title: "What are accordion components 1",
    text: "This is a long ass text This is a long ass text This is a long ass text This is a long ass text This is a long ass text",
  },
  {
    id: "2",
    title: "What are accordion components 2",
    text: "This is a long ass text This is a long ass text This is a long ass text This is a long ass text This is a long ass text",
  },
  {
    id: "3",
    title: "What are accordion components 3",
    text: "This is a long ass text This is a long ass text This is a long ass text This is a long ass text This is a long ass text",
  },
  {
    id: "4",
    title: "What are accordion components 4",
    text: "This is a long ass text This is a long ass text This is a long ass text This is a long ass text This is a long ass text",
  },
];

export default function AccordionMain() {
  const [multiSelectionEnabled, setMultiSelectionEnabled] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [selected, setSelected] = useState(0);

  const onHandleMultiSelection = () => {
    setMultiSelectionEnabled(!multiSelectionEnabled);
    setMultiple([]);
    setSelected(0);
  };

  return (
    <>
      <button
        className="btn btn--multi-selection"
        onClick={onHandleMultiSelection}
      >
        {multiSelectionEnabled
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      {data.map((curr) => (
        <AccordionComponent
          title={curr.title}
          text={curr.text}
          id={curr.id}
          selected={selected}
          setSelected={setSelected}
          multiSelectionEnabled={multiSelectionEnabled}
          multiple={multiple}
          setMultiple={setMultiple}
          key={curr.id}
        />
      ))}
    </>
  );
}

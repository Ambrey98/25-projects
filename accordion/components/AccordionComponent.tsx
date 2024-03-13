import { useState } from "react";
import "./AccordionComponent.scss";

export default function AccordionComponent(props: any) {
  const {
    title,
    text,
    id,
    selected,
    setSelected,
    multiSelectionEnabled,
    multiple,
    setMultiple,
  } = props;

  const onHandleSelected = () => {
    if (multiSelectionEnabled) {
      let copyMultiple = [...multiple];
      const findCurrentId = copyMultiple.indexOf(id);
      if (findCurrentId === -1) {
        copyMultiple.push(id);
      } else {
        copyMultiple.splice(findCurrentId, 1);
      }
      setMultiple(copyMultiple);
    } else {
      if (selected === id) {
        setSelected(0);
      } else {
        setSelected(id);
      }
    }
  };

  return (
    <div className="container" onClick={onHandleSelected}>
      <div className="title-container">
        <h3 className="title">{title}</h3>
        <span>+</span>
      </div>
      {!multiSelectionEnabled && selected === id && <p>{text}</p>}
      {multiSelectionEnabled && multiple.includes(id) && <p>{text}</p>}
    </div>
  );
}

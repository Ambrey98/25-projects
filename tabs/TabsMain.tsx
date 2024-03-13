import { useState } from "react";
import Tab from "./Tab";
import "./TabsMain.scss";

export default function TabsMain() {
  const [openedTab, setOpenedTab] = useState<number>(1);

  return (
    <div className="container">
      <h1>Tabs</h1>
      <div className="main-tab">
        {[...Array(3)].map((_, id) => (
          <Tab
            tabNumber={id + 1}
            openedTab={openedTab}
            setOpenedTab={setOpenedTab}
          />
        ))}
      </div>
      {openedTab === 1 && <p>Content 1</p>}
      {openedTab === 2 && <p>Content 2</p>}
      {openedTab === 3 && <p>Content 3</p>}
    </div>
  );
}

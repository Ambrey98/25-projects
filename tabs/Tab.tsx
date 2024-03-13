import { useEffect } from "react";
import "./Tab.scss";

export default function Tab(props: any) {
  const { tabNumber, setOpenedTab } = props;

  return (
    <>
      <div className="tab" onClick={() => setOpenedTab(tabNumber)}>
        Tab
      </div>
    </>
  );
}

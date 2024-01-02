import { List } from "phosphor-react";
import { useState } from "react";
import { SideBar } from "./sideBar";

export function Dropdown() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div>
      <button onClick={() => setSideBar(!sideBar)}>
        <List size={45} color="#fff" weight="regular" />
        {sideBar && <SideBar active={setSideBar} />}
      </button>
    </div>
  );
}

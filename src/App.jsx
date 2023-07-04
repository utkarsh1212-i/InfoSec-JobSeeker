// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import SideBar1 from "./components/SideBar1";
import SideBar2 from "./components/SideBar2";

function App() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [updateFlag, setUpdateFlag] = useState(true);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    
  };
  const handleUpdate = (flag) => {
    if(selectedLink === "My Profile"){
    setUpdateFlag(flag)
      
    }
  }
  

  return (
    <>
      {/* <Navbar /> */}
      <div className="d-flex">
        <SideBar1 selectedLink={selectedLink} onLinkClick={handleLinkClick} />
        <Body selectedLink={selectedLink} updateFlagForProfile={updateFlag} handleUpdate={handleUpdate}  />
        <SideBar2 />
      </div>
    </>
  );
}

export default App;

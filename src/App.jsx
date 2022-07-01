import FacebookClone from "./Components/FacebookClone.jsx";
import MicrosoftClone from "./Components/MicrosoftClone.jsx";
import MainForm from "./Components/Multistep-Form/MainForm.jsx";
import MultiStepForm from "./Components/MSF/MultiStepForm.jsx";
import MainFormm from "./Components/Form/MainFormm.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import "./input.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainFormm />}></Route>
        <Route path="/mainform" element={<MainForm />}></Route>
        <Route path="/multistepform" element={<MultiStepForm />}></Route>
        <Route path="/facebookclone" element={<FacebookClone />}></Route>
        <Route path="/microsoftclone" element={<MicrosoftClone />}></Route>
      </Routes>
    </>
  );
}

export default App;

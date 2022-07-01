import React from "react";
import "../Multistep-Form/MainForm.css";
import { useForm, useStep } from "react-hooks-helper";
import Stepp1 from "./Stepss/Stepp1";
import Stepp11 from "./Stepss/Stepp11";
import Stepp2 from "./Stepss/Stepp2";
import Stepp3 from "./Stepss/Stepp3";
import { Revieww } from "./Stepss/Revieww";
import FinalStepp from "./Stepss/FinalStepp";

const defaultData = {
  firstName: "",
  lastName: "",
  gender: "",
  phone: "",
  email: "",
  role: "",
  homeaddress: "",
  city: "",
  country: "",
  zip: "",
  qualification: "",
  college: "",
  passingyear: "",
  jobapply: "",
  skillshave: "",
  experiencehave: "",
  worktype: "",
  expected: "",
};

const steps = [
  {
    id: "personaldetails",
  },
  {
    id: "address",
  },
  {
    id: "education",
  },
  {
    id: "workexperience",
  },
  {
    id: "revieww",
  },
  {
    id: "submitt",
  },
];

const MainFormm = () => {
  const [formmData, setFormmData] = useForm(defaultData);
  const { step, navigation } = useStep({ steps, initialStep: 0 });
  const propss = { formmData, setFormmData, navigation };

  switch (step.id) {
    case "personaldetails":
      return <Stepp1 {...propss} />;
    case "address":
      return <Stepp11 {...propss} />;
    case "education":
      return <Stepp2 {...propss} />;
    case "workexperience":
      return <Stepp3 {...propss} />;
    case "revieww":
      return <Revieww {...propss} />;
    case "submitt":
      return <FinalStepp {...propss} />;
  }

  return <></>;
};

export default MainFormm;

import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Names from "./StepForm/Names";
import Address from "./StepForm/Address";
import Contact from "./StepForm/Contact";
import { Review } from "./StepForm/Review";
import Submit from "./StepForm/Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  nickName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
};
const steps = [
  {
    id: "names",
  },
  {
    id: "address",
  },
  {
    id: "contact",
  },
  {
    id: "review",
  },
  {
    id: "submit",
  },
];

const MultiStepForm = () => {
  const [formData, setFormData] = useForm(defaultData);

  const { step, navigation } = useStep({ steps, initialStep: 0 });

  const props = { formData, setFormData };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return <div>MultiStepForm</div>;
};

export default MultiStepForm;

import React from "react";
import { Typography, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ListItemText from "@material-ui/core/ListItemText";
import { FiEdit } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";

export const Revieww = ({ formmData, navigation }) => {
  const { go } = navigation;

  const {
    firstName,
    lastName,
    gender,
    phone,
    email,
    role,
    homeaddress,
    city,
    country,
    zip,
    qualification,
    college,
    passingyear,
    jobapply,
    skillshave,
    experiencehave,
    worktype,
    expected,
  } = formmData;
  return (
    <>
      <div className="mainform">
        <Container maxWidth="md">
          <Typography variant="h6">Review Your Details:</Typography>
          <RenderAccordion
            style={{ marginTop: "1rem" }}
            summary="Personaldetails"
            go={go}
            details={[
              { "First Name": firstName },
              { "Last Name": lastName },
              { Gender: gender },
              { Role: role },
              { Phone: phone },
              { Email: email },
            ]}
          />
          <RenderAccordion
            style={{ marginTop: "1rem" }}
            summary="Address"
            go={go}
            details={[
              { "Street Address": homeaddress },
              { City: city },
              { Country: country },
              { "Zip Code": zip },
            ]}
          />
          <RenderAccordion
            summary="Education"
            go={go}
            details={[
              { Qualification: qualification },
              { College: college },
              { "Passing Year": passingyear },
              { CGPA: jobapply },
            ]}
          />
          <RenderAccordion
            summary="Workexperience"
            go={go}
            details={[
              { Skills: skillshave },
              { Experience: experiencehave },
              { "Work Type": worktype },
              { "Salary Expected": expected },
            ]}
          />
          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: "1.5rem" }}
            onClick={() => go("submitt")}
          >
            Submit
          </Button>
        </Container>
      </div>
    </>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      style={{ marginTop: "0.5rem" }}
      expandIcon={<MdExpandMore />}
    >
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}

        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <FiEdit />
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);

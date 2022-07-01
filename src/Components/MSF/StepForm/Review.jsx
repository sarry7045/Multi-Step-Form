import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetail from "@material-ui/core/AccordionDetails";
import ListItemText from "@material-ui/core/ListItemText";
import { FiEdit } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <Typography variant="h6">Review Your Details:</Typography>
      <RenderAccordion
        style={{ marginTop: "1rem" }}
        summary="Names"
        go={go}
        details={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { "Nick Name": nickName },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { Zip: zip },
        ]}
      />
      <RenderAccordion
        summary="Contact"
        // go={go}
        details={[{ Phone: phone }, { Email: email }]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    </Container>
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

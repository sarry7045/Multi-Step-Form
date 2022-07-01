import React from "react";
import { Container, Typography, Button } from "@material-ui/core";

const FinalStepp = ({ formmData, navigation }) => {
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
      <Container maxWidth="sm" style={{ marginTop: "8rem" }}>
        <Typography variant="h5">
          Thank You for the Submitting , We Will be in Touch!
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10rem" }}>
          Your Details:
        </Typography>
        <Typography variant="body1">
          {`${firstName}, 
          ${lastName}, 
          ${gender}, 
          ${phone}, 
          ${email}, 
          ${role}, 
          ${homeaddress}, 
          ${city}, 
          ${country}, 
          ${zip}, 
          ${qualification}, 
          ${college}, 
          ${passingyear}, 
          ${jobapply}, 
          ${skillshave}, 
          ${experiencehave}, 
          ${worktype}, 
          ${expected}`}
        </Typography>
      </Container>

      <Container maxWidth="sm" style={{ marginTop: "10rem" }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth={false}
          onClick={() => go("personaldetails")}
        >
          Back To Home Page
        </Button>
      </Container>
    </>
  );
};

export default FinalStepp;

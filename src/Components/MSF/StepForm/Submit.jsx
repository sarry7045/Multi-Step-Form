import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";

const Submit = ({ formData, navigation }) => {
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
    <>
      <Container maxWidth="sm" style={{ marginTop: "8rem" }}>
        <Typography variant="h5">
          Thank You for the Submitting , We Will be in Touch!
        </Typography>
        <Typography variant="h6" style={{ marginTop: "10rem" }}>
          Your Details:
        </Typography>
        <Typography variant="body1">
          {`   ${firstName}, ${lastName}, ${nickName}, ${address}, ${city}, ${state}, ${zip}, ${phone}, ${email}`}
        </Typography>
      </Container>

      <Container maxWidth="sm" style={{ marginTop: "10rem" }}>
        <Button
          onClick={() => navigation.previous()}
          variant="contained"
          color="secondary"
          style={{
            marginTop: "1rem",

            alignContent: "cener",
          }}
          align="center"
        >
          Back
        </Button>
      </Container>
    </>
  );
};

export default Submit;

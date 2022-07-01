import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";

const Contact = ({ formData, setFormData, navigation }) => {
  const { phone, email } = formData;
  return (
    <>
      <Container maxWidth="xs" style={{ marginTop: "4rem" }}>
        <Typography variant="h6">Contact Details:</Typography>
        <TextField
          id="outlined-basic"
          type="number"
          value={phone}
          onChange={setFormData}
          label="Phone"
          name="phone"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          type="email"
          value={email}
          onChange={setFormData}
          label="E-Mail"
          name="email"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />

        <Button
          onClick={() => navigation.previous()}
          variant="contained"
          color="secondary"
          style={{ marginTop: "1rem", marginRight: "1rem" }}
        >
          Back
        </Button>
        <Button
          onClick={() => navigation.next()}
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Next
        </Button>
      </Container>
    </>
  );
};

export default Contact;

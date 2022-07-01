import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";

const Names = ({ formData, setFormData, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  return (
    <>
      <Container maxWidth="xs" style={{ marginTop: "4rem" }}>
        <Typography variant="h6">Personal Details:</Typography>
        <TextField
          id="outlined-basic"
          type="text"
          value={firstName}
          onChange={setFormData}
          label="Firstname"
          name="firstName"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          type="text"
          value={lastName}
          onChange={setFormData}
          label="Lastname"
          name="lastName"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          type="text"
          value={nickName}
          onChange={setFormData}
          label="Nickname"
          name="nickName"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />
        <Button
          onClick={() => navigation.next()}
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Next
        </Button>
      </Container>
    </>
  );
};

export default Names;

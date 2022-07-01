import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@material-ui/core";
import "../../Multistep-Form/MainForm.css";

const Address = ({ formData, setFormData, navigation }) => {
  const { address, city, state, zip } = formData;
  return (
    <>
      <Container maxWidth="xs" style={{ marginTop: "4rem" }}>
        <Typography variant="h6">Current Address:</Typography>
        <TextField
          id="outlined-basic"
          type="text"
          value={address}
          onChange={setFormData}
          label="Address"
          name="address"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />

        <TextField
          select
          id="outlined-basic"
          type="text"
          value={city}
          onChange={setFormData}
          label="City"
          name="city"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        >
          {" "}
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <TextField
          id="outlined-basic"
          type="text"
          value={state}
          onChange={setFormData}
          label="State"
          name="state"
          variant="outlined"
          color="primary"
          margin="normal"
          autoComplete="off"
          fullWidth
        />

        <TextField
          id="outlined-basic"
          type="number"
          value={zip}
          onChange={setFormData}
          label="Zip code"
          name="zip"
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

export default Address;

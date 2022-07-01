import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";

const Step1 = () => {
  const [firstName, setfirstName] = useState("");

  const handleOnChange = ({ target }) => {
    console.log("e", target.name, target.value);
    setfirstName();
  };

  const handleClick = () => {
    alert("Cliked");
  };

  return (
    <>
      <Paper style={{ padding: "16px" }}>
        <Box mt={2} mb={2}>
          <Typography
            color="primary"
            align="center"
            variant="h6"
            style={{ marginBottom: "30px" }}
          >
            Please Fill personal Data
          </Typography>
        </Box>

        <Grid container spacing={1} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstname"
              type="text"
              fullWidth={true}
              size="small"
              label="First Name"
              variant="outlined"
              //   value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastname"
              type="text"
              fullWidth={true}
              size="small"
              label="LastName"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
          <Grid item xs={12}>
            <TextField
              select
              name="gender"
              fullWidth={true}
              size="small"
              label="Gender"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              type="number"
              fullWidth={true}
              size="small"
              label="Phone"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              type="email"
              fullWidth={true}
              size="small"
              label="Email"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>
        </Grid>
        <Grid container component={Box} justify="flex-end" mt={2} p={2}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth={false}
            onClick={handleClick}
          >
            Next{" "}
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default Step1;

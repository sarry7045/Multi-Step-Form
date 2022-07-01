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

const Step3 = () => {
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
            Professional Details
          </Typography>
        </Box>

        <Grid container spacing={1} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="skill"
              fullWidth={true}
              size="small"
              label="Skill You Have"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            >
              <MenuItem value="programming">Programming</MenuItem>
              <MenuItem value="communication">Communication</MenuItem>
              <MenuItem value="desigining">Desigining</MenuItem>
              <MenuItem value="notyet">Not Yet Defined</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="workExpeirence"
              fullWidth={true}
              size="small"
              label="Expeirence You Have"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            >
              <MenuItem value="Less then 1 Year">Less then 1 Year</MenuItem>
              <MenuItem value="More then 1 Year">More then 1 Year </MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="jobType"
              fullWidth={true}
              size="small"
              label="Choose Work Type"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            >
              <MenuItem value="marketing">Marketting</MenuItem>
              <MenuItem value="officalwork">Official Work</MenuItem>
              <MenuItem value="workfromhome">Work From Home</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="expectedSalary"
              type="number"
              fullWidth={true}
              size="small"
              label="Expected Salary"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>
        </Grid>

        <Grid container component={Box} justify="flex-end" mt={2} p={2}>
          <Box ml={2}>
            {" "}
            <Button
              variant="outlined"
              color="primary"
              fullWidth={false}
              onClick={handleClick}
            >
              Back
            </Button>
          </Box>
          <Box ml={2}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth={false}
              onClick={handleClick}
            >
              Finish
            </Button>
          </Box>
        </Grid>
      </Paper>
    </>
  );
};

export default Step3;

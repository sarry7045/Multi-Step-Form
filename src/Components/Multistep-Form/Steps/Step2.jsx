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

const Step2 = () => {
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
            A Bit About Education
          </Typography>
        </Box>

        <Grid container spacing={1} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="highestDegree"
              fullWidth={true}
              size="small"
              label="Qualification Degree"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            >
              <MenuItem value="graduation">Graduation</MenuItem>
              <MenuItem value="btech">B.Tech</MenuItem>
              <MenuItem value="bca">BCA Course</MenuItem>
              <MenuItem value="mtech">M.Tech</MenuItem>
              <MenuItem value="mca">MCA</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="issuedBy"
              type="text"
              fullWidth={true}
              size="small"
              label="Issed By College Name"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="yearOfPassing"
              type="number"
              fullWidth={true}
              size="small"
              label="Passign Year"
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="jobApplyFor"
              fullWidth={true}
              size="small"
              label="JobApplyFor "
              variant="outlined"
              value={firstName}
              onChange={handleOnChange}
              color="primary"
            >
              <MenuItem value="manager">Manager</MenuItem>
              <MenuItem value="projectdesinger">Project Desinger</MenuItem>
              <MenuItem value="clerk">Clerk</MenuItem>
              <MenuItem value="helper">Helper</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Grid container component={Box} justify="flex-end" mt={2} p={2}>
          <Box>
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
            {" "}
            <Button
              variant="outlined"
              color="primary"
              fullWidth={false}
              onClick={handleClick}
            >
              Next
            </Button>{" "}
          </Box>
        </Grid>
      </Paper>
    </>
  );
};

export default Step2;

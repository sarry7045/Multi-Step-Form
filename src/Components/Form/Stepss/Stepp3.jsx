import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stepper,
  Step,
  StepLabel,
  makeStyles,
} from "@material-ui/core";
import "../../Multistep-Form/MainForm.css";

const styles = makeStyles({
  formContainer: {
    display: "flex",
    flexFlow: "row Wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    padding: "10px",
    minHeight: "35px",
    height: "auto",
  },
});

const Stepp3 = ({ formmData, setFormmData, navigation }) => {
  const classes = styles();
  const steps = [
    { label: "Personal Bio" },
    { label: "Educational" },
    { label: "Professional" },
  ];
  const { skillshave, experiencehave, worktype, expected } = formmData;

  return (
    <>
      <div className="mainform">
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} sm={7}>
            <form className={classes.form}>
              <Paper component={Box} mb={1}>
                <Box pt={2}>
                  <Typography variant="h5" color="primary" align="center">
                    Multistep Sign-Up Form
                  </Typography>
                </Box>
                <Stepper alternativeLabel>
                  {steps.map((item) => (
                    <Step key={item.label}>
                      <StepLabel>{item.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
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
                        name="skillshave"
                        fullWidth={true}
                        size="small"
                        label="Skill You Have"
                        variant="outlined"
                        value={skillshave}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      >
                        <MenuItem value="ReactJs">ReactJs</MenuItem>
                        <MenuItem value="NextJs">NextJs</MenuItem>
                        <MenuItem value="React Native">React Native</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        name="experiencehave"
                        fullWidth={true}
                        size="small"
                        label="Expeirence You Have"
                        variant="outlined"
                        value={experiencehave}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      >
                        <MenuItem value="Less then 1 Year">
                          Less then 1 Year
                        </MenuItem>
                        <MenuItem value="More then 1 Year">
                          More then 1 Year{" "}
                        </MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{ marginBottom: "16px" }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        name="worktype"
                        fullWidth={true}
                        size="small"
                        label="Choose Work Type"
                        variant="outlined"
                        value={worktype}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      >
                        <MenuItem value="Internship">Internship</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                        <MenuItem value="Full Time">Full Time</MenuItem>
                      </TextField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="expected"
                        type="number"
                        fullWidth={true}
                        size="small"
                        label="Expected Salary"
                        variant="outlined"
                        value={expected}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    component={Box}
                    justify="flex-end"
                    mt={2}
                    p={2}
                  >
                    <Box ml={2}>
                      {" "}
                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth={false}
                        onClick={() => navigation.previous()}
                      >
                        Back
                      </Button>
                    </Box>
                    <Box ml={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth={false}
                        onClick={() => navigation.next()}
                      >
                        Finish
                      </Button>
                    </Box>
                  </Grid>
                </Paper>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Stepp3;

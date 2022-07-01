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

const Stepp2 = ({ formmData, setFormmData, navigation }) => {
  const classes = styles();
  const steps = [
    { label: "Personal Bio" },
    { label: "Educational" },
    { label: "Professional" },
  ];
  const { qualification, college, passingyear, jobapply } = formmData;
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
                      A Bit About Education
                    </Typography>
                  </Box>

                  <Grid container spacing={1} style={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        name="qualification"
                        fullWidth={true}
                        size="small"
                        label="Qualification Degree"
                        variant="outlined"
                        value={qualification}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      >
                        <MenuItem value="Graduation">Graduation</MenuItem>
                        <MenuItem value="B.Tech">B.Tech</MenuItem>
                        <MenuItem value="BCA Course">BCA Course</MenuItem>
                        <MenuItem value="M.Tech">M.Tech</MenuItem>
                        <MenuItem value="MCA">MCA</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="college"
                        type="text"
                        fullWidth={true}
                        size="small"
                        label="College Name"
                        variant="outlined"
                        value={college}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="passingyear"
                        type="number"
                        fullWidth={true}
                        size="small"
                        label="Passign Year"
                        variant="outlined"
                        value={passingyear}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        type="number"
                        name="jobapply"
                        fullWidth={true}
                        size="small"
                        label="CGPA"
                        variant="outlined"
                        value={jobapply}
                        onChange={setFormmData}
                        color="primary"
                        autoComplete="off"
                      ></TextField>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    component={Box}
                    justify="flex-end"
                    mt={2}
                    p={2}
                  >
                    <Box>
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
                      {" "}
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth={false}
                        onClick={() => navigation.next()}
                      >
                        Next
                      </Button>{" "}
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

export default Stepp2;

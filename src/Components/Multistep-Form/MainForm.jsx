import React from "react";
import "../Multistep-Form/MainForm.css";
import {
  Grid,
  makeStyles,
  Box,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import FinalStep from "./Steps/FinalStep";

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
  formTitle: {
    color: "#6699CC",
    textAlign: "center",
    margin: "10px 0px 30px 0px",
  },
});

const MainForm = () => {
  const classes = styles();
  const steps = [
    { label: "Personal Bio" },
    { label: "Educational" },
    { label: "Professional" },
  ];

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
              </Paper>
              <Step1 />
              <Step2 />
              <Step3 />
              <FinalStep/>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainForm;

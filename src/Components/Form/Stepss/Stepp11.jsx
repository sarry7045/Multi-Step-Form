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

const Stepp11 = ({ formmData, setFormmData, navigation }) => {
  const classes = styles();
  const steps = [
    { label: "Personal Bio" },
    { label: "Educational" },
    { label: "Professional" },
  ];

  const { homeaddress, city, country, zip } = formmData;

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
              <Paper style={{ padding: "16px" }}>
                <Box mt={2} mb={2}>
                  <Typography
                    color="primary"
                    align="center"
                    variant="h6"
                    style={{ marginBottom: "30px" }}
                  >
                    Your Current Address
                  </Typography>
                </Box>

                <Grid container spacing={1} style={{ marginBottom: "20px" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="homeaddress"
                      autoComplete="off"
                      fullWidth={true}
                      size="small"
                      label="Street Address"
                      variant="outlined"
                      value={homeaddress}
                      onChange={setFormmData}
                      color="primary"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      name="city"
                      fullWidth={true}
                      size="small"
                      label="City"
                      variant="outlined"
                      value={city}
                      onChange={setFormmData}
                      color="primary"
                      autoComplete="off"
                    >
                      <MenuItem value="Mumbai">Mumbai</MenuItem>
                      <MenuItem value="Bangalore">Bangalore</MenuItem>
                      <MenuItem value="Karnataka">Karnataka</MenuItem>
                      <MenuItem value="Hyderbad">Hyderbad</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={1} style={{ marginBottom: "16px" }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      name="country"
                      fullWidth={true}
                      size="small"
                      label="Country"
                      variant="outlined"
                      value={country}
                      onChange={setFormmData}
                      color="primary"
                      autoComplete="off"
                    >
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="England">England</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="number"
                      name="zip"
                      fullWidth={true}
                      size="small"
                      label="Zip Code"
                      variant="outlined"
                      value={zip}
                      onChange={setFormmData}
                      color="primary"
                      autoComplete="off"
                    ></TextField>
                  </Grid>
                </Grid>

                <Grid container component={Box} justify="flex-end" mt={2} p={2}>
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
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Stepp11;

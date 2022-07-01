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
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
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

const Stepp1 = ({ formmData, setFormmData, navigation }) => {
  const classes = styles();
  const steps = [
    { label: "Personal Bio" },
    { label: "Educational" },
    { label: "Professional" },
  ];

  const { firstName, lastName, gender, phone, email, role } = formmData;

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Mus be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Mus be 15 characters or less")
      .required("Required"),
    gender: Yup.string().required("Required"),
    role: Yup.string().required("Role is Required"),
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    phone: Yup.number()
      .required("Phone is Required")
      .min(10, "Altest 10 Digit"),
  });

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
                    Please Fill Personal Data
                  </Typography>
                </Box>
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    gender: "",
                    role: "",
                    phone: "",
                    email: "",
                  }}
                  validationSchema={validate}
                >
                  <Form>
                    <Grid
                      container
                      spacing={1}
                      style={{ marginBottom: "20px" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="text"
                          name="firstName"
                          autoComplete="off"
                          fullWidth={true}
                          size="small"
                          label="First Name"
                          variant="outlined"
                          value={firstName}
                          onChange={setFormmData}
                          color="primary"
                        />
                        <p className="text-danger">
                          {" "}
                          <ErrorMessage name="firstName" />{" "}
                        </p>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="lastName"
                          type="text"
                          fullWidth={true}
                          size="small"
                          label="Last Name"
                          variant="outlined"
                          value={lastName}
                          onChange={setFormmData}
                          color="primary"
                          autoComplete="off"
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      style={{ marginBottom: "16px" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          select
                          name="gender"
                          fullWidth={true}
                          size="small"
                          label="Gender"
                          variant="outlined"
                          value={gender}
                          onChange={setFormmData}
                          color="primary"
                          autoComplete="off"
                        >
                          <MenuItem value="Male">Male</MenuItem>
                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          select
                          name="role"
                          fullWidth={true}
                          size="small"
                          label="Role"
                          variant="outlined"
                          value={role}
                          onChange={setFormmData}
                          color="primary"
                          autoComplete="off"
                        >
                          <MenuItem value="Fresher">Fresher</MenuItem>
                          <MenuItem value="Experienced">Experienced</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      style={{ marginBottom: "16px" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="phone"
                          type="number"
                          fullWidth={true}
                          size="small"
                          label="Phone"
                          variant="outlined"
                          value={phone}
                          onChange={setFormmData}
                          color="primary"
                          autoComplete="off"
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
                          value={email}
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
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth={false}
                        onClick={() => navigation.next()}
                      >
                        Next{" "}
                      </Button>
                    </Grid>
                  </Form>
                </Formik>
              </Paper>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Stepp1;

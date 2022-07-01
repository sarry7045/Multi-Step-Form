import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";

const FinalStep = () => {
  return (
    <>
      <Paper style={{ padding: "16px" }}>
        <Box mt={2} mb={2}>
          <Typography variant="h6" color="primary" align="center">
            Your Submitted Data{" "}
          </Typography>
        </Box>

        {JSON.stringify()}
      </Paper>
    </>
  );
};

export default FinalStep;

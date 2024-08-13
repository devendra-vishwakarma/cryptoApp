import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  FormControl,
} from "@mui/material";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to server)
    localStorage.setItem("user", JSON.stringify(formData));
    console.log("Form data:", formData);
  };

  return (
    <div className="d-flex align-item-center justify-content-center">
      <div
        style={{
          width: "30%",
          padding: "2rem",
          boxShadow: "0px 4px 20px #77DD77",
          borderRadius: "16px",
        }}
        className="d-flex align-item-center justify-content-center mt-5"
      >
        <Container
          maxWidth="xs"
          className="d-flex justify-content-center align-item-center"
        >
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography variant="h5" gutterBottom className="mb-3">
              <span
                style={{
                  color: "#77DD77",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                Sign Up
              </span>
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0px 0px 0px #77DD77",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#77DD77",
                          borderRadius: "16px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#999", // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#77DD77", // Green label color when focused
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#77DD77", // Green placeholder color
                        opacity: 1,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0px 0px 0px #77DD77",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#77DD77",
                          borderRadius: "16px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#999", // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#77DD77", // Green label color when focused
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#77DD77", // Green placeholder color
                        opacity: 1,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0px 0px 0px #77DD77",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#77DD77",
                          borderRadius: "16px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#999", // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#77DD77", // Green label color when focused
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#77DD77", // Green placeholder color
                        opacity: 1,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                      boxShadow: "0px 0px 0px #77DD77",
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#77DD77",
                          borderRadius: "16px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#999", // Default label color
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#77DD77",
                        fontWeight:"bold" // Green label color when focused
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#77DD77", // Green placeholder color
                        opacity: 1,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="p-2"
                  fullWidth
                  style={{
                    background: "#34B335",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default SignupForm;

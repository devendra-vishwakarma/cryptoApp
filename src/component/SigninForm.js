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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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

    // Validate fields
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    // Handle form submission (e.g., check credentials)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      toast.success("Sign In Successful!");
      // Redirect or further actions here
    } else {
      toast.error("Invalid credentials");
    }
    setTimeout(() => {
      navigate("/")
    }, 500)
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
                Sign In
              </span>
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={!!errors.email}
                    helperText={errors.email}
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
                    error={!!errors.password}
                    helperText={errors.password}
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
                        fontWeight: "bold", // Green label color when focused
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
                  Sign In
                </Button>
                <Button
                  onClick={()=>{navigate("/signUp")}}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="p-2 mt-2"
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
      <ToastContainer />
    </div>
  );
};

export default SignInForm;

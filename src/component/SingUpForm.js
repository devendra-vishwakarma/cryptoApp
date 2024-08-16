import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  FormControl,
  makeStyles,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator"; // Import validator for email validation
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  // const useStyles = makeStyles(() => ({
  //   banner: {
  //     backgroundImage: 'url(./SignUpImage.jpg)',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     height: '100vh',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  // }));

  // const classes = useStyles();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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
    useEffect(() => {
      axios.post("http://localhost:3000/signIn", formData);
    }, [])
    e.preventDefault();

    // Validate fields
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validator.isEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission if there are errors
    }

    // Handle form submission (e.g., send to server)
    localStorage.setItem("user", JSON.stringify(formData));
    console.log("Form data:", formData);

    // Clear errors after successful submission
    setErrors({});

    // Display success message
    toast.success("Sign Up Successful!");

    setTimeout(() => { navigate("/signIn") }, 1000)
  };

  return (
    <div className='d-flex align-item-center justify-content-around' style={{ backgroundImage: "url(./banner2.jpg)", backgroundRepeat: "none", padding: "5rem", border: "1px solid white" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "4rem" }}>Welcome To Crypto <span style={{ color: "gold" }}>WORLD</span></h1>
      </div>
      <div
        style={{
          width: "35%",
          padding: "2rem",
          boxShadow: "0px 4px 20px #77DD77",
          borderRadius: "16px",
        }}
        className="d-flex align-item-center justify-content-center mt-3"
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
                    error={!!errors.firstName}
                    helperText={errors.firstName}
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
                        color: "#77DD77", // Default label color
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
                    error={!!errors.lastName}
                    helperText={errors.lastName}
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
                        color: "#77DD77", // Default label color
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
                        color: "#77DD77", // Default label color
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
                        color: "#77DD77", // Default label color
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
                  Sign Up
                </Button>
                <Button
                  onClick={() => { navigate("/signIN") }}
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
                  Sign In
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

export default SignupForm;

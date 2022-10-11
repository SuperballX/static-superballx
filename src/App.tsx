import React, { useEffect, useState } from "react";
import "./App.scss";
import AppBar from "@mui/material/AppBar";
import ellipseImg from "../src/assets/Ellipse 41.svg";
import payWithCryptoImage from "../src/assets/receipt-2.svg";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Toolbar,
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Footer from "./components/layout/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Encode Sans",
  },
});

function App() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [windowSize, setWindowSize] = useState<number>();

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const url = "https://api.sendinblue.com/v3/contacts";

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.REACT_APP_SENDINBLUE_API_KEY as string,
    },
    body: JSON.stringify({
      email: email,
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [36],
      updateEnabled: false,
      smtpBlacklistSender: ["user@example.com"],
    }),
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    if (!email || email) {
      setError("");
    }
  };

  const subscribeUser = async () => {
    const sub = await fetch(url, options);
    const user = await sub.json();
    if (user.message) {
      toast.error("Something went wrong! Please try again.");
    } else {
      toast.success("Subscribed.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      setError("Email is required!");
    } else if (!emailRegex.test(email)) {
      setError("Email is incorrect!");
    } else {
      subscribeUser();
      setEmail("");
    }
  };

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return (
    <>
      <ToastContainer autoClose={5000} />
      <ThemeProvider theme={theme}>
        <div className="landing-page">
          <AppBar className="appbar">
            <Container maxWidth="lg" disableGutters>
              <Toolbar>
                <Typography className="title">SUPERBALL X</Typography>
              </Toolbar>
            </Container>
          </AppBar>
          <Container maxWidth="lg" className="intro-section">
            <Stack className="intro-container">
              <Box>
                <Typography className="intro-heading-1">
                  Play now to win
                </Typography>
                <Typography className="intro-heading-2">£30,000</Typography>
                <Typography className="intro-heading-3">
                  in cash/crypto
                </Typography>
                <Typography className="intro-heading-4">
                  One person is guaranteed to win it - and that could be{" "}
                  <span className="you">you!</span>
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Box className="form-container">
                    <div className="validation-container">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="email"
                        value={email}
                        onChange={handleChange}
                      />
                      <span style={{ color: "brown" }}>{error}</span>
                    </div>
                    <div className="subscribe-button-container">
                      <Button type="submit" className="subscribe-button">
                        Subscribe
                      </Button>
                    </div>
                    {typeof windowSize !== "undefined" && windowSize <= 760 && (
                      <div className="crypto-image-container">
                        <img
                          src={payWithCryptoImage}
                          className="crypto-image-mobile"
                          alt="crypto"
                        />
                        <div className="mobile-view-content">
                          <Typography className="value">£1</Typography>
                          <Typography className="pay">
                            or pay with crypto
                          </Typography>
                        </div>
                      </div>
                    )}
                  </Box>
                </form>
              </Box>

              <Box>
                <Box sx={{ borderRadius: "200px" }}>
                  <img src={ellipseImg} className="first-ellipse" alt="ball"/>
                  <img src={ellipseImg} className="second-ellipse" alt="ball"/>
                  <img src={ellipseImg} className="third-ellipse" alt="ball"/>
                  {typeof windowSize !== "undefined" && windowSize > 760 && (
                    <div className="crypto-image-container">
                      <img
                        src={payWithCryptoImage}
                        className="crypto-image-desktop"
                        alt="crypto"
                      />
                      <Typography className="value">£1</Typography>
                      <Typography className="pay">
                        or pay with crypto
                      </Typography>
                    </div>
                  )}
                </Box>
              </Box>
            </Stack>
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

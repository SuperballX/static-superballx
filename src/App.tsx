import React, { useEffect, useState } from "react";
import "./App.scss";
import AppBar from "@mui/material/AppBar";
import ellipseImg from "../src/assets/Ellipse 41.png";
import payWithCryptoImage from "../src/assets/Frame 7843.png";
import payWithCryptoImageMobile from "../src/assets/Frame 7965.png";
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
  const [cryptoImage, setCryptoImage] = useState<string>(payWithCryptoImage);

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const url = "https://api.sendinblue.com/v3/contacts";
  const apiKey =
    "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";

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
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
    if (typeof windowSize !== "undefined") {
      if (windowSize <= 760) {
        setCryptoImage(payWithCryptoImageMobile);
      } else {
        setCryptoImage(payWithCryptoImage);
      }
    }
  }, [windowSize]);

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
                        placeholder="Email@example.com"
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
                  </Box>
                </form>
              </Box>

              <Box position={"relative"} mt={2}>
                <Box>
                  <img src={ellipseImg} className="first-ellipse" />
                  <img src={ellipseImg} className="second-ellipse" />
                  <img src={ellipseImg} className="third-ellipse" />
                  <img src={cryptoImage} className="crypto-image" />
                </Box>
              </Box>
            </Stack>
          </Container>
        </div>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;

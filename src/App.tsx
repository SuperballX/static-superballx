import React, { useEffect, useState } from "react";
import "./App.scss";
import AppBar from "@mui/material/AppBar";
import logoImage from "../src/assets/Superball X.png";
import bgImage from "../src/assets/bg.png";
import ellipseImg from "../src/assets/Ellipse 41.png";
import payWithCryptoImage from "../src/assets/Frame 7843.png";
import payWithCryptoImageMobile from "../src/assets/Frame 7965.png";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Toolbar,
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Encode Sans",
  },
});

function App() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const handleChange = (e: any) => {
    setEmail(e.target.value);
    if (!email || email) {
      setError("");
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      setError("Email is required!");
    } else if (!emailRegex.test(email)) {
      setError("Email is incorrect!");
    } else {
      alert("valid");
    }
  };

  const [windowSize, setWindowSize] = useState<number>();
  const [cryptoImage, setCryptoImage] = useState<string>(payWithCryptoImage);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    console.log("a");
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
    <ThemeProvider theme={theme}>
      <div className="landing-page">
        <AppBar className="appbar">
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <img src={logoImage} />
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg" className="intro-section">
          <Stack className="intro-container">
            <Box>
              <Typography className="intro-heading-1">
                Play now to win
              </Typography>
              <Typography
                sx={{
                  background:
                    "linear-gradient(100.21deg, #18F5F5 1.63%, #F5B7D2 25.71%, #E744F6 51.84%, #862DFB 71.31%, #00DBF9 100%), #FFFFFF;",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="intro-heading-2"
              >
                £30,000
              </Typography>
              <Typography
                className="intro-heading-3"
                sx={{
                  background:
                    "linear-gradient(100.21deg, #18F5F5 1.63%, #F5B7D2 25.71%, #E744F6 51.84%, #862DFB 71.31%, #00DBF9 100%), #FFFFFF;",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                in cash/crypto
              </Typography>
              <Typography className="intro-heading-4">
                One person is guaranteed to win it - and that could be{" "}
                <span className="you">you!</span>
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box className="form-container">
                  <input
                    type="text"
                    placeholder="Email@example.com"
                    // pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                    className="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <Box className="subscribe-button-container">
                    <Button type="submit" className="subscribe-button">
                      Subscribe
                    </Button>
                  </Box>
                </Box>
                <span style={{ color: "brown" }}>{error}</span>
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
  );
}

export default App;

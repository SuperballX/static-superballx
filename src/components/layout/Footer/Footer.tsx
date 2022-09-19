import { Box, Typography } from "@mui/material";
import "../Footer/Footer.scss";
import linkdinImg from "../../../assets/linkdin.png";
import twitterImg from "../../../assets/twitter.png";
import facebookImg from "../../../assets/facebook.png";
import discordImg from "../../../assets/discord.png";
import tiktokImg from "../../../assets/tiktok.png";
const Footer = () => {
  return (
    <>
      <Box className="footer-container">
        <Box className="footer-title-container">
          <Typography className="footer-title-text">SUPERBALL X</Typography>
        </Box>
        <Box className="footer-links-container">
          <img src={linkdinImg} />
          <img src={twitterImg} />
          <img src={facebookImg} />
          <img src={discordImg} />
          <img src={tiktokImg} />
        </Box>
        <Box className="copyright-container">
          <Typography className="copyright-text">
            2022 © Superball X. All rigts reserved{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

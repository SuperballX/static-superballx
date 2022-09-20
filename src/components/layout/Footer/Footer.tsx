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
          <Typography className="text">
            Superball X Limited is a company registered in Scotland with the
            company number SC737654.
          </Typography>
          <Typography className="text">
            Superball X Limited's trading names are superballx.co.uk and
            superballx.com
          </Typography>
          <Typography className="text">
            Contact us by post at 272 Bath Street, Glasgow, G2 4JR, Scotland or
            by emailing gavin@superballx.com
          </Typography>
          <Typography className="text">
            2022 © Superball X. All rigts reserved{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

import { Box, Typography } from "@mui/material";
import "../Footer/Footer.scss";
import linkdinImg from "../../../assets/linkdin.png";
import twitterImg from "../../../assets/twitter.png";
import facebookImg from "../../../assets/facebook.png";
import discordImg from "../../../assets/discord.png";
import tiktokImg from "../../../assets/tiktok.png";

interface FooterLink {
  link: string;
  image?: string;
}

const footerLinks: FooterLink[] = [
  {
    link: "https://www.linkedin.com/company/superball-x/",
    image: linkdinImg,
  },
  {
    link: "https://www.facebook.com/SuperballX",
    image: facebookImg,
  },
  {
    link: "https://twitter.com/x_superball",
    image: twitterImg,
  },
  {
    link: "https://www.instagram.com/superballx/",
    image: discordImg,
  },
  {
    link: "https://www.reddit.com/user/SuperballX",
    image: tiktokImg,
  },
  {
    link: "https://www.instagram.com/superballx/",
    image: "",
  },
  {
    link: "https://www.reddit.com/user/SuperballX",
    image: "",
  },
];

const Footer = () => {
  return (
    <>
      <Box className="footer-container">
        <Box className="footer-title-container">
          <Typography className="footer-title-text">SUPERBALL X</Typography>
        </Box>
        <Box className="footer-links-container">
          {footerLinks.map((item, index) => {
            return (
              <a key={index} href={item.link} target="_blank">
                {item.image ? (
                  <img src={item.image} />
                ) : (
                  <div className="emptyImage"></div>
                )}
              </a>
            );
          })}
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

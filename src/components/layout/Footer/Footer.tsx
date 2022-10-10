import { Box, Typography, Container } from "@mui/material";
import "../Footer/Footer.scss";
import linkdinImg from "../../../assets/linkdein.svg";
import twitterImg from "../../../assets/twitter.svg";
import facebookImg from "../../../assets/facebook.svg";
import discordImg from "../../../assets/discord.svg";
import tiktokImg from "../../../assets/tiktok.svg";
import instagramImg from "../../../assets/instagram.svg";
import redditImg from "../../../assets/reddit.svg";
import telegramImg from "../../../assets/telegram.svg";

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
    image: instagramImg,
  },
  {
    link: "https://www.reddit.com/user/SuperballX",
    image: redditImg,
  },
  {
    link: "https://t.me/+1pthDP1jxGwxZGRk",
    image: telegramImg,
  },
  {
    link: "https://discord.gg/RKB2BvmdMW",
    image: discordImg,
  },
  {
    link: "http://www.tiktok.com/@superballx",
    image: tiktokImg,
  },
];

const Footer = () => {
  return (
    <>
      <Box className="footer-container">
        <Box className="footer-links-container">
          {footerLinks.map((item, index) => {
            return (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <img className="icon-image" src={item.image} alt="icon"/>
              </a>
            );
          })}
        </Box>
        <Container maxWidth="lg" className="copyright-container">
          <Typography className="text">
            Superball X Limited is a company registered in Scotland with the
            company number SC737654. Superball X Limited's trading names are
            superballx.co.uk and superballx.com. Contact us by post at 272 Bath
            Street, Glasgow, G2 4JR, Scotland or by emailing{" "}
            <a className="email" href="mailto:gavin@superballx.com">
              gavin@superballx.com.
            </a>{" "}
            2022 © Superball X. All rigts reserved.{" "}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

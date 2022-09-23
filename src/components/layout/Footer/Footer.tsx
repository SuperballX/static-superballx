import { Box, Typography, Container } from "@mui/material";
import "../Footer/Footer.scss";
import linkdinImg from "../../../assets/linkdin.png";
import twitterImg from "../../../assets/twitter.png";
import facebookImg from "../../../assets/facebook.png";
import discordImg from "../../../assets/discord.png";
import tiktokImg from "../../../assets/tiktok.png";
import instagramImg from "../../../assets/instagram.png";
import redditImg from "../../../assets/reddit.png";
import telegramImg from "../../../assets/telegram.png";

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
    link: "https://www.reddit.com/user/SuperballX",
    image: telegramImg,
  },
  {
    link: "https://www.reddit.com/user/SuperballX",
    image: discordImg,
  },
  {
    link: "https://www.reddit.com/user/SuperballX",
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
              <a key={index} href={item.link} target="_blank">
                <img className="icon-image" src={item.image} />
              </a>
            );
          })}
        </Box>
        <Container maxWidth="lg" className="copyright-container">
          <Typography className="text">
            Superball X Limited is a company registered in Scotland with the
            company number SC737654. Superball X Limited's trading names are
            superballx.co.uk and superballx.com Contact us by post at 272 Bath
            Street, Glasgow, G2 4JR, Scotland or by emailing
            gavin@superballx.com
          </Typography>
          <Typography className="text">
            2022 © Superball X. All rigts reserved{" "}
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

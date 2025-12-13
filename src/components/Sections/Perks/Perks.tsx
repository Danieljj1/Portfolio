import { Box, Container, Typography, Divider } from "@mui/material";
import PerkCard from "./PerkCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import HandymanIcon from "@mui/icons-material/Handyman";
import HttpIcon from "@mui/icons-material/Http";
import DevicesIcon from "@mui/icons-material/Devices";

export const centeredStyles = {
  alignItems: "center",
  textAlign: "center",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

gsap.registerPlugin(ScrollTrigger);

const perksArray = [
  {
    title: "Continuous support",
    Icon: HandymanIcon,
    text: "I provide long-term application support to ensure stability, security, and performance as systems evolve. Whether it is updates, troubleshooting, enhancements, or documentation, I take a proactive approach to keep projects running smoothly. My goal is to maintain reliability and deliver lasting value.",
  },
  {
    title: "Back-end development",
    text: "I develop efficient and scalable backend services that handle data securely and reliably. My experience includes building RESTful APIs, integrating databases, and optimizing server performance. I focus on clean architecture and maintainable code for long-term growth.",
    Icon: HttpIcon,
  },
  {
    title: "Frontend design/dev",
    Icon: DevicesIcon,
    text: "I create responsive, accessible, and modern interfaces that turn complex ideas into intuitive user experiences. My approach blends strong UI design with functional, well-structured code. I aim to deliver visually appealing frontends that feel smooth and engaging to users.",
  },
];
const Perks = () => {
  useEffect(() => {
    MainTitleAnimation(".h1", ".h2");
  }, []);

  return (
    <>
      {" "}
      <Container
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          my: "4em",
        }}
      >
        <Box sx={centeredStyles}>
          <Typography
            className="h1 t25o0"
            variant="h1"
            sx={{
              fontSize: {
                xs: "2.2em",
                sm: "2.5em",
                md: "3em",
              },
            }}
            fontWeight="600"
          >
            Expect Quality Work
          </Typography>
          <Typography
            variant="h2"
            className="secondary h2"
            sx={{
              pt: "1.5em",
              transform: "translateY(15px)",
              opacity: 0,
              maxWidth: "570px",
              fontSize: {
                xs: ".8em",
                sm: "1em",
              },
            }}
          >
            Customer satisfaction is very important, there are many skills that
            I have learned in order to properly provide quality service.
          </Typography>

          <Box
            sx={{
              mt: "3em",
              display: "flex",
              flexWrap: "wrap",
              gap: "5%",
              justifyContent: {
                xs: "center",
                sm: "space-between",
              },
            }}
          >
            {perksArray.map((perk) => {
              return (
                <PerkCard
                  key={perk.title}
                  title={perk.title}
                  text={perk.text}
                  Icon={perk.Icon}
                />
              );
            })}
          </Box>
        </Box>
      </Container>{" "}
      <Divider />{" "}
    </>
  );
};

export default Perks;

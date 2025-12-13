import { Box, Typography, Button } from "@mui/material";
import { useRef } from "react";
import { IProjectCard } from "../../../Types/Types";
import { btnStyles } from "../Hero/Hero";

const ProjectCard = ({
  isReversed,
  img,
  className,
  repoUrl,
  siteUrl,
  title,
  description,
}: IProjectCard) => {
  const ref = useRef(null);

  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        my: { xs: "0em", sm: "1em", md: "3em" },
        flexDirection: {
          xs: "column",
          md: isReversed ? "row" : "row-reverse",
        },
        alignItems: "center",

        transform: "none",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "600px" },
          minWidth: { xs: "auto", sm: "250px", md: "390px" },
          height: "400px",
          position: "relative",
        }}
      >
        <img alt="Project Image" className="img1" src={img} />
      </Box>

      <Box
        ref={ref}
        sx={{
          // ✅ remove tilt + hover transform entirely
          transition: "none",
          borderRadius: "6px",
          width: { xs: "94%", md: "auto" },
          position: "relative",
          transform: {
            xs: "translateY(-25%)",
            md: isReversed ? "translateX(-25%)" : "translateX(25%)",
          },
          maxWidth: "600px",
          padding: "2em 1.5em",
          textAlign: "left",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          background: "white",
          color: "black",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            color="black"
            sx={{ fontSize: "1.4em", fontWeight: "500", pb: ".25em" }}
          >
            {title}
          </Typography>

          <Typography
            color="black"
            variant="h3"
            sx={{
              fontSize: { xs: ".83em", sm: ".9em" },
              fontWeight: "300",
            }}
          >
            {description}
          </Typography>

          <Box
            sx={{ gap: ".5em", display: "flex", flexWrap: "wrap", mt: "1em" }}
          >
            <a href={siteUrl} rel="noreferrer" target="_blank">
              <Button
                variant="contained"
                sx={{
                  ...btnStyles,
                  padding: ".5em .8em",
                  color: "white",
                  border: "1px solid #ff8c00ff",
                }}
              >
                <Typography fontSize="12px">Live Site</Typography>
              </Button>
            </a>

            <a href={repoUrl} rel="noreferrer" target="_blank">
              <Button
                variant="text"
                sx={{
                  ...btnStyles,
                  padding: ".5em .8em",
                  color: "#ff8c00ff",
                  ":hover": { color: "#ff8c00ff" },
                }}
              >
                <Typography fontSize="12px">Check Code</Typography>
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;

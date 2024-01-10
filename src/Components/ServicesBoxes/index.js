import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const ServiceBox = ({ title, subtitle, renderTitle, image, to, classes }) => {
  const srvImage = `assets/images/services/${image}`;
  return (
    <Grid item xs={6} md={4} className={classes.serviceBox}>
      <Link to={to}>
        {renderTitle && (
          <Box className={classes.serviceTitleContainer}>
            <Typography className={classes.serviceTitle}>{title}</Typography>
            <Typography className={classes.serviceSubtitle}>
              {subtitle}
            </Typography>
            <Box display="block" m={0} className={classes.serviceTitleBorder} />
          </Box>
        )}
        <img src={srvImage} alt={title} height={"252px"} />
      </Link>
    </Grid>
  );
};

const ServicesBoxes = ({ services }) => {
  const classes = useStyles();
  return (
    <Box className={classes.servicesBoxes}>
      <h2>OPCIONES DE SERVICIOS</h2>
      <Grid
        className={classes.servicesGrid}
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {services.map((srv, inx) => {
          return <ServiceBox key={`srv${inx}`} {...srv} classes={classes} />;
        })}
      </Grid>
    </Box>
  );
};

export default ServicesBoxes;

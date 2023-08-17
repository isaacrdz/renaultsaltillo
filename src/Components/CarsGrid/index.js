import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const CarBox = ({ id, title, image, to, classes }) => {
  const history = useHistory();

  const onCarClick = () => {
    history.push(`/vehiculos/${to}`);
  };

  const carImage = `assets/images/cars/${image}.jpg`;
  return (
    <Grid item xs={6} md={4} className={classes.carItem}>
      <Box className={classes.carCard} onClick={onCarClick}>
        <img src={carImage} alt={title} />
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Grid>
  );
};

const CarsGrid = ({ cars }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      className={classes.carsGrid}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      {cars.map((car, inx) => {
        return <CarBox key={`car${inx}`} {...car} classes={classes} />;
      })}
    </Grid>
  );
};

export default CarsGrid;

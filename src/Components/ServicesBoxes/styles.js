import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  servicesBoxes: {
    background: "#efefef",
    overflow: "hidden",
    padding: "1rem",
    "& h2": {
      textAlign: "center",
    },
  },
  servicesGrid: {
    margin: "auto",
    maxWidth: "1200px",
  },
  serviceBox: {
    position: "relative",
    textAlign: "center",
    cursor: "pointer",
    "& img": {
      width: "100%",
    },
  },
  serviceTitle: {
    textAlign: "left",
    color: "white",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "20px",
    marginTop: "11px",
    marginLeft: "11px",
  },

  serviceSubtitle: {
    textAlign: "left",
    color: "white",
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "20px",
    marginLeft: "11px",
  },
  serviceTitleBorder: {
    marginTop: "5px",
    marginLeft: "11px",
    borderBottom: "solid 1.5px #e2c025",
    width: "20px",
  },
  serviceTitleContainer: {
    position: " absolute",
    width: "392.01px",
    height: "251.99px",
    backgroundColor: "#00000040",
  },
});

export default useStyles;

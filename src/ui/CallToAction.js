import React from "react";
import ReactGA from "react-ga";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  learnButtonHero: {
    // ...theme.typography.learnButton,
    borderColor: 'white',
    borderWidth: 2,
    textTransform: 'none',
    color: 'white',
    borderRadius: 50,
    fontWeight: 'bold',
    fontSize: "0.9rem",
    borderRadius: 50,
    height: 45,
    width: 145
  },
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
      backgroundAttachment: "inherit"
    }
  },
  // estimateButton: {
  //   ...theme.typography.estimate,
  //   borderRadius: 50,
  //   height: 80,
  //   width: 205,
  //   backgroundColor: theme.palette.common.orange,
  //   fontSize: "1.5rem",
  //   marginRight: "5em",
  //   marginLeft: "2em",
  //   "&:hover": {
  //     backgroundColor: theme.palette.secondary.light
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     marginLeft: 0,
  //     marginRight: 0
  //   }
  // }
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit"
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h2"
              gutterBottom
              style={{ lineHeight: matchesSM ? 1.1 : null }}
            >
              Simple Software.
              {matchesSM && <br />}
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" }}
            >
              Make a technology splash.
            </Typography>
            <Grid container justify={matchesSM ? "center" : undefined} item>
            <Button
                  component={Link}
                  href="/splash"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 , color: 'white'}}>Learn More</span>
                </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item>
        <Button
          component={Link}
          href="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => {
            props.setValue(5);
            ReactGA.event({
              category: "Estimate",
              action: "Call to Action Pressed"
            });
          }}
        >
          Free Estimate
        </Button>
      </Grid> */}
    </Grid>
  );
}

import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#FF9782',
    width: "100%",
   // zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: '2em',
    width: '2em',
    [theme.breakpoints.down('xs')]: {
      height: '1.5em',
      width: '1.5em',
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                href="/splash"
                className={classes.link}
              >
                A Tech Splash
              </Grid>
              {/* <Grid
                item
                component={Link}
                href="/customsoftware"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid> */}
              {/* <Grid
                item
                component={Link}
                href="/mobileapps"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                iOS/Android App Development
              </Grid> */}
              {/* <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                href="/websites"
                className={classes.link}
              >
                Website Development
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                href="/portfolio"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                My Portfolio
              </Grid>
              {/* <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                My Vision
              </Grid> */}
              {/* <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                My Technology
              </Grid> */}
              {/* <Grid
                item
                component={Link}
                href="/revolution"
                className={classes.link}
                onClick={() => props.setValue(2)}
              >
                My Process
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                href="/about"
                className={classes.link}
              >
                About Me
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ margin: 0 }}
            >
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                href="/contact"
                className={classes.link}
              >
                Contact Me
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt="black decorative slash"
        src="/assets/footerAdornment.svg"
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={'a'}
          href="https://www.github.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="github logo" src="/assets/github.svg" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="linkedin logo" src="/assets/linkedin.svg" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src="/assets/twitter.svg" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.dribbble.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="dribbble logo" src="/assets/dribbble.svg" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

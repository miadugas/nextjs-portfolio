import React from "react";
import ReactGA from "react-ga";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { blue } from "@material-ui/core/colors";

import CallToAction from "../src/ui/CallToAction";

import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(/assets/repeatingBackground.svg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "90%",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  buttonContainer2: {
    marginTop: "3em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    borderRadius: 50,
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  serviceContainer: {
    marginTop: "5em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  background: {
    backgroundImage: `url("/assets/hero.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/heromobile.png")`,
    },
  },
  heroText: {
    fontFamily: "Robot",
    fontWeight: 600,
    fontSize: "2rem",
    color: "black",
  },
  specialText: {
    fontFamily: "Roboto",
    fontWeight: 900,
    fontSize: "2.5rem",
    color: theme.palette.common.red,
  },
  icon: {
    height: "2em",
    width: "2em",
    [theme.breakpoints.down("sm")]: {
      height: "1.5em",
      width: "1.5em",
    },
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  },
  icon2: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("sm")]: {
      right: "0.6em",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
  card: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "1em",
    marginTop: "2.5em",
    marginRight: "2.5em",
    maxWidth: 345,
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
    >
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | MiaCodes
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use my free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Mountain Region | MiaCodes"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="miacodes.com" />
        <link rel="canonical" key="canonical" href="miacodes.com" />
      </Head>
      <Grid
        item
        container
        alignItems="center"
        justify={matchesSM ? "center" : "space-between"}
        className={classes.background}
      >
        {/*-----Hero Block-----*/}
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h1" align="center">
              I'm <span className={classes.specialText}>Mia</span>, a
              Colorado Developer
              <br />& I create{" "}
              <span className={classes.specialText}>Awesome!</span>
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => {
                    props.setValue(5);
                    ReactGA.event({
                      category: "Estimate",
                      action: "Home Page Pressed",
                    });
                  }}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/splash"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10, color: "black" }}>
                    Learn More
                  </span>
                  <ButtonArrow width={15} height={15} />
                </Button>
              </Grid>
              <Grid
                item
                container
                spacing={2}
                justify="center"
                style={{ margin: 10 }}
              >
                <Grid
                  item
                  component={"a"}
                  href="https://github.com/miadugas"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="github logo"
                    src="/assets/github.png"
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="https://twitter.com/miacodes"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="twitter logo"
                    src="/assets/twitter.png"
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="https://dribbble.com/MiaInBatcountry"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="dribbble logo"
                    src="/assets/dribbble.png"
                    className={classes.icon}
                  />
                </Grid>
                <Grid
                  item
                  component={"a"}
                  href="https://www.linkedin.com/in/miadugas/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="linkedin logo"
                    src="/assets/linkedin.png"
                    className={classes.icon}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----The Revolution Block-----*/}
        <Grid
          container
          style={{ height: "40em", marginTop: "1em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h1" gutterBottom>
                    The Technological Splash
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge
                    technology is a recipe for a technological.
                  </Typography>
                  <Button
                    style={{ marginTop: 10 }}
                    component={Link}
                    href="/portfolio"
                    className={classes.learnButtonHero}
                    variant="outlined"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10, color: "black" }}>
                      Portfolio
                    </span>
                  </Button>
                  <Button
                    style={{ marginTop: 10 }}
                    component={Link}
                    href="/splash"
                    className={classes.learnButtonHero}
                    variant="outlined"
                    onClick={() => props.setValue(3)}
                  >
                    <span style={{ marginRight: 10, color: "black" }}>
                      Learn More
                    </span>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <LazyLoadComponent threshold={850}>
            <div className={classes.revolutionBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Portfolio Block-----*/}
        <Grid
          container
          direction="column"
          style={{ padding: "40px" }}
          alignItems="center"
          className={classes.infoBackground}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              style={{ textAlign: "center" }}
            >
              <Grid item>
                <Typography variant="h2" style={{ color: "white" }}>
                  Portfolio of Work
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" style={{ color: "white" }}>
                  Simple Software. Revolutionary Results
                </Typography>
              </Grid>
              <br />
            </Grid>
          </Grid>

          {/*-----Card Block-1----*/}
          <Grid item>
            <Grid
              container
              direction="row"
              justify={matchesSM ? "center" : "flex-end"}
            >
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Tooltip title="AngularJS" placement="top">
                      <Avatar
                        src={
                          "https://pngimage.net/wp-content/uploads/2020/03/angular-8-logo-png-2.png"
                        }
                        aria-label="Loftz"
                      ></Avatar>
                    </Tooltip>
                  }
                  title="Loftz"
                  subheader="Jan 31, 2021"
                />
                <CardMedia
                  component="img"
                  height="194"
                  src="/assets/iloftz.png"
                  alt="loftz App"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Loftz
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    //color="textSecondary"
                    component="p"
                  >
                    This Native iOS app and well as Progressive Web
                    App is a hybrid AirBnB / Yelp app for couch
                    surfers where users can create accounts, user can
                    book and rate properties. Built using TypeScript,
                    Google Maps, Geocoding, Camera access, Firebase,
                    User Auth, Angular, Capacitor and the Ionic
                    Framework (Ionic 4+)
                  </Typography>
                </CardContent>
                <hr />
                <CardActions disableSpacing>
                  <Grid item container justify="center">
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button
                        size="small"
                        color="default"
                        href="https://github.com/miadugas/iLoftz_app"
                        target="_blank"
                      >
                        View Code
                      </Button>
                      <Button
                        size="small"
                        color="default"
                        href="https://iloftz.firebaseapp.com/auth"
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </CardActions>
              </Card>
              {/*-----Card Block 2-----*/}
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Tooltip title="React" placement="top">
                      <Avatar
                        src={
                          "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                        }
                        aria-label="tffa"
                      ></Avatar>
                    </Tooltip>
                  }
                  title="Tim Furlow Fine Art - Ecomm App"
                  subheader="August 7, 2021"
                />
                <CardMedia
                  component="img"
                  height="194"
                  src="/assets/tffa01.png"
                  alt="Tim Furlow Fine Art Store"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Tim Furlow Fine Art - Ecomm App
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    //color="textSecondary"
                    component="p"
                  >
                    Custom Ecommerce site for Tim Furlow Fine Art.
                    Includes an admin area to manage orders, users &
                    inventory. The client had a bad experiance with
                    Shopify so I was commissioned to build what
                    equates out to his own fully functional online
                    e-comm store with no monthly Shopify fees and
                    Paypal CC processing for max profit margin.
                    Payment processing through PayPal. Built using:
                    MongoDB, Mongoose, Node.js, React, NextJS, Next
                    Connect, React Hook Form Streamifier, Multer,
                    Cloudinary,MaterialUI, Dark Mode, PayPal developer
                    API.
                  </Typography>
                </CardContent>
                <hr />
                <CardActions disableSpacing>
                  <Grid item container justify="center">
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button
                        size="small"
                        color="default"
                        href="https://github.com/miadugas/timfurlow_artsite"
                        target="_blank"
                      >
                        View Code
                      </Button>
                      <Button
                        size="small"
                        color="default"
                        href="https://timfurlowfineart.vercel.app/"
                        target="_blank"
                      >
                        Live Demo
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </CardActions>
              </Card>
              {/*-----Card Block-3----*/}
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Tooltip title="ElectronJS" placement="top">
                      <Avatar
                        src={
                          "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
                        }
                        aria-label="GremlinTracker"
                      ></Avatar>
                    </Tooltip>
                  }
                  title="Gremlin Tracker"
                  subheader="February 10, 2021"
                />
                <CardMedia
                  component="img"
                  height="194"
                  src="/assets/gt.png"
                  alt="Gremlin Tracker App"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Gremlin Tracker - Desktop App
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    //color="textSecondary"
                    component="p"
                  >
                    ReactJS/ElectronJS client app that uses a MongoDB
                    Atlas database to keep track of system gremlins &
                    bugs for remote teams. I was commissioned to build
                    a production version of this app for multiple
                    users accross the country to be in synch while
                    logging system bugs. This app saves logs to
                    MongoDB with priority by using external access to
                    MongoDB Atlas. Built using: HTML, CSS, JavaScript,
                    ReactJS, ElectronJS, MongoDB Atlas React
                    Bootstrap, Moment.
                  </Typography>
                </CardContent>
                <hr />
                <CardActions disableSpacing>
                  <Grid item container justify="center">
                    <ButtonGroup
                      variant="contained"
                      color="primary"
                      aria-label="contained primary button group"
                    >
                      <Button
                        size="small"
                        color="default"
                        href="https://github.com/miadugas/Gremlin-Tracker"
                        target="_blank"
                      >
                        View Code
                      </Button>
                      <Button
                        size="small"
                        color="default"
                        href="https://drive.google.com/file/d/1nN-i4TijFGtrJksap0H0CVVsJCt1YakV/view?usp=sharing"
                        target="_blank"
                      >
                        Download Demo
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            justify="center"
            className={classes.buttonContainer2}
          >
            <Button
              style={{ background: "white" }}
              component={Link}
              href="/portfolio"
              className={classes.learnButtonHero}
              variant="outlined"
              onClick={() => props.setValue(2)}
            >
              <span style={{ color: "black" }}>See More</span>
            </Button>
          </Grid>
          <LazyLoadComponent threshold={700}>
            <div className={classes.infoBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>

      <Grid item>
        <LazyLoadComponent threshold={700}>
          {/*-----Call To Action Block-----*/}
          <CallToAction setValue={props.setValue} />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
}

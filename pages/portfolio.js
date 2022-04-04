import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";

import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    // position: "absolute",
    // zIndex: -1,
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  specialText: {
    //fontFamily: "Arimo",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
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

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Top Custom Software Development Services | MiaCodes
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Mountain Region | Services"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="miacodes.com/services"
        />
        <link
          rel="canonical"
          key="canonical"
          href="miacodes.com/services"
        />
      </Head>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.infoBackground}
      >
        {/*-----Portfolio Block-----*/}
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ padding: "40px" }}
            alignItems="center"
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
                    <hr />
                  </Typography>
                </Grid>
                <br />
              </Grid>
              <Grid
                item
                container
                justify="center"
                className={classes.rowContainer}
              >
                <Typography variant="subtitle2" align="center">
                  I have been working for over 5 years as a Full-Stack
                  Developer primarily with the MERN stack and I create
                  highly functional Front-end & Full-stack components.
                  Most of my recent work has been in private repos due
                  to work NDAs, agencies, etc. In a previous life I
                  was a finance professional and I love using those
                  analytical skills to craft clean code. I use that
                  principle to provide fast, modern, affordable, and
                  aesthetically pleasing software to the Mountain
                  Region and beyond.
                </Typography>
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
                      surfers where users can create accounts, user
                      can book and rate properties. Built using
                      TypeScript, Google Maps, Geocoding, Camera
                      access, Firebase, User Auth, Angular, Capacitor
                      and the Ionic Framework (Ionic 4+)
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
                    title="Tim Furlow Fine Art - Ecommerce App"
                    subheader="August 7, 2021"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/tffa01.png"
                    alt="Tim Furlow Fine Art - Ecommerce App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Tim Furlow Fine Art - Ecommerce App
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
                      Cloudinary,MaterialUI, Dark Mode, PayPal
                      developer API.
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
                      ReactJS/ElectronJS client app that uses a
                      MongoDB Atlas database to keep track of system
                      gremlins & bugs for remote teams. I was
                      commissioned to build a production version of
                      this app for multiple users accross the country
                      to be in synch while logging system bugs. This
                      app saves logs to MongoDB with priority by using
                      external access to MongoDB Atlas. Built using:
                      HTML, CSS, JavaScript, ReactJS, ElectronJS,
                      MongoDB Atlas React Bootstrap, Moment.
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
                {/* <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="React" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                          }
                          aria-label="SurveyMe"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="SurveyMe - Microservices App"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/prodview.png"
                    alt="survey App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      SurveyMe - Microservices App
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      A feedback collection application for small
                      business owners. User buys credits and can
                      create an email campaign survey to a list of
                      customers that they have entered. Campaign
                      results are tabulated and the user is provided
                      with a report of survey responses. Using Google
                      OAuth, NodeJS, ExpressJS, React & Redux,
                      MongoDB, PassportJS, Stripe payments, Redux
                      Forms, SendGrid.
                    </Typography>
                  </CardContent>
                  <hr />
                  <CardActions disableSpacing>
                    <Button
                      size="small"
                      color="default"
                      href="https://github.com/miadugas/surveyme"
                      target="_blank"
                    >
                      View Code
                    </Button>
                    <Button
                      size="small"
                      color="default"
                      href="https://calm-retreat-73954.herokuapp.com/"
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card> */}
              </Grid>
            </Grid>
            {/*-----Card Block-4----*/}
            <Grid item>
              <Grid
                container
                direction="row"
                justify={matchesSM ? "center" : "flex-end"}
              >
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="React" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                          }
                          aria-label="SurveyMe"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="SurveyMe - Microservices App"
                    subheader="July 3, 2021"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/prodview.png"
                    alt="survey App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      SurveyMe - Microservices App
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      A feedback collection application for small
                      business owners. User buys credits to create an
                      email campaign survey to send to a list of
                      customers that they have entered. Campaign
                      results are tabulated and the user is provided
                      with a report of survey responses. Using Google
                      OAuth, NodeJS, ExpressJS, React & Redux,
                      MongoDB, PassportJS, Stripe payments, Redux
                      Forms, SendGrid.
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
                          href="https://github.com/miadugas/surveyme"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://calm-retreat-73954.herokuapp.com/"
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>
                {/*-----Card Block-5----*/}
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="React" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                          }
                          aria-label="marbas"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="Marbas "
                    subheader="April 24, 2021"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/marbas.png"
                    alt="crypto App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Marbas
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      Cryptocurrency Dashboard built in React using
                      localStorage. Coin search provided by Fuzzy
                      search. User can add/remove coins on the list of
                      favorites. Generates dashboard prices &
                      historical data. User can line chart & render
                      historical points on Date: Days Weeks Months.
                      Built using: React, localStorage, CryptoCompare
                      API, Context API for State Management, Moment,
                      Styled Components, Fuzzy, CSS Grids, HighCharts,
                      Lodash.
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
                          href="https://github.com/miadugas/marbas"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://marbas.netlify.app/"
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>
                {/*-----Card Block 6-----*/}
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="Python" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/python-logo-png.png"
                          }
                          aria-label="PythonScraper"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="Python Scraper"
                    subheader="December 6, 2020"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/pyscrapper.png"
                    alt="PythonScraper"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Python Scraper
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      An Automated Python Web Scraping Bot for
                      financial data built with Beautiful Soup with
                      the ablity to send CSV of extracted info to a
                      desired email address. The CSV will be named for
                      the day created so that an archive can be kept
                      of the scrapped data.
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
                          href="https://github.com/miadugas/Scraper"
                          target="_blank"
                        >
                          View Code
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            {/*-----Card Block-7----*/}
            <Grid item>
              <Grid
                container
                direction="row"
                justify={matchesSM ? "center" : "flex-end"}
              >
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="React" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
                          }
                          aria-label="Muse"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="Muse Real Time Chat"
                    subheader="September 26, 2020"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/muse.png"
                    alt="survey App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Muse Real Time Chat
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      Realtime Jamstack chat application. A realtime
                      chat Jamstack application with server side
                      deployed to Heroku and client side deployed to
                      Netlify & Github. This standalone application
                      can be easily integrated into existing or new
                      builds. Built using: React, Nodejs, Expressjs,
                      SocketIO, Heroku, Netlify.
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
                          href="https://github.com/miadugas/Muze-Messenger"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://affectionate-shirley-f54a8b.netlify.com/"
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>
                {/* <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="AngularJS" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2020/03/angular-8-logo-png-2.png"
                          }
                          aria-label="SurveyMe"
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
                      App will be a hybrid AirBnB / Yelp app for couch
                      surfers where users can create accounts, book
                      and rate properties. Built using TypeScript,
                      Google Maps, Geocoding, Camera access, Firebase,
                      User Auth, with Angular, Capacitor and the Ionic
                      Framework (Ionic 4+)
                    </Typography>
                  </CardContent>
                  <hr />
                  <CardActions disableSpacing>
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
                  </CardActions>
                </Card> */}
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="JavaScript" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/logo-javascript-png-3.png"
                          }
                          aria-label="wd"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="Weather Dashboard"
                    subheader="October 13, 2019"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/WD.png"
                    alt="crypto App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Weather Dashboard
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      A weather dashboard using Openweather API to
                      retrieve weather data for desired cities. The
                      dashboard greets the user based on time of day
                      and displays the following current weather
                      conditions: City, Date, Icon image (visual
                      representation of weather conditions),
                      Temperature, Humidity, Wind speed & UV index
                      color coded for low, medium & high UV. Includes
                      a 5-Day Forecast below the current weather
                      conditions. Built using: HTML, CSS, JavaScript,
                      JQuery.
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
                          href="https://github.com/miadugas/Weather-Dashboard"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://miadugas.github.io/Weather-Dashboard/"
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
                    title="Pigeonhole"
                    subheader="January 11, 2020"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/phole.png"
                    alt="Pigeonhole"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Pigeonhole
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      Pigeonhole Where YOU rank, YOU write notes &
                      analyze what YOU love about an album and let our
                      algorithm do the rest. Our app was built on Zurb
                      Foundation, deployed to Heroku and uses the
                      Spotify API, mySQL database, and Sequelize to
                      organize YOUR music preferences. The application
                      is responsive, ensuring that it adapts to
                      multiple screen sizes. Mia Dugas: Front end -
                      Foundation framework & Frontend design.
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
                          href="https://github.com/miadugas/Pigeonhole"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://pigeonhole-music.herokuapp.com/"
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            {/*-----Card Block-8----*/}
            <Grid item>
              <Grid
                container
                direction="row"
                justify={matchesSM ? "center" : "flex-end"}
              >
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="NodeJS" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/node-logo-png-3.png"
                          }
                          aria-label="CodeCamperAPI-Backend"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="CodeCamper API - Backend"
                    subheader="September 11, 2020"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/codecamperapi.jpeg"
                    alt="survey App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      CodeCamper API - Backend
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      A 35 route backend API for CodeCamper
                      application which is a Backend API for the
                      CodeCamper application, a bootcamp directory
                      website offering maximum API security. Node.js
                      app built using PM2, NGINX as a reverse proxy
                      and a SSL, Express, MorganJS, MongoDB, Regex,
                      Slugify, Node-Geocoder, Mapquest Developer, JWT
                      Web Token, Cookie Parser, Node Mailer, Helmet,
                      NoSQL injection, XXS Clean. Because of the API
                      complexity security protocals were enhanced.
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
                          href="https://github.com/miadugas/Muze-Messenger"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://affectionate-shirley-f54a8b.netlify.com/"
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>

                {/*-----Card Block-9----*/}
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Tooltip title="JavaScript" placement="top">
                        <Avatar
                          src={
                            "https://pngimage.net/wp-content/uploads/2018/06/logo-javascript-png-3.png"
                          }
                          aria-label="Muse"
                        ></Avatar>
                      </Tooltip>
                    }
                    title="5000 the Band - Promo Site"
                    subheader="Jan 12, 2020
                    "
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src="/assets/5000.png"
                    alt="survey App"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      5000 the Band - Promo Site
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      //color="textSecondary"
                      component="p"
                    >
                      Promotional marketing website and music
                      streaming band promotion site for a local Denver
                      Colorado based band: 5000 the Band. This demo
                      deployed to Github pages. Site built in basic
                      HTML, CSS & JavaScript.
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
                          href="https://github.com/miadugas/5000-Band-Site"
                          target="_blank"
                        >
                          View Code
                        </Button>
                        <Button
                          size="small"
                          color="default"
                          href="https://miadugas.github.io/5000-Band-Site/index.html"
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                      </ButtonGroup>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Typography
            style={{
              marginTop: matchesSM ? "1em" : "2em",
            }}
            align={matchesSM ? "center" : undefined}
            variant="h2"
            gutterBottom
          >
            My Languages, Frameworks & Tools
            <hr />
          </Typography>
          <Grid
            item
            container
            justify="center"
            className={classes.rowContainer}
          >
            <Typography variant="subtitle2" align="center">
              I've worked with a variety of languages, frameworks and
              tools and I have relentless desire to conquer new
              challenges through perseverance and an insatiable
              appetite towards continuous learning and honing my
              craft.
            </Typography>
          </Grid>
          {/*-----Programming Icon Block-----*/}
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "2em",
              marginRight: matchesSM ? 0 : "2em",
              marginTop: matchesSM ? "1em" : "2em",
            }}
          >
            <Grid container style={{ fontSize: "5rem" }}>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="React" placement="bottom-end">
                  <i className="devicon-react-original-wordmark"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Redux" placement="bottom-end">
                  <i className="devicon-redux-original colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="AngularJS" placement="bottom-end">
                  <i className="devicon-angularjs-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip
                  title="Zurb Foundation"
                  placement="bottom-end"
                >
                  <i className="devicon-foundation-plain-wordmark"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="jQuery" placement="bottom-end">
                  <i className="devicon-jquery-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Azure" placement="bottom-end">
                  <i className="devicon-azure-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Bootstrap" placement="bottom-end">
                  <i className="devicon-bootstrap-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="CSS3" placement="bottom-end">
                  <i className="devicon-css3-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Dart" placement="bottom-end">
                  <i className="devicon-dart-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title=".NetCore" placement="bottom-end">
                  <i className="devicon-dotnetcore-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="ExpressJS" placement="bottom-end">
                  <i className="devicon-express-original-wordmark colored"></i>
                </Tooltip>
              </Grid>
              {/*-----New Icon Block-----*/}
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Babel" placement="bottom-end">
                  <i className="devicon-babel-plain"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="C#" placement="bottom-end">
                  <i className="devicon-csharp-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Firebase" placement="bottom-end">
                  <i className="devicon-firebase-plain-wordmark"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="MySQL" placement="bottom-end">
                  <i className="devicon-mysql-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Flutter" placement="bottom-end">
                  <i className="devicon-flutter-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Shopify" placement="bottom-end">
                  <img src="/assets/shopify.svg"></img>
                </Tooltip>
              </Grid>
              {/*-----New Icon Block-----*/}
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Gatsby" placement="bottom-end">
                  <i className="devicon-gatsby-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Github" placement="bottom-end">
                  <i className="devicon-github-original-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Heroku" placement="bottom-end">
                  <i className="devicon-heroku-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Ionic" placement="bottom-end">
                  <i className="devicon-ionic-original-wordmark"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="JavaScript" placement="bottom-end">
                  <i className="devicon-javascript-plain"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Jest" placement="bottom-end">
                  <i className="devicon-jest-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="MaterialUI" placement="bottom-end">
                  <i className="devicon-materialui-plain colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="MongoDB" placement="bottom-end">
                  <i className="devicon-mongodb-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="NextJS" placement="bottom-end">
                  <i className="devicon-nextjs-original-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Sass" placement="bottom-end">
                  <i className="devicon-sass-original colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Sequelize" placement="bottom-end">
                  <i className="devicon-sequelize-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="MS SQL Server" placement="bottom-end">
                  <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="VSCode" placement="bottom-end">
                  <i className="devicon-vscode-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Python" placement="bottom-end">
                  <i className="devicon-python-plain-wordmark"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Visual Studio" placement="bottom-end">
                  <i className="devicon-visualstudio-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="PostgreSQL" placement="bottom-end">
                  <i className="devicon-postgresql-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="Adobe XD" placement="bottom-end">
                  <i className="devicon-xd-line colored"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="AWS" placement="bottom-end">
                  <i className="devicon-amazonwebservices-plain-wordmark"></i>
                </Tooltip>
              </Grid>
              <Grid item style={{ padding: "15px" }}>
                <Tooltip title="HTML5" placement="bottom-end">
                  <i className="devicon-html5-plain-wordmark colored"></i>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

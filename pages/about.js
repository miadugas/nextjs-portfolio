
import React from "react";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "../src/ui/CallToAction";

import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(/assets/repeatingBackground.svg)`,
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
    missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
        About Me - History & Team | MiaCodes
        </title>
        <meta
          name="description"
          key="description"
          content="I provide the fastest, most modern, affordable, and aesthetic software design and development services in the Mountain Region. Get a free online estimate now!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Mountain Region | About Me"
          key="og:title"
        />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
        alignItems="center"
      >
        <Grid item container justify="center">
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h1"
        >
          About Me

        </Typography>
        </Grid>
        <hr />
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography variant="subtitle1" align="center">
          Whether it be person to person. or business to consumer,
          technology is meant to bring us closer to what we care about
          in the best way possible and I use that principle to provide
          fast, modern, affordable, and aesthetically pleasing
          software to the Mountain Region and beyond.
        </Typography>
        </Grid>        
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "5em", marginBottom: "5em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "30em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h1"
                gutterBottom
              >
                Doing more with less
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                I started developing fulltime in 2018, and it all
                started with one fact & one question:
                <br />
                <span className={classes.specialText}> Fact: </span>
                Cell phones at the time had 100,000 time more
                processing power than the Apollo 11 computer.
                <br />
                <span className={classes.specialText}>
                  {" "}
                  Question:{" "}
                </span>
                So why aren’t all businesses using available
                technology?
                <br />
                There are many different answers to that question:
                economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="subtitle1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Recent developments in software engineering and
                computing power, compounded by the proliferation of
                smart phones, has opened up infinite worlds of
                possibility. Things that have always been done by hand
                can now be done digitally and automatically, and
                completely new methods of interaction are created
                daily. Taking full advantage of these advancements is
                the name of the game.
              </Typography>
              <Typography
                variant="subtitle1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and
                that’s where I come in.
              </Typography>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="subtitle1"
                gutterBottom
              >
                I create successful responsive websites that are fast,
                easy to use, and built with best practices using the
                agile methodology. The main area of my expertise is
                Front-end development with React and I thrive at
                building small and medium web apps with custom
                features.
              </Typography>
              <Typography
                variant="subtitle1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                I love learning new things and even stronger coffee.
                Feel free to check out some of my recent work and
                reach out if you want to collaborate or grab a cup of
                coffee sometime. I’ve also been known to enjoy a good
                game of D&D from time to time and I’m beginning work
                on my first machine learning mobile
                application.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            item
            container
            justify="center"
            lg
            style={{ marginTop: "10em" }}
          >
            <img
              src="/assets/rocket.svg"
              alt="rocket"
              style={{ maxHeight: matchesMD ? 300 : "30em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
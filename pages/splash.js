import React from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

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
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sections = [
    {
      icon: "/assets/consultationIcon.svg",
      iconAlt: "handshake",
      iconMaxWidth: 700,
      backgroundColor: "#B3B3B3",
      title: "Consultation",
      paragraphs: [
        `My process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for
        where to start and what to do, or if you just know you want to
        step things up, my initial consultation will help you examine
        your business holistically to find the best solutions.`,
        `Detailed notes will be taken on your requirements and constraints,
        while taking care to identify other potential areas for
        consideration.`,
        `Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and my expertise and intuition will help usher you into this new future of possibilities.`,
      ],
    },
    {
      icon: "/assets/mockupIcon.svg",
      iconAlt: "basic website design outline",
      iconMaxWidth: 1000,
      backgroundColor: "#FF7373",
      title: "Mockup",
      paragraphs: [
        `After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.`,
        `Then it???s time for me to start on your minimum viable product. That???s just a fancy term for a mockup, which doesn???t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.`,
        `This helps me understand and refine the solution itself before getting distracted by specifics and looks.`,
      ],
    },
    {
      icon: "/assets/reviewIcon.svg",
      iconAlt: "magnifying glass",
      iconMaxWidth: "50em",
      backgroundColor: "#39B54A",
      title: "Review",
      paragraphs: [
        `Before moving any farther I???ll come back to you with the progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.`,
        `I???ll give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.`,
        `Once you???re completely satisfied with the vision for the solution I get down to the nitty gritty, and fine-tune the details of design.`,
      ],
    },
    {
      icon: "/assets/designIcon.svg",
      iconAlt: "paintbrush leaving stroke of paint",
      iconMaxWidth: 1000,
      backgroundColor: "#A67C52",
      title: "Design",
      paragraphs: [
        `Using the mockups and notes taken during the consultation as guides, I will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you???re already familiar with.`,
        `No aspect is superfluous, and care will be taken with every decision.`,
      ],
    },
    {
      icon: "/assets/reviewIcon.svg",
      iconAlt: "magnifying glass",
      iconMaxWidth: "50em",
      backgroundColor: "#39B54A",
      title: "Review",
      paragraphs: [
        `A second round of review is essential to the goal of creating exactly what you want, exactly how you want it.`,
        `This time we???ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure everything???s right the first time.`,
      ],
    },
    {
      icon: "/assets/buildIcon.svg",
      iconAlt: "building construction site",
      iconMaxWidth: { maxWidth: matchesMD ? 700 : 1000 },
      backgroundColor: "#FBB03B",
      title: "Build",
      paragraphs: [
        `Here???s where I get down to business.`,
        `Engineering begins after your approval on the final designs. I???ll start by scaffolding out the project on a high level, prioritizing some areas over others.', 'Each area is then developed in order of importance until it???s ready to be connected to the next piece.`,
        `Typically the backend, behind the scenes operations are completed first. Once all the services are in place I can then create the front end, user side of things.`,
        `Finishing the application doesn???t mean I???m done though, because I???ll use extensive testing to guarantee compatibility with all intended devices.`,
        `Only after rigorous examinations will I accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.`,
      ],
    },
    {
      icon: "/assets/launchIcon.svg",
      iconAlt: "rocket",
      iconMaxWidth: 150,
      backgroundColor: "#C1272D",
      title: "Launch",
      paragraphs: [
        `The moment we???ve all been waiting for.`,
        `When construction comes to a close you???re the first one to know. I???ll give a final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.`,
        `When you say the word, I???ll press the button and launch your project out to the public. I???m there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.`,
      ],
    },
    {
      icon: "/assets/maintainIcon.svg",
      iconAlt: "wrench tightening bolts",
      iconMaxWidth: 500,
      backgroundColor: "#8E45CE",
      title: "Maintain",
      paragraphs: [
        `My work doesn???t end there.`,
        `After a successful launch I???ll keep in close contact to listen to feedback and hear how the project is being received.`,
        `From there on out I make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, I will implement those advancements in your project at your direction.`,
      ],
    },
    {
      icon: "/assets/iterateIcon.svg",
      iconAlt: "falling dominoes",
      backgroundColor: "#29ABE2",
      title: "Iterate",
      paragraphs: [
        `The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.`,
        `By planning for future features and changes I can build and evolve your application over time. As new use cases and customer needs develop I can respond with continuous integration of new content.`,
        `My iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.`,
      ],
    },
  ];

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          A Tech Splash - Cutting-Edge Software | MiaCodes
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Mountain Region | The Revolution"
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
          A Tech Splash

        </Typography>
        </Grid>
        <hr />
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src="/assets/vision.svg"
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h1"
              gutterBottom
            >
              My Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              The rise of computers, and subsequently the Internet,
              has completely altered every aspect of human life. This
              has increased our comfort, broadened our connections,
              and reshaped how we view the world.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and teams of
              engineers now resides in every single one of our hands.
              Harnessing this unlimited potential by using it to solve
              problems and better lives is at the heart of everything
              we do.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              I want to help businesses capitalize on the latest and
              greatest technology. The best way to predict the future
              is to be the one building it, and I want to help guide
              the world into this next chapter of technological
              expansion, exploration, and innovation.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              By holding ourselves to rigorous standards and pristine
              quality, I can ensure you have the absolute best tools
              necessary to thrive in this new frontier.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              I see a future where every individual has personalized
              software custom tailored to their lifestyle, culture,
              and interests, helping them overcome life???s obstacles.
              Each project is a step towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em", marginBottom: "5em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h1"
              gutterBottom
            >
              ...Behind The Curtin
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              In 2013, Facebook invented a new way of building
              websites. This system, React.js, completely
              revolutionizes the process and practice of website
              development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Instead of chaining together long individual pages, like
              traditional websites did in the past, React websites are
              built with little chunks of code called components.
              These components are faster, easier to maintain, and are
              easily reused and customized, each serving a singular
              purpose.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              In 2015 they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android
              apps, making it completely system agnostic. Instead of
              having to master two completely separate development
              platforms, you can leverage the knowledge you already
              possessed from building websites and reapply it
              directly! This was a huge leap forward.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This technology is now being used by companies like
              AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla,
              UberEats, and when Facebook purchased Instagram, large
              portions of it were even rebuilt using React.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Developers have since built on top of these systems by
              automating project setup and deployment, allowing
              creators to focus as much as possible on their work
              itself.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the
              workflow for developing new pieces of software, while
              also lowering the barrier to entry for mobile app
              development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This puts personalization in your pocket ??? faster,
              better, and more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify={matchesMD ? "center" : "flex-end"}
          lg
        >
          <Lottie
            options={defaultOptions}
            isStopped={false}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>
      {/* <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h1" gutterBottom>
            My Process
          </Typography>
        </Grid>
      </Grid> */}
      {/* {sections.map((section) => (
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.rowContainer}
          justify={matchesMD ? "center" : undefined}
          style={{
            backgroundColor: section.backgroundColor,
            height: "80em",
          }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
            lg
          > */}
            {/* <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
                style={{
                  color: "#000",
                  marginTop: matchesMD ? 0 : "2em",
                }}
              >
                {section.title}
              </Typography>
            </Grid>
            <Grid item>
              {section.paragraphs.map((text) => (
                <Typography
                  align={matchesMD ? "center" : undefined}
                  variant="body1"
                  style={{ color: "#fff", maxWidth: "20em" }}
                  paragraph
                >
                  {text}
                </Typography>
              ))}
            </Grid>
          </Grid> */}
          {/* <Grid item lg style={{ alignSelf: "center" }}>
            <LazyLoadImage
              threshold={400}
              src={section.icon}
              alt={section.iconAlt}
              width="100%"
              style={{ maxWidth: section.iconMaxWidth }}
            />
          </Grid> */}
        {/* </Grid>
      ))} */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

import React, { useState, useEffect } from "react";
import Router from "next/router";
import ReactGA from "react-ga";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "../Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    //marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      //marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      // marginBottom: "1.25em"
    },
  },
  logo: {
    height: "6em",
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: "white",
    marginTop: "2em",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "black",
    opacity: 0.7,
    fontFamily: "Roboto",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0,
    },
    "&::before": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  expansionSummary: {
    padding: "0 24px 0 16px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
    backgroundColor: (props) =>
      props.value === 1 ? "rgba(0, 0, 0, 0.14)" : "inherit",
  },
}));

export default function Header(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const iOS =
    process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [previousURL, setPreviousURL] = useState("");

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const menuOptions = [
    // {
    //   name: "Custom Software Development",
    //   link: "/customsoftware",
    //   activeIndex: 1,
    //   selectedIndex: 0,
    // },
    // {
    //   name: "iOS/Android App Development",
    //   link: "/mobileapps",
    //   activeIndex: 1,
    //   selectedIndex: 1,
    // },
    // {
    //   name: "Website Development",
    //   link: "/websites",
    //   activeIndex: 1,
    //   selectedIndex: 2,
    // },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "A Tech Splash", link: "/splash", activeIndex: 1 },
    { name: "Portfolio", link: "/portfolio", activeIndex: 2 },
    { name: "About Me", link: "/about", activeIndex: 3 },
    { name: "Contact Me", link: "/contact", activeIndex: 4 },
  ];

  function checkPath() {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          if (props.value !== false) {
            props.setValue(false);
          }

          break;
        default:
          break;
      }
    });
  }

  useEffect(() => {
    if (previousURL !== window.location.pathname) {
      setPreviousURL(window.location.pathname);
      ReactGA.pageview(
        window.location.pathname + window.location.search
      );
    }

    if (window.performance) {
      if (performance.navigation.type == 1) {
        checkPath();
      }
    }
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  Router.events.on("routeChangeComplete", (url) => {
    checkPath();
  });

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            onMouseLeave={() => setOpenMenu(false)}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        href="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {
          props.setValue(false);
          ReactGA.event({
            category: "Estimate",
            action: "Desktop Header Pressed",
          });
        }}
      >
        Free Estimate
      </Button>
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        placement="bottom-start"
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top left",
            }}
          >
            <Paper classes={{ root: classes.menu }} elevation={0}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                  disablePadding
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={`${option}${i}`}
                      component={Link}
                      href={option.link}
                      classes={{ root: classes.menuItem }}
                      onClick={(event) => {
                        handleMenuItemClick(event, i);
                        props.setValue(1);
                        handleClose();
                      }}
                      selected={
                        i === props.selectedIndex &&
                        props.value === 1 &&
                        window.location.pathname !== "/services"
                      }
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Menu
        id="simple-menu"
        disableAutoFocusItem
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      ></Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) =>
            route.name === "Services" ? (
              <ExpansionPanel
                elevation={0}
                key={route.name}
                classes={{ root: classes.expansion }}
              >
                <ExpansionPanelSummary
                  classes={{ root: classes.expansionSummary }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    disableTypography
                    style={{ opacity: props.value === 1 ? 1 : null }}
                    onClick={() => {
                      setOpenDrawer(false);
                      props.setValue(route.activeIndex);
                    }}
                  >
                    <Link href={route.link} color="inherit">
                      {route.name}
                    </Link>
                  </ListItemText>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  classes={{ root: classes.expansionDetails }}
                >
                  <Grid container direction="column">
                    {menuOptions.map((route) => (
                      <Grid item>
                        <ListItem
                          divider
                          key={`${route}${route.seleselectedIndex}`}
                          button
                          component={Link}
                          href={route.link}
                          selected={
                            props.selectedIndex ===
                              route.selectedIndex &&
                            props.value === 1 &&
                            window.location.pathname !== "/services"
                          }
                          classes={{
                            selected: classes.drawerItemSelected,
                          }}
                          onClick={() => {
                            setOpenDrawer(false);
                            props.setSelectedIndex(
                              route.selectedIndex
                            );
                          }}
                        ></ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : (
              <ListItem
                divider
                key={`${route}${route.activeIndex}`}
                button
                component={Link}
                href={route.link}
                selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText
                  className={classes.drawerItem}
                  disableTypography
                >
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(false);
              ReactGA.event({
                category: "Estimate",
                action: "Mobile Header Pressed",
              });
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            href="/estimate"
            selected={props.value === 5}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              disableRipple
              onClick={() => props.setValue(0)}
              style={{ textDecoration: "none" }}
              className={classes.logoContainer}
            >
              <img
                alt="logo"
                className={classes.logo}
                src="/assets/logo.svg"
              />
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

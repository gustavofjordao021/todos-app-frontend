import React, { useState, useEffect } from "react";

// import Todo from "../components/todo";
// import Account from "../components/account";

import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/avatar";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import NotesIcon from "@material-ui/icons/Notes";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import CircularProgress from "@material-ui/core/CircularProgress";

import AUTH_SERVICE from "../services/AuthService";
import USER_SERVICE from "../services/UserService";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    marginTop: 20,
  },
  uiProgess: {
    position: "fixed",
    zIndex: "1000",
    height: "31px",
    width: "31px",
    left: "50%",
    top: "35%",
  },
  toolbar: theme.mixins.toolbar,
});

const Home = (props) => {
  const [lifecycleState, setLifecycleState] = useState({
    render: false,
    error: "",
  });
  const [userDetailsState, setUserDetailsState] = useState({
    firstName: "",
    lastName: "",
    profilePicture: "",
    uiLoading: true,
    imageLoading: false,
  });

  let loadAccountPage = (event) => {
    setLifecycleState({ render: true });
  };

  let loadTodoPage = (event) => {
    setLifecycleState({ render: false });
  };

  let logoutHandler = (event) => {
    localStorage.removeItem("AuthToken");
    props.history.push("/login");
  };

  useEffect(() => {
    AUTH_SERVICE.auth(props.history);
    USER_SERVICE.retrieveUserDetails()
      .then((response) => {
        setUserDetailsState({
          firstName: response.data.userCredentials.firstName,
          lastName: response.data.userCredentials.lastName,
          email: response.data.userCredentials.email,
          phoneNumber: response.data.userCredentials.phoneNumber,
          country: response.data.userCredentials.country,
          username: response.data.userCredentials.username,
          profilePicture: response.data.userCredentials.imageUrl,
          uiLoading: false,
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          props.history.push("/login");
        }
        setLifecycleState({
          ...lifecycleState,
          error: "Error in retrieving the data.",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { classes } = props;
  if (userDetailsState.uiLoading === true) {
    return (
      <div className={classes.root}>
        {userDetailsState.uiLoading && (
          <CircularProgress size={150} className={classes.uiProgess} />
        )}
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              TodoApp
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <center>
            <Avatar
              src={userDetailsState.profilePicture}
              className={classes.avatar}
            />
            <p>
              {" "}
              {userDetailsState.firstName} {userDetailsState.lastName}
            </p>
          </center>
          <Divider />
          <List>
            <ListItem button key="Todo" onClick={(e) => loadTodoPage(e)}>
              <ListItemIcon>
                {" "}
                <NotesIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Todo" />
            </ListItem>

            <ListItem button key="Account" onClick={(e) => loadAccountPage(e)}>
              <ListItemIcon>
                {" "}
                <AccountBoxIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>

            <ListItem button key="Logout" onClick={(e) => logoutHandler(e)}>
              <ListItemIcon>
                {" "}
                <ExitToAppIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Drawer>

        {/* <div>{lifecycleState.render ? <Account /> : <Todo />}</div> */}
      </div>
    );
  }
};

export default withStyles(styles)(Home);

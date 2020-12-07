import React from "react";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
});

const Todo = (props) => {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography paragraph>Hello I am todo</Typography>
    </main>
  );
};

export default withStyles(styles)(Todo);

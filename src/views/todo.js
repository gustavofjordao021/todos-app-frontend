import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import MuiDialogContent from "@material-ui/core/DialogContent";

import AUTH_SERVICE from "../services/AuthService";
import TODO_SERVICE from "../services/TodoService";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const styles = (theme) => ({ 
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	},
	submitButton: {
		display: 'block',
		color: 'white',
		textAlign: 'center',
		position: 'absolute',
		top: 14,
		right: 10
	},
	floatingButton: {
		position: 'fixed',
		bottom: 0,
		right: 0
	},
	form: {
		width: '98%',
		marginLeft: 13,
		marginTop: theme.spacing(3)
	},
	toolbar: theme.mixins.toolbar,
	root: {
		minWidth: 470
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	pos: {
		marginBottom: 12
	},
	uiProgess: {
		position: 'fixed',
		zIndex: '1000',
		height: '31px',
		width: '31px',
		left: '50%',
		top: '35%'
	},
	dialogeStyle: {
		maxWidth: '50%'
	},
	viewRoot: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});


const Todo = (props) => {
  const [todoDetailsState, setTodoDetailsState] = useState({
    body: '',
    todos: '',
    title: '',
    todoId: '',
    errors: [],
    open: false,
    buttonType: '',
    uiLoading: true,
    viewOpen: false
  });  

	useEffect(() => {
    AUTH_SERVICE.auth(props.history);		
		TODO_SERVICE.getUserTodos()			
			.then((response) => {
				setTodoDetailsState({...todoDetailsState,
					todos: response.data,
					uiLoading: false
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []); 

	let deleteTodoHandler = (data) => {
		let todoId = data.todo.todoId;
    AUTH_SERVICE.auth(props.history);
    TODO_SERVICE.deleteTodo(todoId)
			.then(() => {
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	let handleEditClickOpen = (data) => {
		setTodoDetailsState({...todoDetailsState,
			open: true,
			buttonType: 'Edit',
			body: data.todo.body,
			title: data.todo.title,
			todoId: data.todo.todoId,
		});
	};

	let handleViewOpen = (data) => {
		setTodoDetailsState({...todoDetailsState,
			viewOpen: true,
			body: data.todo.body,
			title: data.todo.title,
		});
	};

	return (
		const DialogTitle = withStyles(styles)((props) => {
			const { children, classes, onClose, ...other } = props;
			return (
				<MuiDialogTitle disableTypography className={classes.root} {...other}>
					<Typography variant="h6">{children}</Typography>
					{onClose ? (
						<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
							<CloseIcon />
						</IconButton>
					) : null}
				</MuiDialogTitle>
			);
		})

		const DialogContent = withStyles((theme) => ({
			viewRoot: {
				padding: theme.spacing(2)
			}
		}))(MuiDialogContent);

		dayjs.extend(relativeTime);
		const { classes } = this.props;
		const { open, errors, viewOpen } = this.state;

		const handleClickOpen = () => {
			this.setState({
				todoId: '',
				title: '',
				body: '',
				buttonType: '',
				open: true
			});
		};

		const handleSubmit = (event) => {
			authMiddleWare(this.props.history);
			event.preventDefault();
			const userTodo = {
				title: this.state.title,
				body: this.state.body
			};
			let options = {};
			if (this.state.buttonType === 'Edit') {
				options = {
					url: `/todo/${this.state.todoId}`,
					method: 'put',
					data: userTodo
				};
			} else {
				options = {
					url: '/todo',
					method: 'post',
					data: userTodo
				};
			}
			const authToken = localStorage.getItem('AuthToken');
			axios.defaults.headers.common = { Authorization: `${authToken}` };
			axios(options)
				.then(() => {
					this.setState({ open: false });
					window.location.reload();
				})
				.catch((error) => {
					this.setState({ open: true, errors: error.response.data });
					console.log(error);
				});
		};

		const handleViewClose = () => {
			this.setState({ viewOpen: false });
		};

		const handleClose = (event) => {
			this.setState({ open: false });
		};

		if (this.state.uiLoading === true) {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</main>
			);
		} else {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<IconButton
						className={classes.floatingButton}
						color="primary"
						aria-label="Add Todo"
						onClick={handleClickOpen}
					>
						<AddCircleIcon style={{ fontSize: 60 }} />
					</IconButton>
					<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
						<AppBar className={classes.appBar}>
							<Toolbar>
								<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
									<CloseIcon />
								</IconButton>
								<Typography variant="h6" className={classes.title}>
									{this.state.buttonType === 'Edit' ? 'Edit Todo' : 'Create a new Todo'}
								</Typography>
								<Button
									autoFocus
									color="inherit"
									onClick={handleSubmit}
									className={classes.submitButton}
								>
									{this.state.buttonType === 'Edit' ? 'Save' : 'Submit'}
								</Button>
							</Toolbar>
						</AppBar>

						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="todoTitle"
										label="Todo Title"
										name="title"
										autoComplete="todoTitle"
										helperText={errors.title}
										value={this.state.title}
										error={errors.title ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="todoDetails"
										label="Todo Details"
										name="body"
										autoComplete="todoDetails"
										multiline
										rows={25}
										rowsMax={25}
										helperText={errors.body}
										error={errors.body ? true : false}
										onChange={this.handleChange}
										value={this.state.body}
									/>
								</Grid>
							</Grid>
						</form>
					</Dialog>

					<Grid container spacing={2}>
						{this.state.todos.map((todo) => (
							<Grid item xs={12} sm={6}>
								<Card className={classes.root} variant="outlined">
									<CardContent>
										<Typography variant="h5" component="h2">
											{todo.title}
										</Typography>
										<Typography className={classes.pos} color="textSecondary">
											{dayjs(todo.createdAt).fromNow()}
										</Typography>
										<Typography variant="body2" component="p">
											{`${todo.body.substring(0, 65)}`}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" color="primary" onClick={() => this.handleViewOpen({ todo })}>
											{' '}
											View{' '}
										</Button>
										<Button size="small" color="primary" onClick={() => this.handleEditClickOpen({ todo })}>
											Edit
										</Button>
										<Button size="small" color="primary" onClick={() => this.deleteTodoHandler({ todo })}>
											Delete
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>

					<Dialog
						onClose={handleViewClose}
						aria-labelledby="customized-dialog-title"
						open={viewOpen}
						fullWidth
						classes={{ paperFullWidth: classes.dialogeStyle }}
					>
						<DialogTitle id="customized-dialog-title" onClose={handleViewClose}>
							{this.state.title}
						</DialogTitle>
						<DialogContent dividers>
							<TextField
								fullWidth
								id="todoDetails"
								name="body"
								multiline
								readonly
								rows={1}
								rowsMax={25}
								value={this.state.body}
								InputProps={{
									disableUnderline: true
								}}
							/>
						</DialogContent>
					</Dialog>
				</main>
      );
    }
    )
  )
}

export default withStyles(styles)(Todo);

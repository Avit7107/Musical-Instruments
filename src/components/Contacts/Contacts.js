

import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "../logIn/logIn.css";
const Contacts=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Contact Us</h2>
                </Grid>
                <TextField label='Name' placeholder='Enter name' fullWidth required/>
                <TextField label='email' placeholder='Enter email' type='email' fullWidth required/>
                <TextField label='message' placeholder='Enter message' type='message' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Send</Button>
            </Paper>
        </Grid>
       )
      }
      export default  Contacts;


// import React from 'react'
// import { Container, Typography, Button, } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// import SendIcon from '@material-ui/icons/Send';

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//     padding: 30,
    
//   },
//   button: {
//     margin: theme.spacing(1),
//     marginTop: theme.spacing(3),
//     marginLeft: theme.spacing(1),
//   },
//   link: {
//     textDecoration: 'none',
//   },
// }));
// function  Contacts({Contacts}) {
//   const classes = useStyles();

//   const valed = () => (
//     <Typography variant="subtitle1">Thanks for your message
//     <Link className={classes.link} to="/">back to home page</Link>!
//     </Typography>
//     );

//   return (
//     <>
//     <div style={{padding: 150}}>  
//      <div className={classes.margin}>
//     <Grid container spacing={1} alignItems="flex-end">
//       <Grid item required>
//         <AccountCircle />
//       </Grid>
//       <Grid item>
//         <TextField id="input-with-icon-grid" label="Name" />
//       </Grid>
//     </Grid>
//   </div>
//   <div className={classes.margin}>
//       <Grid container spacing={1} alignItems="flex-end">
//         <Grid item>
//           <AccountCircle />
//         </Grid>
//         <Grid item>
//           <TextField id="input-with-icon-grid" label="Email" />
//         </Grid>
//       </Grid>
//     </div>
//     <div className={classes.margin}>
//       <Grid container spacing={1} alignItems="flex-end">
//         <Grid item>
//           <AccountCircle />
//         </Grid>
//         <Grid item>
//           <TextField id="input-with-icon-grid" label="message" />
//         </Grid>
//       </Grid>
//     </div>
//     <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         endIcon={<SendIcon></SendIcon>}
//         onClick={valed}
//       >
//         send
//       </Button>
//   </div>
//     </>




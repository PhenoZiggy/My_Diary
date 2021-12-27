import React, {useEffect}  from "react";
import NavBar from "./pagecontents/NavBar"
import { useDispatch} from 'react-redux'
import { getPosts } from '../actions/posts'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material/'
import Posts from './Posts/posts'
import Form from './Form/form'
import useStyles from '../styles'



const MainComponent = () => {
        const classes = useStyles();
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getPosts());

        },[dispatch]);

        return (
            <Container maxWidth="lg">
                <NavBar/>

            <Grow in>
                <Container>
                    <Grid container justify="Space-between" alignItems="stretch" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            </Container>
        );
    
}
export default MainComponent;
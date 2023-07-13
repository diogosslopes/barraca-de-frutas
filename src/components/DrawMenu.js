import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Drawer } from '@mui/material';
import { useState } from "react";

export const DrawMenu = () =>{

    const [drawOpen, setDrawOpen] = useState(false)

    function open (){
        setDrawOpen(true)
        console.log("true")
    }

    return (
        <>
        <Button onClick={open}>Teste</Button>
        <Drawer anchor='bottom' width='280px' open={drawOpen} onClose={() => {setDrawOpen(false)}} >
            <Box p={2} height='50px' width='100px' role='presentation' >
                <Typography variant='h6' component='div'>
                    Menu teste
                </Typography>
            </Box>
        </Drawer>
        </>
    )
}
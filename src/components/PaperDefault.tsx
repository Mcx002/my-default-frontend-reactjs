import React from 'react';
import {Paper} from '@mui/material';
import './styles.sass';
export const PaperDefault: React.FC = (props: any) =>
    <Paper 
        {...props} 
        elevation={0}
        className='m-paper-default'>
        {props.children}
    </Paper>
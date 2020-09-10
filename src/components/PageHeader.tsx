import React from 'react';
import {Paper, Card ,Typography} from '@material-ui/core'
import './Styles.css';
import { spacing } from '@material-ui/system';


export function PageHeader (props: any){

    const {icon, title, subtitle} = props;

    return (
        <Paper elevation = {0} square className = "root2">
            <div className = "pageHeader">
                <Card className = "pageIcon" >
                    {icon}
                </Card>
            </div>

            <div className = "pageTitle">
                <Typography
                variant = "h6"
                component = "div">
                    {title}
                </Typography>
                <Typography variant = "h6"
                component = "div">
                    {subtitle}
                </Typography>
            </div>
        </Paper>
    );
}
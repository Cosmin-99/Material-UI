import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import './Styles.css';

interface User {
    fullname: string
    email: string
    mobile: string
    city: string
    isPermanent?: boolean
}

export function UserForm () {

    const [data , setData] = useState<User>({
        fullname: "",
        email: "",
        mobile: "",
        city: ""
    })

    return (
        <form className = "formInput">
            <Grid container>
                <Grid item xs = {6}>
                    <TextField variant = "outlined"
                    label = "Fullname"
                    value = {data.fullname}
                    onChange = { e => setData ({...data, fullname: e.target.value})}
                    />
                
                    <TextField variant = "outlined"
                    label = "Email"
                    value = {data.email}
                    onChange = { e => setData ({...data, email: e.target.value})}
                    />
                   
                    <TextField variant = "outlined"
                    label = "Mobile"
                    value = {data.mobile}
                    onChange = { e => setData ({...data, mobile: e.target.value})}
                    />
                
                    <TextField variant = "outlined"
                    label = "City"
                    value = {data.city}
                    onChange = { e => setData ({...data, city: e.target.value})}
                    />
                </Grid>

                <Grid item xs = {6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row>
                            <FormControlLabel value = "male" control = {<Radio />} label = "Male" />
                            <FormControlLabel value = "female" control = {<Radio />} label = "Female" />
                            <FormControlLabel value = "other" control = {<Radio />} label = "Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </form>
    );
}
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import moment from 'moment';
import React, { useState } from 'react';
import './Styles.css';

export interface User {
    id?: number
    fullname: string
    email: string
    mobile: string
    city: string
    gender: string
    department: string | any
    hireDate: string
}

interface Department {
    label: string
    val: string
}

export const departments: Department[] = [
    { label: "Development", val: "Development" },
    { label: "Testing", val: "Testing" },
    { label: "Graphic Design", val: "Graphic Design" },
    { label: "HR", val: "HR" }
];

export function UserForm(props: { user: User[]}) {

    const [data, setData] = useState<User>({
        fullname: "",
        email: "",
        mobile: "",
        city: "",
        gender: "",
        department: "",
        hireDate: ""
    })

    const [open, setOpen] = useState(false)

    const handleClose = (): void => {
        setOpen(false)
    }

    const handleOpen = (): void => {
        setOpen(true)
    }

    const date = new Date();

    return (
        <>
            <div className="container">
                <form className="formInput">
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField variant="outlined"
                                label="Fullname"
                                value={data.fullname}
                                onChange={e => setData({ ...data, fullname: e.target.value })}
                            />

                            <TextField variant="outlined"
                                label="Email"
                                value={data.email}
                                onChange={e => setData({ ...data, email: e.target.value })}
                            />

                            <TextField variant="outlined"
                                label="Mobile"
                                value={data.mobile}
                                onChange={e => setData({ ...data, mobile: e.target.value })}
                            />

                            <TextField variant="outlined"
                                label="City"
                                value={data.city}
                                onChange={e => setData({ ...data, city: e.target.value })}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup row
                                    value={data.gender}
                                    onChange={e => setData({ ...data, gender: e.target.value })}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>

                            <FormControl variant="outlined">
                                <InputLabel> Select Department </InputLabel>
                                <Select
                                    label="Select Department"
                                    value={data.department}
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    onChange={e => setData({ ...data, department: e.target.value })}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {departments.map(e => <MenuItem value={e.val}>{e.label}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <FormControl>
                                <TextField variant="outlined"
                                    type="date"
                                    label="Hire Date"
                                    value={data.hireDate}
                                    onChange={e => setData({...data, hireDate: e.target.value})}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>

                <div className="button">
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick = {() => props.user.push(data)}
                        >Submit</Button>
                </div>
            </div>
        </>
    );
}
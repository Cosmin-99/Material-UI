import { Button, Dialog, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React, { SetStateAction, useState } from 'react';
import { User } from './UserForm';
import {users} from './Users';
import {departments} from './UserForm';

export function EditPopup(props: {setOpenPopup: (e: SetStateAction<boolean>) => void, openPopup: boolean , data: User, setData: (e: SetStateAction<User>) => void}) {

    const [open , setOpen] = useState(false)
    
    const handleClose = (): void => {
        setOpen(false)
    }

    const handleOpen = (): void => {
        setOpen(true)
    }

    return (
        <>
            <Dialog open={props.openPopup} maxWidth="md" >
                <DialogTitle>
                    <div> Type info to edit user !!! </div>
                </DialogTitle>
                <DialogContent>
                    <div className="container">
                        <form className="formInput">
                            <Grid container>
                                <Grid item xs={6}>
                                    <TextField variant="outlined"
                                        label="Fullname"
                                        value={props.data.fullname}
                                        onChange={e => props.setData({ ...props.data, fullname: e.target.value })}
                                    />

                                    <TextField variant="outlined"
                                        label="Email"
                                        value={props.data.email}
                                        onChange={e => props.setData({ ...props.data, email: e.target.value })}
                                    />

                                    <TextField variant="outlined"
                                        label="Mobile"
                                        value={props.data.mobile}
                                        onChange={e => props.setData({ ...props.data, mobile: e.target.value })}
                                    />

                                    <TextField variant="outlined"
                                        label="City"
                                        value={props.data.city}
                                        onChange={e => props.setData({ ...props.data, city: e.target.value })}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl>
                                        <FormLabel>Gender</FormLabel>
                                        <RadioGroup row
                                            value={props.data.gender}
                                            onChange={e => props.setData({ ...props.data, gender: e.target.value })}>
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </RadioGroup>
                                    </FormControl>

                                    <FormControl variant="outlined">
                                        <InputLabel> Select Department </InputLabel>
                                        <Select
                                            label="Select Department"
                                            value={props.data.department}
                                            open={open}
                                            onClose={handleClose}
                                            onOpen={handleOpen}
                                            onChange={e => props.setData({ ...props.data, department: e.target.value })}
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
                                            value={props.data.hireDate}
                                            onChange={e => props.setData({ ...props.data, hireDate: e.target.value })}
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
                                onClick={() => { props.setData(props.data); props.setOpenPopup(false) }}
                            >Submit</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
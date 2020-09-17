import React, { SetStateAction, useState } from 'react';
import {Dialog, DialogContent, DialogTitle} from '@material-ui/core';
import { UserForm } from './UserForm';

export function Popup(props :{open: boolean, setOpen :(e: SetStateAction<boolean>) => void}) {

    return (
        <>
            <Dialog open = {props.open} maxWidth = "md" >
                <DialogTitle>
                   <div> Type info of the new user !!! </div>
                </DialogTitle>
                <DialogContent>
                    <UserForm setOpen = {props.setOpen} />
                </DialogContent>
            </Dialog>
        </>
    );
}
import React, { SetStateAction, useState } from 'react';
import {Dialog, DialogContent, DialogTitle} from '@material-ui/core';
import { User, UserForm } from './UserForm';

export function Popup(props :{open: boolean, setOpen :(e: SetStateAction<boolean>) => void, data: User}) {

    return (
        <>
            <Dialog open = {props.open} maxWidth = "md" >
                <DialogTitle>
                   <div> Type info of the new user !!! </div>
                </DialogTitle>
                <DialogContent>
                    <UserForm setOpen = {props.setOpen} data = {props.data} />
                </DialogContent>
            </Dialog>
        </>
    );
}
import React, { SetStateAction, useState } from 'react';
import { IconButton, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { users } from './Users';
import { User } from './UserForm';
import './Styles.css'
import CreateOutlinedIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

export function TableUsers(props: {Users: User[], setUser: (e: SetStateAction<User[]>) => void ,setEditUser: (e: SetStateAction<User>) => void ,setOpen: (e: SetStateAction<boolean>) => void }) {

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])

    const deleteUser = (id: number | any) => {
        props.setUser(users.filter(user => user.id !== id))
    }

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const dataAfterPagingAndSorting = (): User[] => {
        return props.Users.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    }

    return (<>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Fullname</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Hire Date</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {dataAfterPagingAndSorting().map(user => (
                    <TableRow key={user.id}>
                        <TableCell>{user.fullname}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>{user.city}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{user.hireDate}</TableCell>
                        <TableCell>
                            <IconButton>
                                <CreateOutlinedIcon fontSize="small" color="primary" onClick={() => { props.setEditUser(user); props.setOpen(true) }} />
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            <IconButton>
                                <DeleteIcon fontSize="small" color="secondary" onClick={() => deleteUser(user.id)} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        component="div"
                        page={page}
                        rowsPerPageOptions={pages}
                        rowsPerPage={rowsPerPage}
                        count={users.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage} />
                </TableRow>
            </TableFooter>
        </Table>
    </>
    );
}
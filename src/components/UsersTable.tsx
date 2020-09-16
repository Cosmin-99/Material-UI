import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { users } from './Users';
import {User} from './UserForm';
import './Styles.css'

export function TableUsers() {

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])

    const handleChangePage = (event:  React.MouseEvent<HTMLButtonElement> | null , newPage: number): void => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ): void => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

      const dataAfterPagingAndSorting = (): User[] => {
         return users.slice(page*rowsPerPage, (page+1)*rowsPerPage);
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
                    onChangePage = {handleChangePage}
                    onChangeRowsPerPage = {handleChangeRowsPerPage} />
                </TableRow>
            </TableFooter>
        </Table>
    </>
    );
}
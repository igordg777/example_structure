import React, { useState, useEffect } from 'react';
import TableUsers from './viewUsers/TableUsers';
import CardUsers from './viewUsers/CardUsers';
import ChartUsers from './viewUsers/ChartUsers';

function Users() {

    return (
        <>
            <TableUsers />
            <CardUsers />
            <ChartUsers />

        </>
    )
}

export default Users
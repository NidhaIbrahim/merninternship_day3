import { TableBody, TableHead, TableContainer, Table, TableRow, TableCell, Typography } from '@mui/material'
import React from 'react'

const Tabulari = () => {
    return (
        <div>
            <Typography variant="h2" component="h2">Dessert Details</Typography><br />
            <TableContainer>
                <Table >
                    <TableHead>
                            <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Dessert (100g serving)</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Calories</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Fat&nbsp; (g)</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Carbs&nbsp; (g)</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Protien&nbsp; (g)</TableCell>
                            </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Frozen yoghurt</TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>15</TableCell>
                            <TableCell>20</TableCell>
                            <TableCell>5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brownie</TableCell>
                            <TableCell>250</TableCell>
                            <TableCell>25</TableCell>
                            <TableCell>14</TableCell>
                            <TableCell>8</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Tabulari
import * as React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export default function BasicButtons({ page, onSubmit }) {
    return (
        <Button
            variant="outlined"
            color="error"
            onClick={onSubmit}
        >Logout</Button>
    );
}
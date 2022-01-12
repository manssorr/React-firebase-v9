import * as React from 'react';

import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

export default function BasicButtons({ page, onSubmit }) {
    let color;
    let variant;
    if (page === 'login') {
        variant = "contained"
        color = "success"
    } else {
        variant = "outlined"
        color = "secondary"
    }

    return (
        <Button
            startIcon={<LoginIcon />}
            onClick={onSubmit}
            variant={variant}
            color={color}
        >Login</Button>
    );
}
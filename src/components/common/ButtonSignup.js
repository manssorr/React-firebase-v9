import * as React from 'react';

import Button from '@mui/material/Button';
import JoinFullIcon from '@mui/icons-material/JoinFull';

export default function BasicButtons({ page, onSubmit }) {
    let color;
    let variant;
    if (page === 'signup') {
        variant = "contained"
        color = "success"
    } else {
        variant = "outlined"
        color = "secondary"
    }

    return (
        <Button
            startIcon={<JoinFullIcon />}
            onClick={onSubmit}
            variant={variant}
            color={color}
        >Signup</Button>
    );
}
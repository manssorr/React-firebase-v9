import * as React from 'react';
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ButtonLogin from './ButtonLogin';
import ButtonSignup from './ButtonSignup';

import InputAdornment from '@mui/material/InputAdornment';
import PasswordIcon from '@mui/icons-material/Password';
import ContactMailIcon from '@mui/icons-material/ContactMail';



const Form = ({ setEmail, setPassword, onSubmit }) => {
	const navigate = useNavigate();
	const page = 'login'
	return (
		<div>
			<div className="heading-container">
				<h3>
					Login Page
				</h3>
			</div>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						id="email"
						label="Enter E-mail"
						variant="outlined"
						size="small"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<ContactMailIcon />
								</InputAdornment>
							),
						}}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						id="password"
						label="Enter Password"
						type="password"
						variant="outlined"
						autoComplete="current-password"
						size="small"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<PasswordIcon />
								</InputAdornment>
							),
						}}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</Box>
			<Stack direction="row" spacing={2} >
				<ButtonLogin
					page={page}
					onSubmit={onSubmit}
				/>
				<ButtonSignup
					page={page}
					onSubmit={() => navigate('/signup')}
				/>
			</Stack>
		</div>
	);
}

export default Form

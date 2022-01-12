import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonLogout from './common/ButtonLogout';




const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/')
        }
        if (!authToken) {
            navigate('/login')
        }
    }, [])

    const onSubmitLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    return (
        <div>
            <ButtonLogout
                onSubmit={onSubmitLogout}
            />
        </div>
    )
}

export default Home;

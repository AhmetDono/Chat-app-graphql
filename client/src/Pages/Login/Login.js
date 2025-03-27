import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import { useQuery } from '@apollo/client'
import { GET_USERS } from './queries'

const Login = () => {
    const {loading,error,data} = useQuery(GET_USERS);
    const navigate = useNavigate();


    const [selectedUserId, setSelectedUserId] = useState('');

    const handleSelectChange = (event) => {
        setSelectedUserId(event.target.value);
    };

    const handleLogin = () => {
        if (selectedUserId) {
            localStorage.setItem('userId', selectedUserId);
            navigate('/');
        } else {
            alert('Lütfen bir kullanıcı seçin.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`row ${styles.loginContainer}`} >
        <div className={`col-6 ${styles.userSelectContainer}`} >
        <select
                    class="form-select"
                    aria-label="Default select example"
                    value={selectedUserId} 
                    onChange={handleSelectChange} 
                    >
            {
                data.users.map((user,index) => {
                    return <option key={index} value={user.id}>{user.name}</option>
                })
            }
        </select>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    </div>
  )
}

export default Login
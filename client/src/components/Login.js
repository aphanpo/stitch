import React, {useState} from 'react'
import { useAuth } from '../hooks'


export default props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const { signin } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signin(username, password).then(resp => {
            props.history.push("/")
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" type="text" name="username" value={username} onChange={e=> setUsername(e.target.value)} />
                <input placeholder="password" type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
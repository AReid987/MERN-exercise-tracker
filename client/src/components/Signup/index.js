import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';

function Signup(props) {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = setter => e => {
        setter(e.target.value);
    }

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const requestBody = {
                query: `
                    mutation {
                        createUser(userInput: {
                            username: "${username}"
                            firstName: "${firstName}"
                            lastName: "${lastName}"
                            email: "${email}"
                            password: "${password}"
                            confirm: "${confirm}"
                        }) {
                            _id
                            token
                            username
                            firstName
                            lastName
                            email
                        }
                    }
                `
            };
            console.log(requestBody.query)

            const { data } = await axios.post('http://localhost:5000/graphql', requestBody);

            if (data.errors) {
                setError(data.errors[0].message);
                setLoading(false);
            }
            else {
                setError(null);
                setLoading(false);
                const { _id, token } = await data.data.createUser;

                dispatch({
                    type: "SET_AUTH_USER",
                    authUser: {
                        _id,
                        username,
                        firstName,
                        lastName,
                        email
                    }
                })
                localStorage.setItem('token', token);
                props.history.push("/");
            }
        }
        catch (e) {
            setError(e);
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Sign up</h1>
            <div className="auth-form">
                <form onSubmit={submit}>
                    <input className="form-input" type="username" placeholder="username" value={username} onChange={handleChange(setUsername)} />
                    <input className="form-input" type="firstName" placeholder="First Name" value={firstName} onChange={handleChange(setFirstName)} />
                    <input className="form-input" type="lastName" placeholder="Last Name" value={lastName} onChange={handleChange(setLastName)} />
                    <input className="form-input" type="email" placeholder="Email" value={email} onChange={handleChange(setEmail)} />
                    <input className="form-input" type="password" placeholder="Password" value={password} onChange={handleChange(setPassword)} />
                    <input className="form-input" type="password" placeholder="Confirm password" value={confirm} onChange={handleChange(setConfirm)} />


                    <input className="form-submit" type="submit" value="Register" />
                </form>
            </div>
        </>
    )
}

export default withRouter(Signup);

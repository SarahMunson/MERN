import React, { useState } from 'react';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    return (
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>First name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                {
                    firstName.length < 2 ?
                    <p>Name must be greater than two characters</p>: ""
                }
            </div>
            <div>
                <label>Last name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
                {
                    lastName.length < 2 ?
                    <p>Name must be greater than two characters</p>: ""
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length < 5 ?
                    <p>email must be greater than five characters</p>: ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                {
                    password.length < 8 ?
                    <p>Password must be greater than eight characters</p>: ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                {
                    confirmPassword !== password?
                    <p>passwords must match</p>: ""
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {firstName}</p>
        <p>last Name: {lastName}</p>
        <p>email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};

export default UserForm;

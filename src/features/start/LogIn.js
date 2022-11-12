import React, { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState("");
    console.log("user: ", user);

    const handleChange = (e) => setUser(e.target.value);

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <h1>BodhiCat</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="user">username: </label>
                <input
                    placeholder="Enter Name..."
                    type="text"
                    name="user"
                    value={user}
                    onChange={handleChange}
                />
                <input type="submit"></input>
            </form>
        </>
    );
};

export default LogIn;

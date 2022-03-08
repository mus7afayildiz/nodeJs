import React, { useState } from "react";

 const addPerson = ({addPerson}) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

const handleClick = (e) => {
    e.preventDeault();
    const newPerson = {
        firstName: firstName,
        lastName: lastName,
    }
    addPerson(newPerson);
};
return (
    <React.Fragment>
        <form>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <button type="submit" onClick={handleClick}>SAVE</button>
        </form>
    </React.Fragment>
);
};

export default addPerson
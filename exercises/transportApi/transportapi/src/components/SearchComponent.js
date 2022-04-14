import React, { useState } from 'react'
import TravelInformation from "./TravelInformation";

/*Search component is created*/
const SearchComponent = () => {

/*Submit control*/
    const submit = e => {
        e.preventDefault();
    }

/*Render Sign up component and user information component*/
    return (
        <div className="container">
            <div id="searchContainer">

                <form onSubmit={submit}>
                    <h1>SEARCH DESTINATION</h1>
                    <div className="mb-3">

                        <input
                            type="name"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Departure" />
                    </div>
                    <div className="mb-3">

                        <input
                            type="name"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Arrival" />
                    </div>
                    
                    <div
                        className="d-grid gap-2 d-md-flex justify-content-md-end">

                        <button
                            className="btn btn-primary me-md-2"
                            type="submit">Search
                        </button>
                    </div>

                </form>

            </div>
        </div>

    )
}

export default SearchComponent;
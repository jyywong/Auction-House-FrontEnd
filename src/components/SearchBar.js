import React, {useState} from 'react'


const SearchBar = ({search, setSearch}) => {
    
    return (
        <>
            <div className="container mt-4">
                <div className="card bg-light">
                    <div className="card-title text-center">
                        <h1>Auction House</h1>
                    </div>
                    <div className="card-body">
                        <form >
                            <input type="text" id="search" className="form-control" placeholder="Search here" value={search} onChange={(e)=> setSearch(e.target.value)}/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar

import React, {useState} from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({search, setSearch}) => {
    
    return (
        <React.Fragment>
            <div className="container mt-4">
                <div className="card bg-light">
                    <div className="card-title text-center">
                        <h1>Auction House</h1>
                    </div>
                    <div className="card-body">
                        <form >
                            <input type="text" 
                            id="search" 
                            data-testid="search"
                            className="form-control" 
                            placeholder="Search here" 
                            value={search} 
                            onChange={(e)=> setSearch(e.target.value)}/>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

SearchBar.propTypes = {
    search: PropTypes.string,
    setSearch: PropTypes.func
}

export default SearchBar

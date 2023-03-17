import React from "react";

const SearchBox = (props) =>{
    return(
        <div className="col col-sm-4">
            <input className="form-control" value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)} placeholder="search movie" type="text" />
        </div>
    )
}

export default SearchBox
import React from 'react'

function Categories ({categories}){
    let buttons = categories.map(function(category, index){return <button key={index}>{category}</button>})
    
    return <div className="Categories">
    <h5>Category Filters</h5>
    {buttons}
    </div>

}

export default Categories 
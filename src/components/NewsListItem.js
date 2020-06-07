import React from 'react'

const NewItem=({newProp})=>{
    return(
        <>
            <div className="new-item" >
            <h2>{newProp.title}</h2>
            <p>{newProp.feed}</p>
            </div>
        </>
    )
}
export default NewItem;
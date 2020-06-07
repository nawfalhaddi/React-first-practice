import React from 'react'
import NewsListItem from './NewsListItem.js'

const NewsList=(props)=>{

  
    
    return(
        <>
          {
            props.news.map((item,index)=>(
                <div key={index}>
                    <NewsListItem newProp={item}/>
                </div>
            ))
            }
        </>
    )
}


export default NewsList;
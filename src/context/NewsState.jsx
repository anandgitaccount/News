import React, { useState } from 'react'
import NewsContext from './NewsContext'

const NewsState = (props) => {
  const [search, setsearch]=useState("")
 
  return (
    <NewsContext.Provider value={{search, setsearch}} >
      {props.children}
    </NewsContext.Provider>
  )
}

export default NewsState

import React from 'react'

export const suggestion=[
    "apple",
    "mango",
    "orange",
    "pineapple",
    "What is the Reactjs?",
    "Where is Validlog?",
    "Why JavaScript is cool",
    "Can i help you?",
    "May i help you?",
    ""
]
localStorage.setItem("searches",JSON.stringify(suggestion))
export const getSuggestions = async (searchText) => {
    
    return suggestion.filter(sugg=>
       sugg.indexOf(searchText) !== -1
)
}

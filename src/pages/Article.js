import React from 'react'

const Article = ({
    title = "Mon article", content = "Un contenu"}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Article
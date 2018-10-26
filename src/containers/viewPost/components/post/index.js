import React from 'react'

const Post = props => {
    const { postData } = props
    const { id, title, categorie, content } = postData

    return (
        <div className="container" id="post">
            <div className="row justify-content-md-center" id="title">
                <div className="col-md-8">
                    <h2>#{id}</h2>
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="row justify-content-md-center" id="categorie">
                <div className="col-md-8">
                    <h4>{categorie}</h4>
                </div>
            </div>
            <div className="row justify-content-md-center" id="content">
                <div className="col-md-8">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}
  
export default Post
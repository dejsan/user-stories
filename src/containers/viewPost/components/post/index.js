import React from 'react'

const Post = props => {
    const { isRequestingPost, postData } = props
    const { id, title, categories, content } = postData

    return (
        <div className="container" id="post">
            {
                isRequestingPost ? 
                    <div className="row justify-content-md-center" id="title">
                        <div className="col-md-8">
                            <h2>Loading...</h2>
                        </div>
                    </div>
                : 
                    <div>
                        <div className="row justify-content-md-center" id="title">
                            <div className="col-md-8">
                                <p>#{id}</p>
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div className="row justify-content-md-center" id="categorie">
                            <div className="col-md-8">
                                <h4>{categories}</h4>
                            </div>
                        </div>
                        <div className="row justify-content-md-center" id="content">
                            <div className="col-md-8">
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}
  
export default Post
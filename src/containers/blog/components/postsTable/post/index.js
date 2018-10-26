import React from 'react'

const Post = props => {
    const {id, title, categorie, viewPost, requestDeletePost, isRequestingDeletePost} = props

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{categorie}</td>
            <td>
                <div className="btn-group">
                <button type="button" className="btn btn-outline-primary" onClick={() => viewPost(id)}>Open</button>
                <button 
                    type="button" 
                    className="btn btn-outline-danger" 
                    onClick={() => requestDeletePost(id)} 
                    disabled={isRequestingDeletePost}
                >
                    X
                </button>
                </div>
            </td>
        </tr>
    )
}

export default Post
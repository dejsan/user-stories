import React from 'react'

const Post = props => {
    const {id, title, categorie, viewPost} = props

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{categorie}</td>
            <td>
                <div class="btn-group">
                <button type="button" class="btn btn-outline-primary" onClick={() => viewPost()}>Open</button>
                <button type="button" class="btn btn-outline-danger">X</button>
                </div>
            </td>
        </tr>
    )
}

export default Post
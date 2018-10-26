import React from 'react'
import Post from './post/index'

const PostsTable = props => {

    const { posts, viewPost } = props
  
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Categorie</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(function(post, i){
                        return <Post key={i} id={post.id} title={post.title} categorie={post.categorie} viewPost={viewPost} />
                    })
                }
            </tbody>
        </table>
    )
}
  
export default PostsTable
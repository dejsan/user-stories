import React from 'react'
import Post from './post/index'

const PostTable = props => {

    const { posts, viewPost } = props
  
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                posts.map(function(post){
                return <Post id={post.id} title={post.title} categorie={post.categorie} viewPost={viewPost} />
                })
            }
            </tbody>
        </table>
    )
}
  
export default PostTable
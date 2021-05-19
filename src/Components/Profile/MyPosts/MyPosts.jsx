import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';
import NewPost from "./NewPost/NewPost";



const MyPosts = (props) => {

    let postElement = props.state.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);

    return (
        <div>
            <NewPost newPostText={props.state.newPostText}
                     dispatch={props.dispatch}/>
            <div className={s.heading}>
                <h3>My Post</h3>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;
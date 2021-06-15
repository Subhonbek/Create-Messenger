import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/post-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onTextChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <NewPost updateNewPostText={onTextChange} addPost={addPost}/>
    );
}

export default NewPostContainer;
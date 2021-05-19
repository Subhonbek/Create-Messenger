import React from "react";
import s from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/post-reducer";

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onTextChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <div className={s.NewPostText}>
                <textarea ref={ newPostElement } onChange={ onTextChange } value={ props.newPostText }/>
            </div>
            <div className={s.NewPostButton}>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
    );
}

export default NewPost;
import React from "react";
import s from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onTextChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
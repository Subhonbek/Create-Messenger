import React from "react";
import pos from './Post.module.css';

const Post = (props) => {

    return (
        <div className={pos.post}>
            <div>
                <div>
                    <img src={'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'} alt={""}/>
                    <label>{props.message}</label>
                </div>
                <div>
                    <span>Like {props.likeCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;
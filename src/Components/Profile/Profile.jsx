import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Post = (props) => {

    return(
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Post;
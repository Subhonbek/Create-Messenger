import {postReducer} from "./post-reducer";
import {messageReducer} from "./message-reducer";
import {friendReducer} from "./friend-reducer";


let store = {
    state: {
        message: {
            dialogData: [
                {
                    id: 1,
                    name: "Jon",
                    dialogImg: "https://download-cs.net/steam/avatars/3412.jpg"
                },
                {
                    id: 2,
                    name: "Henri",
                    dialogImg: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"
                },
                {
                    id: 3,
                    name: "Bek",
                    dialogImg: "https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg"
                }
            ],
            messageData: [
                {
                    id: 1,
                    me: false,
                    message: "Hi!",
                    messageImg: "https://download-cs.net/steam/avatars/3412.jpg"
                },
                {
                    id: 2,
                    me: true,
                    message: "Yo",
                    messageImg: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                },
                {
                    id: 3,
                    me: false,
                    message: "How are you?",
                    messageImg: "https://download-cs.net/steam/avatars/3412.jpg"
                },
                {
                    id: 4,
                    me: true,
                    message: "I'm ok thx)",
                    messageImg: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                },
                {
                    id: 5,
                    me: true,
                    message: "Yo",
                    messageImg: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                }

            ],
            messageText: ''
        },
        friend: {
            friendData: [
                {
                    id: 1,
                    name: "Jon",
                    friendImg: "https://download-cs.net/steam/avatars/3412.jpg"
                },
                {
                    id: 2,
                    name: "Henri",
                    friendImg: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"
                },
                {
                    id: 3,
                    name: "Bek",
                    friendImg: "https://cs7.pikabu.ru/post_img/big/2018/10/20/9/154004999513599819.jpg"
                }
            ]
        },
        post: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likeCount: 20
                },
                {
                    id: 2,
                    message: 'Hello Jon',
                    likeCount: 23
                },
                {
                    id: 3,
                    message: "It's post?",
                    likeCount: 14
                }
            ],
            newPostText: ''
        }
    },
    getState() {
        return this.state;
    },
    reRenderEntireTree() {
    },
    subscribe(observer) {
        this.reRenderEntireTree = observer;
    },

    dispatch(action) {

        this.state.post = postReducer(this.state.post, action);
        this.state.message = messageReducer(this.state.message, action);
        this.state.friend = friendReducer(this.state.friend, action);
        this.reRenderEntireTree(this.state);
    }
};

export default store;
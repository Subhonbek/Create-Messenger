const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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
    };

export const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                me: true,
                message: state.messageText,
                messageImg: "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
            };
            state.messageData.push(newMessage);
            state.messageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.messageText = action.newText;
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator= () => {
    return{
        type: SEND_MESSAGE
    };
};

export const updateMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newText: text
    };
};
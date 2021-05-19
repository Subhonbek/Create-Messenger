import './App.css';
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Post from "./Components/Profile/Profile.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Dialog from "./Components/Dialog/Dialog.jsx";
import {Route} from "react-router";
import News from "./Components/Navbar/News/News";
import Music from "./Components/Navbar/Music/Music";
import Setting from "./Components/Navbar/Setting/Setting";

function App(props) {
    debugger;
    return (
            <div className={'wrapper grid'}>
                <Header/>
                <Navbar state={props.state.friend}/>
                <div className={'wrapper_content'}>
                    <Route path={'/message'} render = { () => <Dialog state={props.state.message}
                                                                      dispatch={props.dispatch}/>}/>
                    <Route path={'/profile'} render = { () => <Post state = {props.state.post}
                                                                    dispatch={props.dispatch}/>}/>
                    <Route path={'/news'} render = { () => <News/>}/>
                    <Route path={'/music'} render = { () => <Music/>}/>
                    <Route path={'/Setting'} render = {() => <Setting/>}/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;

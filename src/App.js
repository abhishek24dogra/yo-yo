import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';

import ChatFeed from "./components/ChatFeed";

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
        height="100vh"
        projectID="b239ee10-2039-4c79-a2bd-502efd1a5ebd"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;

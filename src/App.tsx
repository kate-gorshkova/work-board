import Navbar from 'components/Navbar';
import CreatePost from 'pages/CreatePost';
import Posts from 'pages/Posts';
import Todos from 'pages/Todos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Routes>
                    <Route element={<CreatePost />} path='/'/>
                    <Route element={<CreatePost />} path='/create-post'/>
                    <Route element={<Posts />} path='/posts'/>
                    <Route element={<Todos />} path='/todos'/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;

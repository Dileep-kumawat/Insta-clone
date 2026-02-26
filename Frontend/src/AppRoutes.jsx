import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import NotFound from './features/shared/pages/NotFound'
import Home from './features/post/pages/Home'
import SavedPosts from './features/post/pages/SavedPosts'
import CreatePost from './features/post/pages/CreatePost'
import Profile from './features/profile/pages/Profile'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/saved' element={<SavedPosts />} />
                    <Route path='/create' element={<CreatePost />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
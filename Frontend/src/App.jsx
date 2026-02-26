import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./features/auth/auth.Context"
import { PostProvider } from "./features/post/post.context";
import "./features/shared/style/global.scss";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import ProfileProvider from "./features/profile/profile.context";

const App = () => {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <ProfileProvider>
            <AppRoutes />
          </ProfileProvider>
        </PostProvider>
      </AuthProvider>
    </>
  )
}

export default App
import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./features/auth/auth.Context"
import { PostProvider } from "./features/post/post.context";
import "./features/shared/style/global.scss";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <AppRoutes />
        </PostProvider>
      </AuthProvider>
    </>
  )
}

export default App
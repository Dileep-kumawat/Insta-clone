import AppRoutes from "./AppRoutes"
import { AuthProvider } from "./features/auth/auth.Context"
import "./style.scss"

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
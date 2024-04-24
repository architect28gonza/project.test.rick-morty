import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './modules/pages/login/LoginPage';
import { ProtectedRoute } from './modules/routes/ProtectedRoute';
import { HomePage } from './modules/pages/home/Home';
import { isAuthenticated } from './modules/util/verifyAuth';
function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={isAuthenticated() ? <Navigate to="/home" /> : <LoginPage />} />
				<Route path="/home" element={
					<ProtectedRoute isAuthenticated={isAuthenticated()} redirectPath="/login">
						<HomePage />
					</ProtectedRoute>
				} />
			</Routes>
		</BrowserRouter>
	)
}

export default App

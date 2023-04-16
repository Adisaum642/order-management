import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import OrdersPage from './components/OrdersPage';
import { getCurrentUser, login, logout } from './utils/mockApi';

function App() {
  const [user, setUser] = useState(getCurrentUser());

  const handleLogin = async (email, password, history) => {
    const success = await login(email, password);
    if (success) {
      setUser(getCurrentUser());
      navigate('/orders');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginPage onLogin={handleLogin} history={history} />}
          />
{/*           <Route
            path="/orders"
            element={
              user ? (
                <OrdersPage onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
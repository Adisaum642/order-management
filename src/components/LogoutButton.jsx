import React from 'react';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
  const history = useHistory();

  const handleLogout = () => {
    // Perform any necessary logout actions (e.g. clear session, etc.)
    // ...

    // Navigate to login page
    history.push('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
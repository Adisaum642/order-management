import React from 'react'



export function login(email, password) {
  const mockUserData = [
    {
      email: 'user1@example.com',
      password: 'password1'
    },
    {
      email: 'user2@example.com',
      password: 'password2'
    },
    // ...
  ];
  
  const user = mockUserData.find((user) => user.email === email && user.password === password);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  } else {
    return false;
  }
}

export function logout() {
  localStorage.removeItem('user');
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}
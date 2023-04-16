import React from "react";




export function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  return password.length >= 8;
}
import React from 'react';
import AuthProvider from './src/context/authContext';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

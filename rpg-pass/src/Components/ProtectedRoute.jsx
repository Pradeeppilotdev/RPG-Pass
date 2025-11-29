import React from 'react';
import { Navigate } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';

const ProtectedRoute = ({ children }) => {
  const { ready, authenticated } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;


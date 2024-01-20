import { FunctionComponent } from 'react';
import { AuthContext } from '../context/useAuthContext';
import { mockLoggedInUser } from './mockUser';
import React from 'react';

const MockUseAuthProvider: FunctionComponent = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        loggedInUser: mockLoggedInUser,
        updateLoginContext: jest.fn(),
        logout: jest.fn(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default MockUseAuthProvider;

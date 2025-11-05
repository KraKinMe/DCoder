import { createContext, useState } from 'react';
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null); // Will hold logged-in user's profile

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { initializeApp, FirebaseApp, getApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDi8QF62i-hp_Kx1Lhf4mB6sTDOsJhaUYg',
  authDomain: 'amazine-82c29.firebaseapp.com',
  projectId: 'amazine-82c29',
  storageBucket: 'amazine-82c29.firebasestorage.app',
  messagingSenderId: '571697087559',
  appId: '1:571697087559:web:87090d77db235c1cd7dd62',
  measurementId: 'G-5YR05PEB3C',
};

export type FirebaseContextType = {
  app: FirebaseApp;
  user: User | null;
};

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider: FC<PropsWithChildren> = ({ children }) => {
  const [app] = useState<FirebaseApp>(getApps().length ? getApp() : initializeApp(firebaseConfig));
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => onAuthStateChanged(getAuth(app), setUser), [app]);

  return <FirebaseContext.Provider value={{ app, user }}>{children}</FirebaseContext.Provider>;
};

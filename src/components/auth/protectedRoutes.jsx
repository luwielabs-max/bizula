import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setChecking(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Wait until Firebase finishes checking
  // the current authentication session.
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">
          Loading...
        </p>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Authenticated
  return <Outlet />;
}
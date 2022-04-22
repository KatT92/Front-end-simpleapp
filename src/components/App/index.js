import "./App.css";
import Dashboard from "../Dashboard";
import ProfilePage from "../ProfilePage";
import { SignInPage } from "../SignInPage";

import { Routes, Route } from "react-router-dom";
import { AddGoals } from "../AddGoals";
import GoalsPage from "../GoalsPage";
import AddItemForm from "../AddItemForm";
import Settings from "../Settings";
import Customise from "../Customise";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  const [showReminder, setShowReminder] = useState(true);
  const [showToDo, setShowToDo] = useState(true);
  const [showGoals, setShowGoals] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <SignInPage />
            ) : (
              <Dashboard
                showReminder={showReminder}
                showToDo={showToDo}
                showGoals={showGoals}
              />
            )
          }
        />
        <Route
          path="/profile"
          element={!isAuthenticated ? <SignInPage /> : <ProfilePage />}
        />
        <Route
          path="/add"
          element={!isAuthenticated ? <SignInPage /> : <AddItemForm />}
        />
        <Route
          path="/goals"
          element={!isAuthenticated ? <SignInPage /> : <GoalsPage />}
        />
        <Route
          path="/addgoals"
          element={!isAuthenticated ? <SignInPage /> : <AddGoals />}
        />
        <Route
          path="/settings"
          element={!isAuthenticated ? <SignInPage /> : <Settings />}
        />
        <Route
          path="/customise"
          element={
            !isAuthenticated ? (
              <SignInPage />
            ) : (
              <Customise
                setShowReminder={setShowReminder}
                setShowToDo={setShowToDo}
                setShowGoals={setShowGoals}
                showReminder={showReminder}
                showToDo={showToDo}
                showGoals={showGoals}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;

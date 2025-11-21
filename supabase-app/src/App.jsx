import TaskManager from "./components/TaskManager";
import Auth from "./components/Auth";
import { useEffect, useState } from "react";
import { supabase } from "./supabase/supabase-client";

function App() {
  const [session, setSession] = useState(null);

  async function checkSession() {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  }

  useEffect(() => {
    async function initializeSession() {
      await checkSession();
    }

    initializeSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Auth event:", event);
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function logout() {
    await supabase.auth.signOut();
    setSession(null);
  }

  return (
    <div className="App">
      {session ? (
        <div>
          <button
            onClick={logout}
            style={{
              background: "red",
              paddingBlock: "8px",
              paddingInline: "20px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
              margin: "20px",
            }}
          >
            Logout
          </button>
          <TaskManager />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;

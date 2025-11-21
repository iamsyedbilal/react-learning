import { useState } from "react";
import { supabase } from "../supabase/supabase-client";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  async function handleSubmmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      if (isSignup) {
        // Sign up
        const { error } = await supabase.auth.signUp({ email, password });

        if (error) throw error;
        setSuccessMsg("Account created successfully! Please check your email.");
      } else {
        // Sign in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        setSuccessMsg("Logged in successfully!");
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "15px",
        background: "white",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        {isSignup ? "Create an Account" : "Welcome Back"}
      </h2>

      {/* Error Message */}
      {errorMsg && (
        <div
          style={{
            marginBottom: "15px",
            padding: "10px",
            color: "white",
            background: "#f44336",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          ❌ {errorMsg}
        </div>
      )}

      {/* Success Message */}
      {successMsg && (
        <div
          style={{
            marginBottom: "15px",
            padding: "10px",
            color: "white",
            background: "#4caf50",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          ✅ {successMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: loading ? "#9e9e9e" : "#2196f3",
            color: "white",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "0.2s",
          }}
        >
          {loading ? "Loading..." : isSignup ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <button
        onClick={() => {
          setIsSignup(!isSignup);
          setErrorMsg("");
          setSuccessMsg("");
        }}
        style={{
          marginTop: "15px",
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          background: "#ff9800",
          color: "white",
          cursor: "pointer",
          transition: "0.2s",
        }}
      >
        {isSignup ? "Switch to Sign In" : "Switch to Sign Up"}
      </button>
    </div>
  );
}

export default Auth;

import React, { useEffect } from "react";
import axiosInstance from "./api/axiosInstance";

function App() {
  useEffect(() => {
    // Test API call to backend
    axiosInstance
      .get("/")
      .then((response) => {
        console.log("✅ Backend Response:", response.data);
      })
      .catch((error) => {
        console.error("❌ API Error:", error.message);
      });
  }, []);

  return (
    <div>
      <h1>Learny Platform</h1>
      <p>Check the console for API connection status.</p>
    </div>
  );
}

export default App;

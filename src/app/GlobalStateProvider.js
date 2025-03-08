"use client";
import React, { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [loading, setLoading] = useState(null);
  return (
    <>
      <ToastContainer
        position="top-center" // Choose your desired position
        autoClose={5000} // Optional: default timeout
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
      <GlobalStateContext.Provider
        value={{
          loading,
          setLoading,
        }}
      >
        {children}
      </GlobalStateContext.Provider>
    </>
  );
};
// Custom hook to use the GlobalStateContext
export const useGlobalState = () => useContext(GlobalStateContext);

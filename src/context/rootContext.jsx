import React from "react";
import { UserProvider } from "./userContext";
import { CommunicationProvider } from "./communicationContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <CommunicationProvider>{children}</CommunicationProvider>
    </UserProvider>
  );
};

export default AppProviders;

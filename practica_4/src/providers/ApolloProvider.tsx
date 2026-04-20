"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../lib/api/gqlClient";

const ApolloProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </div>
  );
};

export default ApolloProviderWrapper;

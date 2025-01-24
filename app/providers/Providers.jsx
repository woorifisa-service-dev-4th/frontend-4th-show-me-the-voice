"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let browserQueryClient; // browserQueryClient를 선언합니다.

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR일 경우 보통 staleTime을 지정해야 한다.
        // 클라이언트에서 즉시 refetch 되는 것을 방지하기 위해 0 이상으로 설정
        staleTime: 60 * 1000,
      },
    },
  });
}

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: 항상 새로운 queryClient 생성
    return makeQueryClient();
  } else {
    // Browser: 다시 만들지 않고 기존에 이미 client 존재 시 해당 client 제공
    if (!browserQueryClient) browserQueryClient = makeQueryClient(); // 기존에 없으면 새로 생성
    return browserQueryClient;
  }
}

export default function Providers({ children }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

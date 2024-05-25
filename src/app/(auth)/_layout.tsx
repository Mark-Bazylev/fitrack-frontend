import {Slot} from "expo-router";

import AuthBackground from "@/src/components/auth/AuthBackground";

export default function AuthLayout() {
  return (
    <>
      <AuthBackground/>
      <Slot />
    </>
  );
}


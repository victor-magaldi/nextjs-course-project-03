"use client";
import { useSession } from "next-auth/react";

export function Profile() {
  const session = useSession();

  return (
    <div>
      Profile
      {session?.data?.user ? <p>Logado</p> : <p>Deslogado</p>}
    </div>
  );
}

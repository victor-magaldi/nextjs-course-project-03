"use client";
import { useSession } from "next-auth/react";

export function Profile() {
  const session = useSession();

  return (
    <div>
      Profile Client
      {session?.data?.user ? (
        <p>Logado {JSON.stringify(session?.data?.user)}</p>
      ) : (
        <p>Deslogado</p>
      )}
    </div>
  );
}

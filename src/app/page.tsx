import { auth } from "@/auth";

import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      {session?.user ? <p>Logado</p> : <p>Deslogado</p>}
      <form action={actions.signIn}>
        <Button type="submit" className="bg-green-600">
          Sign In
        </Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit" className="bg-gray-500">
          Sign out
        </Button>
      </form>
    </main>
  );
}

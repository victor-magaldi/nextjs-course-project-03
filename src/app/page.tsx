import { auth } from "@/auth";

import * as actions from "@/actions";
import { Button } from "@nextui-org/react";
import { Profile } from "@/components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <div>
        Profile back-end
        {session?.user ? <p>Logado</p> : <p>Deslogado</p>}
      </div>
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
      <Profile />
    </main>
  );
}

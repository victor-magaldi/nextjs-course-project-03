// import { auth } from "@/auth";

import * as actions from "@/actions";
import { Button } from "@nextui-org/react";
import { Profile } from "@/components/profile";

export default function Home() {
  // const session = await auth();

  return (
    <main>
      <Profile />
    </main>
  );
}

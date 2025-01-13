"use client";
import { Button, Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export function SearchInput() {
  const searchParams = useSearchParams();
  return (
    <form action={actions.search}>
      <Input
        placeholder="buscar"
        id="term"
        name="term"
        defaultValue={searchParams.get("term") || ""}
      />
    </form>
  );
}

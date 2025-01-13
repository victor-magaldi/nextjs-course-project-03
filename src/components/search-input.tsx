"use client";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export function SearchInput() {
  const searchParams = useSearchParams();
  return (
    <Input placeholder="buscar" defaultValue={searchParams.get("term") || ""} />
  );
}

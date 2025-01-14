import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
// import { auth } from "@/auth";
// import * as actions from "@/actions";
import HeaderAuth from "./header-auth";
import { SearchInput } from "./search-input";
import { Suspense } from "react";

export async function Header() {
  // const session = await auth(); if to use, all pages will become dynamic pages;

  return (
    <Navbar className="bg-customGreen shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}

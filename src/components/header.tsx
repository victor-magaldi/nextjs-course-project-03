import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
// import { auth } from "@/auth";
// import * as actions from "@/actions";
import HeaderAuth from "./header-auth";

export async function Header() {
  // const session = await auth(); if to use, all pages will become dynamic pages;

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}

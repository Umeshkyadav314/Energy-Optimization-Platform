"use client";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Home, Sun } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {

  const router = useRouter();

  return (
    <ClerkProvider>
      <header className="bg-blue-600 text-white p-4 w-full fixed z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Sun className="mr-2" />
            <h1 className="text-2xl cursor-pointer font-bold" onClick={() => router.push("/")} >Solar Smart Energy</h1>
          </div>
          <div className="nav-elements flex gap-4 items-baseline">
            <Home onClick={() => router.push("/")} className="cursor-pointer mx-10 "  />

            <div className="mr-8 text-xl font-sans font-semibold">
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </nav>
      </header>
    </ClerkProvider>
  );
}

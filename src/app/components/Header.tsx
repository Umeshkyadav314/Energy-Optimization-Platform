"use client";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Sun } from "lucide-react";

export default function Header() {
  return (
    <ClerkProvider>
      <header className="bg-blue-600 text-white p-4 w-full">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Sun className="mr-2" />
            <h1 className="text-2xl font-bold">Solar Smart Energy</h1>
          </div>
          <div className="mr-8 text-xl font-sans font-semibold">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </header>
    </ClerkProvider>
  );
}

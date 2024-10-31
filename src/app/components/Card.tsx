// Card.tsx
"use client"; // This directive indicates that this is a Client Component

import { useRouter } from "next/navigation"; // Importing from next/navigation

const Card = ({ link, children }: { link: string; children: React.ReactNode }) => {
  const router = useRouter(); // Use the useRouter hook

  return (
    <div
      className="cursor-pointer  hover:shadow-lg transition hover:scale-95 duration-300 rounded-xl shadow-2xl"
      onClick={() => router.push(link)} // Redirect on click
    >
      {children}
    </div>
  );
};

export default Card;

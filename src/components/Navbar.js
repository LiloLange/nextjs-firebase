import { Navbar, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function MNavbar() {
  const user = null;
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          {user ? (
            <Link href={{ pathname: "/admin/[slug]", query: { slug: "lilo" } }}>
              <Button>Write your post</Button>
            </Link>
          ) : (
            <Link href="/enter">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </Navbar>
  );
}

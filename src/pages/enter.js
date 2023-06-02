import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@material-tailwind/react";
export default function Page() {
  const user = null;
  const username = null;
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <Button onClick={signInWithGoogle}>
      <img src="/google.png" width={50} height={50}></img> SignInWithGoogle
    </Button>
  );
}

function SignOutButton() {}

function UsernameForm() {}

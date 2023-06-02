import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Button onClick={() => toast.success("Hello")}>Toast Me</Button>
    </>
  );
}

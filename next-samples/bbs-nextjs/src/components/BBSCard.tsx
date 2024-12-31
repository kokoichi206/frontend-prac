import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

function BBSCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, dolor
        incidunt! Nulla tempore non officia iure ad necessitatibus ex labore
        fuga fugiat quaerat omnis, harum excepturi dolore consectetur animi
        velit.
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/"} className="text-blue-500">
          Read More...
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BBSCard;

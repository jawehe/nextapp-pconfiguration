import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session=await auth();
  console.log(session);
  return (
    <div>
      <h1 className="font-inter text-3xl">hello</h1>
      <form className="px-10 pt-[100px]" action={async() =>{
        "use server";
        await signOut ({
          redirectTo: ROUTES.SIGN_IN,
        });
      }}
    >
      <Button type="submit">Log out</Button>

      </form>
    </div>
  );
}

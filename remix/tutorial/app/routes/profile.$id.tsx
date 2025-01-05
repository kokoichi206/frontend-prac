import { Form, redirect, useLoaderData } from "@remix-run/react";
import { deleteUser, findUser, User } from "users";

// run in a server.
export const loader = async ({ params }: { params: { id: string } }) => {
  console.log("params: ", params);
  const user = findUser(params.id);
  if (!user) {
    return redirect("/");
  }

  return new Response(JSON.stringify(user), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const action = async ({
  params,
  request,
}: {
  params: { id: string };
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("action") as string;

  if (actionType === "logout") {
    return redirect("/");
  }

  if (actionType === "delete") {
    deleteUser(params.id);
    return redirect("/");
  }
};

const Profile = () => {
  const user = useLoaderData<User>();

  const handleClientSideLogout = (action: "delete" | "logout") => {
    localStorage.removeItem("user");

    if (action === "logout") {
      location.pathname = "/";
    }
  };

  return (
    <div>
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>Email: {user.email}</p>
        <div>
          <Form method="post" onSubmit={() => handleClientSideLogout("logout")}>
            <input type="hidden" name="action" value="logout" />
            <button type="submit">Logout</button>
          </Form>

          <Form method="post" onSubmit={() => handleClientSideLogout("delete")}>
            <input type="hidden" name="action" value="delete" />
            <button type="submit">Delete User</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import type { MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { addUser, findUserByEmailAndPassword, User } from "users";
import { v4 as uuidv4 } from "uuid";

type ActionData = {
  error?: string;
  user?: User;
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// This is executed on the server side.
export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  console.log("formData: ", formData);
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return Response.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const newUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  const existingUser = findUserByEmailAndPassword(email, password);
  const user = existingUser || newUser;

  if (!existingUser) {
    addUser(user);
  }

  return Response.json({ user }, { status: 200 });
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const navigate = useNavigate();

  useEffect(() => {
    const LOCAL_STORAGE_USER_KEY = "user";
    const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      location.pathname = `profile/${user.id}`;
    }

    if (actionData?.user) {
      localStorage.setItem(
        LOCAL_STORAGE_USER_KEY,
        JSON.stringify(actionData.user)
      );
      navigate(`profile/${actionData.user.id}`);
    }
  }, [actionData, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md shadow-md rounded-lg bg-white p-6">
        <h1 className="text-2xl text-gray-800 text-center font-bold">Login</h1>
        <Form method="post" className="space-y-6 mt-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium text-sm"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium text-sm"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-sm"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}

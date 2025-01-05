export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password",
  },
  {
    id: "2",
    name: "Jane Doe2",
    email: "john.doe2@example.com",
    password: "password",
  },
];

export const addUser = (user: User) => {
  const existingUser = findUserByEmailAndPassword(user.email, user.password);

  if (!existingUser) {
    users.push(user);
  }
};

export const findUser = (id: string) => users.find((u) => u.id === id);

export const findUserByEmailAndPassword = (email: string, password: string) =>
  users.find((u) => u.email === email && u.password === password);

export const deleteUser = (id: string) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
};

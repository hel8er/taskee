import UserInfo from "@/components/user-info";
import { PrismaClient, User } from "@prisma/client";

export default function Home() {
  const prisma = new PrismaClient();
  // const newUser = prisma.user.create({
  //   data: {
  //     email: "john@example.com",
  //     name: "John Doe",
  //   },
  // });
  // console.log(newUser);
  return (
    <div className="header">
      <h1>Taskee</h1>
      <UserInfo />
    </div>
  );
}

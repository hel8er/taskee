import {NextAuthConfig} from "next-auth";  
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";

export default {
      adapter: PrismaAdapter(prisma),
  
    providers: [],  
    // other options...
} satisfies NextAuthConfig
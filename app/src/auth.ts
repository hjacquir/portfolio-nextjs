import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import {compare} from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth(
    {
        providers: [
            Credentials({
                async authorize(credentials) {
                    const email = credentials?.email

                    if (typeof email !== 'string') {
                        return null
                    }

                    if (email !== process.env.ADMIN_EMAIL) {
                        return null
                    }

                    const password = credentials?.password

                    if (typeof password !== 'string') {
                        return null
                    }

                    const isValid = await compare(
                        password,
                        process.env.ADMIN_PASSWORD_HASH!,
                    )

                    if (!isValid) return null

                    return {id: 'admin', email, name : 'Admin'}
                }
                }
               
            )
        ],
        trustHost: true,
        // emplacement de la page de login
        pages: {signIn: "/login"},
        session: {strategy: "jwt"},
    }
)
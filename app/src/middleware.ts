import {NextResponse} from "next/server";
import {auth} from "@/auth";

// export { auth as middleware } from "@/src/auth"

export default auth(
    (req) => {
        console.log("Middleware exécuté sur :", req.nextUrl.pathname);
        console.log("Session :", req.auth);

        if (!req.auth) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    }
)

export const config = {
    matcher: ["/admin/:path*"],
}
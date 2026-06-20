"use client"

import {useActionState} from "react";
import {loginAction} from "@/app/login/action";

export default function LoginForm() {
    const [error, formAction, isPending] = useActionState(
        async (_: unknown, formData: FormData) => {
            try {
                await loginAction(formData);
                return null;
            } catch {
                return "Email ou mot de passe incorrect";
            }
        },
        null
    )
    return (
      <>
          <main className="experiences-main">
              <form action={formAction}>
                  <div>
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="Email" required />
                  </div>
                  <div>
                      <label htmlFor="password">Mot de passe</label>
                      <input id="password" name="password" type="password" placeholder="Mot de passe" required />
                  </div>
                  { error && <p style={{ color: "red"}} >{error}</p> }
                  <button type="submit" disabled={isPending}>
                      { isPending ? "Connexion ..." : "Se connecter" }
                  </button>
              </form>
          </main>
      </>
    );
}
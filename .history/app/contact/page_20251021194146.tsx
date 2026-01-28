import { redirect } from "next/navigation"

export const metadata = {
  title: "Contacto - Cliste",
  description: "Redirigiendo...",
}

export default function ContactRedirectPage() {
  // Redirect /contact to /contacto
  redirect("/contacto")
}

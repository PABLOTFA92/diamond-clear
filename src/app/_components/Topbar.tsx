import Image from "next/image";
import Link from "next/link";

export function Topbar({ title, subtitle, role }: { title: string; subtitle?: string; role?: "cliente" | "admin" }) {
  const active = (path: string) => (typeof window !== "undefined" && window.location.pathname.startsWith(path) ? "active" : "");
  return (
    <header className="top">
      <Image src="/logo.png" alt="Diamond Clear" width={220} height={120} priority />
      <div>
        <h1>{title}</h1>
        {subtitle ? <div className="small">{subtitle}</div> : null}
        <nav className="pills">
          <Link className={role === "cliente" ? active("/app") : ""} href="/app">Área do Cliente</Link>
          <Link className={active("/login")} href="/login">Login</Link>
          <Link className={role === "admin" ? active("/admin") : ""} href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}

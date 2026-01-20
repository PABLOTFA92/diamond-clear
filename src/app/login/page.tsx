import Link from "next/link";
import { Topbar } from "../_components/Topbar";

export default function LoginPage() {
  return (
    <main className="container">
      <Topbar title="Login" subtitle="Entre com seu telefone" />
      <div className="card">
        <h2>Entrar</h2>
        <form>
          <label>Telefone</label>
          <input defaultValue="43998387306" placeholder="DDD + número" />
          <label>Senha (temporário)</label>
          <input type="password" defaultValue="123456" />
          <div className="row" style={{ marginTop: 14 }}>
            <Link className="btn primary" href="/app">Acessar (demo)</Link>
            <button className="btn" type="button">Esqueci a senha</button>
          </div>
          <p className="small" style={{ marginTop: 10 }}>
            Este é um protótipo funcional (telas). No próximo passo, integraremos Supabase para login por SMS.
          </p>
        </form>
      </div>
    </main>
  );
}

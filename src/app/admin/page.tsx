import Link from "next/link";
import { Topbar } from "../_components/Topbar";

export default function AdminPage() {
  return (
    <main className="container">
      <Topbar title="Admin • Diamond Clear" subtitle="Somente você" role="admin" />
      <div className="row">
        <section className="card" style={{ flex:"1 1 320px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <h2>Alertas</h2>
            <span className="badge brand">NOVO</span>
          </div>
          <p>🔔 2 agendamentos pendentes</p>
          <p>🔔 1 orçamento aceito</p>
        </section>

        <section className="card" style={{ flex:"1 1 320px" }}>
          <h2>Atalhos</h2>
          <p>👥 Clientes</p>
          <p>📅 Aprovar agendamentos</p>
          <p>🧾 Criar orçamento</p>
          <p>📸 Enviar fotos</p>
        </section>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <h2>Pix</h2>
        <p className="small">Cadastre depois no painel:</p>
        <ul>
          <li>Telefone</li>
          <li>CPF/CNPJ</li>
          <li>Chave aleatória</li>
        </ul>
        <div className="row" style={{ marginTop: 14 }}>
          <Link className="btn primary" href="/login">Sair</Link>
          <a className="btn" href="https://wa.me/5543998387306" target="_blank" rel="noreferrer">💬 WhatsApp</a>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";
import { Topbar } from "../_components/Topbar";

export default function ClientHome() {
  return (
    <main className="container">
      <Topbar title="Diamond Clear" subtitle="Bem-vindo(a) • Última sincronização: agora" role="cliente" />
      <div className="row">
        <section className="card" style={{ flex: "1 1 320px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <h2>Status da Piscina</h2>
            <span className="badge brand">ATUAL</span>
          </div>
          <p>• Em manutenção</p>
        </section>

        <section className="card" style={{ flex: "1 1 320px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <h2>Próxima Limpeza</h2>
            <span className="badge warn">PENDENTE</span>
          </div>
          <p>• 24/01 • manhã</p>
          <p className="small">Aguardando aprovação</p>
        </section>
      </div>

      <div className="row" style={{ marginTop: 14 }}>
        <Link className="btn primary" href="/app/agendar">📅 Agendar</Link>
        <Link className="btn" href="/app/orcamentos">🧾 Orçamentos</Link>
        <Link className="btn" href="/app/fotos">📸 Fotos</Link>
        <Link className="btn" href="/app/pagamento">💳 Pix</Link>
        <a className="btn" href="https://wa.me/5543998387306" target="_blank" rel="noreferrer">💬 WhatsApp</a>
      </div>

      <div className="footer">Offline: este protótipo já está preparado para PWA (manifest). Cache offline entra no próximo passo.</div>
    </main>
  );
}

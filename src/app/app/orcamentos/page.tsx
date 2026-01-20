import Link from "next/link";
import { Topbar } from "../../_components/Topbar";

export default function OrcamentosPage() {
  return (
    <main className="container">
      <Topbar title="Orçamentos" subtitle="Aceite com 1 toque" role="cliente" />
      <div className="card">
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <h2>Orçamento #0001</h2>
          <span className="badge warn">PENDENTE</span>
        </div>
        <p>• Troca de areia do filtro</p>
        <p>• Mão de obra + materiais</p>
        <p><b>Total: R$ 480,00</b></p>

        <div className="row" style={{ marginTop: 14 }}>
          <button className="btn primary" type="button">Aceitar</button>
          <button className="btn" type="button">Recusar</button>
          <Link className="btn" href="/app/pagamento">Ir para Pix</Link>
        </div>

        <p className="small" style={{ marginTop: 10 }}>
          Ao aceitar, o Admin recebe notificação automaticamente (no sistema final).
        </p>
      </div>

      <div className="footer"><Link href="/app">← Voltar</Link></div>
    </main>
  );
}

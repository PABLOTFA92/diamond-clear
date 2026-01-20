import Link from "next/link";
import { Topbar } from "../../_components/Topbar";

export default function FotosPage() {
  return (
    <main className="container">
      <Topbar title="Fotos" subtitle="Antes e Depois" role="cliente" />
      <div className="card">
        <h2>Serviços</h2>
        <p>• 20/01 • 4 fotos • <span className="badge ok">OK</span></p>
        <p>• 12/01 • 6 fotos • <span className="badge brand">OFFLINE</span></p>
        <div className="row" style={{ marginTop: 14 }}>
          <button className="btn primary" type="button">Abrir galeria (demo)</button>
          <Link className="btn" href="/app">Voltar</Link>
        </div>
      </div>
    </main>
  );
}

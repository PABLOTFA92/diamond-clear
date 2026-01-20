import Link from "next/link";
import { Topbar } from "../../_components/Topbar";

export default function PagamentoPage() {
  return (
    <main className="container">
      <Topbar title="Pagamento (Pix)" subtitle="Você cadastra depois qual chave usar" role="cliente" />
      <div className="card">
        <h2>Escolha a chave Pix</h2>
        <p className="small">No admin, você poderá cadastrar 1 ou mais opções:</p>
        <ul>
          <li><b>Telefone</b></li>
          <li><b>CPF/CNPJ</b></li>
          <li><b>Chave aleatória</b></li>
        </ul>

        <div className="row" style={{ marginTop: 14 }}>
          <button className="btn primary" type="button">Copiar chave (demo)</button>
          <button className="btn" type="button">Copiar “copia e cola” (demo)</button>
        </div>

        <p className="small" style={{ marginTop: 10 }}>
          Depois a gente coloca QR Code automático quando você cadastrar a chave.
        </p>
      </div>
      <div className="footer"><Link href="/app">← Voltar</Link></div>
    </main>
  );
}

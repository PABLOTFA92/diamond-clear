import Link from "next/link";

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        <h1>Diamond Clear</h1>
        <p className="small">App por link (PWA). Use /login para entrar.</p>
        <div className="row" style={{ marginTop: 14 }}>
          <Link className="btn primary" href="/login">Ir para Login</Link>
          <Link className="btn" href="/admin">Área Admin</Link>
        </div>
      </div>
      <div className="footer">Dica: no celular, abra o link e escolha “Adicionar à tela inicial”.</div>
    </main>
  );
}

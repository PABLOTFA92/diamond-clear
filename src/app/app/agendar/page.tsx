import Link from "next/link";
import { Topbar } from "../../_components/Topbar";

export default function AgendarPage() {
  return (
    <main className="container">
      <Topbar title="Agendamento" subtitle="Solicite e aguarde aprovação" role="cliente" />
      <div className="card">
        <h2>Solicitar limpeza</h2>
        <label>Data sugerida</label>
        <input defaultValue="25/01/2026" />
        <label>Período</label>
        <select defaultValue="Manhã">
          <option>Manhã</option>
          <option>Tarde</option>
        </select>
        <label>Tipo de serviço</label>
        <select defaultValue="Manutenção">
          <option>Manutenção</option>
          <option>Limpeza pesada</option>
          <option>Tratamento químico</option>
        </select>
        <label>Observações</label>
        <textarea rows={3} defaultValue="Acesso pelo portão lateral" />
        <div className="row" style={{ marginTop: 14 }}>
          <button className="btn primary" type="button">Enviar solicitação</button>
          <Link className="btn" href="/app">Voltar</Link>
        </div>
        <p className="small" style={{ marginTop: 10 }}>
          (Demo) No sistema real, ao enviar você dispara notificação pro Admin e o pedido fica “PENDENTE”.
        </p>
      </div>
    </main>
  );
}

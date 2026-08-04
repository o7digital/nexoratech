import { useState } from "react";

const nist = ["Identidad", "MFA", "Correo", "Endpoints", "Red", "Cloud", "Sauvegardes", "Politicas", "Proveedores", "Incidentes"];
const academia = ["Antiphishing", "Contrasenas", "MFA", "Datos sensibles", "Reporte de incidentes"];

export default function CyberAudit() {
  const [tab, setTab] = useState<"scope" | "deliverables">("scope");

  return (
    <section className="cyber section-pad" id="cyber">
      <div className="section-head">
        <p className="section-kicker">Cyber Audit</p>
        <h2>Diagnostico NIST CSF, matriz de riesgos y plan 30/60/90.</h2>
      </div>
      <div className="cyber-layout">
        <div className="audit-panel">
          <div className="tabs" role="tablist" aria-label="Contenido de auditoria">
            <button id="tab-scope" role="tab" aria-selected={tab === "scope"} aria-controls="panel-scope" onClick={() => setTab("scope")}>Alcance tecnico</button>
            <button id="tab-deliverables" role="tab" aria-selected={tab === "deliverables"} aria-controls="panel-deliverables" onClick={() => setTab("deliverables")}>Entregables</button>
          </div>
          <div id={tab === "scope" ? "panel-scope" : "panel-deliverables"} role="tabpanel" aria-labelledby={tab === "scope" ? "tab-scope" : "tab-deliverables"}>
            {tab === "scope" ? (
              <div className="nist-grid">{nist.map((item) => <span key={item}>{item}</span>)}</div>
            ) : (
              <div className="deliverables">
                <article><b>Matriz de riesgos</b><p>Probabilidad, impacto, criticidad y responsables.</p></article>
                <article><b>Reporte ejecutivo</b><p>Lectura clara para direccion y finanzas.</p></article>
                <article><b>Plan 30/60/90</b><p>Acciones priorizadas por urgencia y esfuerzo.</p></article>
              </div>
            )}
          </div>
          <div className="academy"><b>Academia Cyber</b>{academia.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <aside className="cyber-dashboard" aria-label="Dashboard Cyber simulado">
          <div className="score"><span>Madurez</span><strong>68</strong><small>/100</small></div>
          <div className="risk-bars"><i style={{ height: "88%" }}></i><i style={{ height: "54%" }}></i><i style={{ height: "37%" }}></i><i style={{ height: "71%" }}></i></div>
          <div className="alerts">
            <p><b>Critica</b> MFA ausente en 9 cuentas</p>
            <p><b>Alta</b> Backups sin prueba reciente</p>
            <p><b>Media</b> SPF/DKIM incompleto</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

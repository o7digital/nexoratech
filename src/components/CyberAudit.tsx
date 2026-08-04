import { useState } from "react";

const nist = ["NIST CSF", "Identidad y acceso", "MFA", "Correo", "Endpoints", "Red", "Cloud", "Respaldos", "Politicas", "Proveedores", "Respuesta a incidentes"];
const academia = ["Academia Cyber", "Antiphishing", "Contrasenas", "MFA", "Datos sensibles", "Reporte de incidentes"];

export default function CyberAudit() {
  const [tab, setTab] = useState<"scope" | "deliverables">("scope");

  return (
    <section className="cyber section-pad" id="cyber">
      <div className="cyber-copy">
        <p className="section-kicker">Cyber Audit</p>
        <h2>RIESGO CLARO. PLAN EJECUTABLE.</h2>
        <p>Diagnostico basado en NIST CSF para priorizar identidad, correo, endpoints, red, cloud, respaldos, proveedores y respuesta a incidentes.</p>
        <div className="tabs" role="tablist" aria-label="Contenido de auditoria">
          <button id="tab-scope" role="tab" aria-selected={tab === "scope"} aria-controls="panel-cyber" onClick={() => setTab("scope")}>Alcance tecnico</button>
          <button id="tab-deliverables" role="tab" aria-selected={tab === "deliverables"} aria-controls="panel-cyber" onClick={() => setTab("deliverables")}>Entregables</button>
        </div>
        <div id="panel-cyber" role="tabpanel" aria-labelledby={tab === "scope" ? "tab-scope" : "tab-deliverables"}>
          {tab === "scope" ? (
            <div className="nist-grid">{nist.map((item) => <span key={item}>{item}</span>)}</div>
          ) : (
            <div className="deliverables">
              <article><b>Matriz de riesgos</b><p>Probabilidad, impacto, criticidad y responsables.</p></article>
              <article><b>Reporte ejecutivo</b><p>Lectura accionable para direccion.</p></article>
              <article><b>Plan 30/60/90</b><p>Roadmap por prioridad, esfuerzo y urgencia.</p></article>
            </div>
          )}
        </div>
        <div className="academy">{academia.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <aside className="cyber-dashboard" aria-label="Dashboard Cyber">
        <div className="maturity"><span>Madurez</span><strong>68</strong><small>/100</small></div>
        <div className="risk-bars"><i style={{ height: "88%" }}></i><i style={{ height: "54%" }}></i><i style={{ height: "37%" }}></i><i style={{ height: "71%" }}></i></div>
        <div className="alerts">
          <p><b>Critica</b> MFA ausente en 9 cuentas</p>
          <p><b>Alta</b> Respaldos sin prueba reciente</p>
          <p><b>Media</b> SPF/DKIM incompleto</p>
        </div>
        <div className="roadmap"><span>30</span><span>60</span><span>90</span></div>
      </aside>
    </section>
  );
}

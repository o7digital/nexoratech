import { useMemo, useState } from "react";
import { remoteSupport } from "../config/support";

type Mode = "remote" | "onsite";

const copy = {
  remote: {
    title: "Soporte remoto",
    text: "Conexion asistida para diagnosticar correo, VPN, sistema operativo, aplicaciones, impresoras y accesos.",
    steps: ["Ticket clasificado", "Sesion autorizada", "Correccion guiada", "Bitacora enviada"],
  },
  onsite: {
    title: "Visita en sitio",
    text: "Atencion presencial para fallas fisicas, red local, equipos, servidores, refacciones e instalaciones.",
    steps: ["Alcance confirmado", "Tecnico asignado", "Intervencion", "Entrega con evidencia"],
  },
};

export default function SupportDesk() {
  const [mode, setMode] = useState<Mode>("remote");
  const data = copy[mode];
  const supportReady = remoteSupport.url.trim().length > 0;
  const href = useMemo(() => (supportReady ? remoteSupport.url : "#contacto"), [supportReady]);

  return (
    <section className="support section-pad" id="helpdesk">
      <div className="support-copy">
        <p className="section-kicker">Help Desk</p>
        <h2>{data.title} con SLA visible.</h2>
        <p>{data.text}</p>
        <div className="segmented" role="group" aria-label="Tipo de soporte">
          <button type="button" aria-pressed={mode === "remote"} onClick={() => setMode("remote")}>Soporte remoto</button>
          <button type="button" aria-pressed={mode === "onsite"} onClick={() => setMode("onsite")}>Visita en sitio</button>
        </div>
        <a className="button button-primary" href={href} aria-disabled={!supportReady}>
          {supportReady ? remoteSupport.label : "Solicitar enlace de soporte"}
        </a>
      </div>
      <div className="sla-panel" aria-live="polite">
        {data.steps.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{step}</b>
            <small>{index === 0 ? "0-15 min" : index === 1 ? "15-30 min" : index === 2 ? "30-120 min" : "cierre"}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

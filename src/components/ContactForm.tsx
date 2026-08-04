import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSent(true);
      event.currentTarget.reset();
    }, 650);
  }

  return (
    <section className="contact section-pad" id="contacto">
      <div className="contact-copy">
        <p className="section-kicker">Contacto</p>
        <h2>HABLEMOS DE TU OPERACIÓN.</h2>
        <p>Describe la falla, riesgo, servidor, equipo o refaccion que necesitas. Respondemos con el siguiente paso tecnico.</p>
        <div className="contact-meta">
          <span>Respuesta en menos de 1 dia habil</span>
          <span>CDMX · Estado de Mexico · Remoto nacional</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <label>Nombre<input name="name" required minLength={2} autoComplete="name" /></label>
        <label>Empresa<input name="company" required minLength={2} autoComplete="organization" /></label>
        <label>Email<input name="email" required type="email" autoComplete="email" /></label>
        <label>WhatsApp / Telefono<input name="phone" required type="tel" autoComplete="tel" /></label>
        <label className="wide">Servicio<select name="service" required defaultValue=""><option value="" disabled>Selecciona</option><option>Help Desk</option><option>Cyber Audit</option><option>Servidores</option><option>Reparacion</option><option>Equipos</option><option>Refacciones</option></select></label>
        <label className="wide">Mensaje<textarea name="message" required minLength={12} rows={4}></textarea></label>
        <button className="button button-dark" type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar solicitud"} <span aria-hidden="true">↗</span></button>
        {sent && <p className="success" role="status">Solicitud registrada. Nexora Tech preparara el siguiente paso.</p>}
      </form>
    </section>
  );
}

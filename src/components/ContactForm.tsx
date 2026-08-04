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
      <div>
        <p className="section-kicker">Contacto</p>
        <h2>Describe la falla, el riesgo o el equipo que necesitas.</h2>
        <p>Respondemos con el siguiente paso tecnico, no con una plantilla comercial.</p>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <label>Nombre<input name="name" required minLength={2} autoComplete="name" /></label>
        <label>Empresa<input name="company" required minLength={2} autoComplete="organization" /></label>
        <label>Correo<input name="email" required type="email" autoComplete="email" /></label>
        <label>Necesidad<select name="need" required defaultValue=""><option value="" disabled>Selecciona</option><option>Soporte tecnico</option><option>Auditoria cyber</option><option>Servidores</option><option>Equipos o refacciones</option></select></label>
        <label className="wide">Mensaje<textarea name="message" required minLength={12} rows={4}></textarea></label>
        <button className="button button-primary" type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar solicitud"}</button>
        {sent && <p className="success" role="status">Solicitud registrada. NexaCore preparara el siguiente paso.</p>}
      </form>
    </section>
  );
}

import { useState } from "react";
import type { SiteCopy } from "../content/i18n";
import { site } from "../config/site";
import { contactFormEndpoint } from "../config/forms";

export default function ContactForm({ copy }: { copy: SiteCopy["contact"] }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const form = event.currentTarget;
    setLoading(true);
    setSent(false);
    setError(false);

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree request failed");
      }

      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact section-pad" id="contacto">
      <div className="contact-copy">
        <p className="section-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.text}</p>
        <div className="contact-meta">
          {copy.meta.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <input type="hidden" name="_subject" value={`Nueva solicitud de contacto — ${site.name}`} />
        <label>{copy.fields.name}<input name="name" required minLength={2} autoComplete="name" /></label>
        <label>{copy.fields.company}<input name="company" required minLength={2} autoComplete="organization" /></label>
        <label>{copy.fields.email}<input name="email" required type="email" autoComplete="email" /></label>
        <label>{copy.fields.phone}<input name="phone" required type="tel" autoComplete="tel" /></label>
        <label className="wide">
          {copy.fields.service}
          <select name="service" required defaultValue="">
            <option value="" disabled>{copy.fields.select}</option>
            {copy.options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="wide">{copy.fields.message}<textarea name="message" required minLength={12} rows={4}></textarea></label>
        <button className="button button-dark" type="submit" disabled={loading}>{loading ? copy.loading : copy.submit} <span aria-hidden="true">↗</span></button>
        {sent && <p className="success" role="status">{copy.success}</p>}
        {error && <p className="success error" role="alert">{copy.error}</p>}
      </form>
    </section>
  );
}

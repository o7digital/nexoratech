import { useMemo, useState } from "react";
import { remoteSupport } from "../config/support";
import type { SiteCopy } from "../content/i18n";

type Mode = "remote" | "onsite";

export default function SupportDesk({ copy }: { copy: SiteCopy["support"] }) {
  const [mode, setMode] = useState<Mode>("remote");
  const supportReady = remoteSupport.url.trim().length > 0;
  const href = useMemo(() => (supportReady ? remoteSupport.url : "#contacto"), [supportReady]);

  return (
    <section className="support section-pad" id="helpdesk">
      <div className="support-copy">
        <p className="section-kicker">{copy.kicker}</p>
        <h2><span>{copy.title[0]}</span><span className="outline">{copy.title[1]}</span></h2>
        <p>{copy.modes[mode]}</p>
        <div className="segmented" role="group" aria-label={copy.aria}>
          <button type="button" aria-pressed={mode === "remote"} onClick={() => setMode("remote")}>{copy.remoteButton}</button>
          <button type="button" aria-pressed={mode === "onsite"} onClick={() => setMode("onsite")}>{copy.onsiteButton}</button>
        </div>
        <a className="button button-primary" href={href} aria-disabled={!supportReady}>
          {supportReady ? remoteSupport.label : copy.fallback}
        </a>
      </div>
      <div className="sla-panel" aria-live="polite">
        {copy.steps.map((step, index) => (
          <article key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{step}</b>
            <small>{index === 0 ? "0-15 min" : index === 1 ? "15-30 min" : index === 2 ? "30-120 min" : copy.close}</small>
          </article>
        ))}
        <div className="satisfaction"><strong>✓</strong><span>{copy.close}</span></div>
      </div>
    </section>
  );
}

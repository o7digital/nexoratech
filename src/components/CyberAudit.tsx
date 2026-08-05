import { useState } from "react";
import type { SiteCopy } from "../content/i18n";

export default function CyberAudit({ copy }: { copy: SiteCopy["cyber"] }) {
  const [tab, setTab] = useState<"scope" | "deliverables">("scope");

  return (
    <section className="cyber section-pad" id="cyber">
      <div className="cyber-copy">
        <p className="section-kicker">{copy.kicker}</p>
        <h2>{copy.title}</h2>
        <p>{copy.text}</p>
        <div className="tabs" role="tablist" aria-label={copy.tabsAria}>
          <button id="tab-scope" role="tab" aria-selected={tab === "scope"} aria-controls="panel-cyber" onClick={() => setTab("scope")}>{copy.scope}</button>
          <button id="tab-deliverables" role="tab" aria-selected={tab === "deliverables"} aria-controls="panel-cyber" onClick={() => setTab("deliverables")}>{copy.deliverables}</button>
        </div>
        <div id="panel-cyber" role="tabpanel" aria-labelledby={tab === "scope" ? "tab-scope" : "tab-deliverables"}>
          {tab === "scope" ? (
            <div className="nist-grid">{copy.nist.map((item) => <span key={item}>{item}</span>)}</div>
          ) : (
            <div className="deliverables">
              {copy.deliverableItems.map(([title, text]) => <article key={title}><b>{title}</b><p>{text}</p></article>)}
            </div>
          )}
        </div>
        <div className="academy">{copy.academy.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <aside className="cyber-dashboard" aria-label="Dashboard Cyber">
        <div className="maturity"><span>{copy.maturity}</span><strong>68</strong><small>/100</small></div>
        <div className="risk-bars"><i style={{ height: "88%" }}></i><i style={{ height: "54%" }}></i><i style={{ height: "37%" }}></i><i style={{ height: "71%" }}></i></div>
        <div className="alerts">
          {copy.alerts.map(([level, text]) => <p key={level}><b>{level}</b> {text}</p>)}
        </div>
        <div className="roadmap"><span>30</span><span>60</span><span>90</span></div>
      </aside>
      <div className="nist-offer">
        <div>
          <p className="section-kicker">{copy.nistOffer.eyebrow}</p>
          <h3>{copy.nistOffer.title}</h3>
          <p>{copy.nistOffer.text}</p>
        </div>
        <div className="nist-offer-lists">
          <article>
            <b>NIST CSF</b>
            <ul>
              {copy.nistOffer.outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article>
            <b>N1A</b>
            <ul>
              {copy.nistOffer.uses.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

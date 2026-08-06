import { useState } from "react";
import type { SiteCopy } from "../content/i18n";

const formspreeEndpoint = "https://formspree.io/f/xyegynvq";

const cyberLanding = {
  "es-MX": {
    servicesTitle: "Auditoría práctica para empresas que necesitan claridad, no alarmismo.",
    servicesText: "Evaluamos la operación real, traducimos hallazgos a riesgo de negocio y dejamos un plan que dirección, TI y usuarios pueden ejecutar.",
    services: [
      ["Auditoría de Ciberseguridad", "Diagnóstico profesional para identificar vulnerabilidades, validar controles actuales y documentar exposición ante phishing, ransomware, fuga de datos e interrupciones operativas.", ["Evaluación alineada a NIST CSF", "Revisión de accesos, correo, red, endpoints y respaldos", "Matriz de riesgos por impacto, probabilidad y urgencia", "Informe ejecutivo listo para dirección"]],
      ["Capacitación Antiphishing", "Formación para usuarios, mandos medios y equipos técnicos con casos reales, sesiones en vivo y materiales prácticos para reducir el riesgo humano.", ["Phishing, contraseñas, MFA y manejo de información", "Guías para reportar incidentes sin perder tiempo", "Webinars ejecutivos y sesiones por área", "Constancias internas y evidencia de concienciación"]],
    ],
    processTitle: "Del diagnóstico a la remediación, sin perder semanas.",
    processText: "Proceso diseñado para obtener evidencia rápido, priorizar lo crítico y convertir hallazgos en acciones medibles.",
    process: [
      ["01", "Contexto del negocio", "Sistemas críticos, usuarios clave, sedes, proveedores, datos sensibles y escenarios de mayor impacto."],
      ["02", "Revisión técnica", "Controles de identidad, correo, dispositivos, red, nube, respaldos, políticas y respuesta a incidentes."],
      ["03", "Riesgo ejecutivo", "Hallazgos priorizados, nivel de madurez, impacto probable y recomendaciones con responsables sugeridos."],
      ["04", "Plan 30 / 60 / 90", "Quick wins, mejoras estructurales y capacitación para reducir exposición técnica y riesgo humano."],
    ],
    academyTitle: "Capacitación que baja el riesgo donde más ataques empiezan: las personas.",
    academyText: "Sesiones prácticas para detectar engaños, proteger accesos, cuidar información sensible y reportar a tiempo.",
    academy: [
      ["Conciencia cyber", "Phishing y fraude digital", "Correos falsos, enlaces maliciosos, suplantación, ingeniería social y estafas por WhatsApp o llamadas."],
      ["Accesos seguros", "Contraseñas, MFA y dispositivos", "Protección de cuentas, autenticación multifactor, claves únicas y seguridad en laptops y móviles."],
      ["Operación segura", "Datos, ransomware e incidentes", "Manejo de información sensible, señales de ransomware y protocolo de reporte rápido."],
    ],
    plansTitle: "Elige el nivel de profundidad que tu empresa necesita.",
    plansText: "Desde un diagnóstico rápido hasta auditoría, plan de remediación y concienciación cyber.",
    plans: [
      ["Diagnóstico Express", "Para PyMEs que quieren saber dónde están paradas.", "48h", ["Entrevista inicial", "Checklist NIST CSF", "Reporte ejecutivo breve", "Prioridades de mejora"]],
      ["Auditoría + Plan", "La oferta principal para convertir hallazgos en ejecución.", "30/60/90", ["Auditoría de controles", "Matriz de riesgos", "Roadmap de corrección", "Sesión con dirección"]],
      ["Concienciación Cyber", "Capacitación continua para equipos y áreas críticas.", "Cursos", ["Phishing e ingeniería social", "Contraseñas, MFA y accesos", "Manejo seguro de datos", "Ransomware y reporte de incidentes"]],
    ],
    quote: {
      tag: "Cotizador express",
      title: "Estima el alcance de tu diagnóstico.",
      text: "Obtén una referencia rápida según cantidad de equipos, exposición digital, sedes y controles actuales. El alcance final se valida en una llamada técnica.",
      devices: "Equipos a revisar",
      exposure: "Exposición",
      exposures: [["1", "Baja: oficina y correo"], ["1.18", "Media: nube y VPN"], ["1.38", "Alta: e-commerce / datos sensibles"]],
      controls: "Controles actuales",
      controlOptions: [["1.15", "Básicos o sin evidencia"], ["1", "Parciales: MFA / backups"], [".9", "Maduros: políticas y monitoreo"]],
      locations: "Sedes",
      locationOptions: [["0", "1 sede"], ["4500", "2 a 3 sedes"], ["8500", "4+ sedes"]],
      training: "Agregar capacitación",
      trainingOptions: [["0", "No por ahora"], ["8500", "Webinar ejecutivo"], ["18000", "Webinar + curso grabado"]],
      result: "Diagnóstico Express estimado",
      note: "Referencia antes de IVA. Puede variar por alcance técnico, accesos y urgencia.",
      delivery: "Entrega",
      scope: "Alcance",
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      phone: "Teléfono",
      notes: "Notas",
      placeholder: "Cuéntanos si hay sistemas críticos, sedes o urgencia especial.",
      submit: "Enviar datos para propuesta",
      success: "Solicitud enviada. Prepararemos la propuesta.",
      error: "No se pudo enviar. Inténtalo de nuevo.",
      labels: { exposure: { "1": "exposición baja", "1.18": "exposición media", "1.38": "exposición alta" }, controls: { "1.15": "controles básicos", "1": "controles parciales", ".9": "controles maduros" }, training: { "0": "Sin capacitación adicional", "8500": "Incluye webinar ejecutivo", "18000": "Incluye webinar y curso grabado" }, devices: "equipos considerados", scopes: ["PyME", "Empresa media", "Multiárea"] },
    },
  },
  en: {
    servicesTitle: "Practical audits for companies that need clarity, not alarmism.",
    servicesText: "We evaluate real operations, translate findings into business risk and leave a plan leadership, IT and users can execute.",
    services: [["Cybersecurity Audit", "Professional diagnosis to identify vulnerabilities, validate controls and document exposure to phishing, ransomware, data leakage and downtime.", ["NIST CSF aligned assessment", "Access, email, network, endpoint and backup review", "Risk matrix by impact, probability and urgency", "Executive report ready for leadership"]], ["Anti-phishing Training", "Training for users, managers and technical teams with real cases, live sessions and practical materials.", ["Phishing, passwords, MFA and data handling", "Incident reporting guides", "Executive webinars and area sessions", "Internal evidence of awareness"]]],
    processTitle: "From diagnosis to remediation without losing weeks.",
    processText: "A process designed to get evidence fast, prioritize what matters and turn findings into measurable actions.",
    process: [["01", "Business context", "Critical systems, key users, locations, providers, sensitive data and high-impact scenarios."], ["02", "Technical review", "Identity, email, devices, network, cloud, backups, policies and incident response controls."], ["03", "Executive risk", "Prioritized findings, maturity level, likely impact and recommendations with suggested owners."], ["04", "30 / 60 / 90 plan", "Quick wins, structural improvements and training to reduce technical and human risk."]],
    academyTitle: "Training that reduces risk where most attacks start: people.",
    academyText: "Practical sessions to detect deception, protect access, handle sensitive information and report on time.",
    academy: [["Cyber awareness", "Phishing and digital fraud", "Fake emails, malicious links, impersonation, social engineering and phone or WhatsApp scams."], ["Secure access", "Passwords, MFA and devices", "Account protection, multifactor authentication, unique passwords and laptop/mobile safety."], ["Secure operation", "Data, ransomware and incidents", "Sensitive data handling, ransomware signals and fast reporting protocol."]],
    plansTitle: "Choose the depth your company needs.",
    plansText: "From a fast diagnosis to a complete audit, remediation plan and cyber awareness program.",
    plans: [["Express Diagnosis", "For SMEs that need to know where they stand.", "48h", ["Initial interview", "NIST CSF checklist", "Short executive report", "Improvement priorities"]], ["Audit + Plan", "The main offer to turn findings into execution.", "30/60/90", ["Control audit", "Risk matrix", "Correction roadmap", "Leadership session"]], ["Cyber Awareness", "Continuous training for teams and critical areas.", "Courses", ["Phishing and social engineering", "Passwords, MFA and access", "Secure data handling", "Ransomware and incident reporting"]]],
    quote: {
      tag: "Express quote", title: "Estimate the scope of your diagnosis.", text: "Get a quick reference based on devices, digital exposure, locations and current controls. Final scope is validated in a technical call.", devices: "Devices to review", exposure: "Exposure", exposures: [["1", "Low: office and email"], ["1.18", "Medium: cloud and VPN"], ["1.38", "High: e-commerce / sensitive data"]], controls: "Current controls", controlOptions: [["1.15", "Basic or no evidence"], ["1", "Partial: MFA / backups"], [".9", "Mature: policies and monitoring"]], locations: "Locations", locationOptions: [["0", "1 location"], ["4500", "2 to 3 locations"], ["8500", "4+ locations"]], training: "Add training", trainingOptions: [["0", "Not now"], ["8500", "Executive webinar"], ["18000", "Webinar + recorded course"]], result: "Estimated Express Diagnosis", note: "Reference before VAT. May vary by technical scope, access and urgency.", delivery: "Delivery", scope: "Scope", name: "Name", email: "Email", company: "Company", phone: "Phone", notes: "Notes", placeholder: "Tell us if there are critical systems, locations or special urgency.", submit: "Send details for proposal", success: "Request sent. We will prepare the proposal.", error: "Could not send. Please try again.", labels: { exposure: { "1": "low exposure", "1.18": "medium exposure", "1.38": "high exposure" }, controls: { "1.15": "basic controls", "1": "partial controls", ".9": "mature controls" }, training: { "0": "No additional training", "8500": "Includes executive webinar", "18000": "Includes webinar and recorded course" }, devices: "devices considered", scopes: ["SME", "Mid-size company", "Multi-area"] },
    },
  },
  fr: {
    servicesTitle: "Un audit pratique pour les entreprises qui veulent de la clarté, pas de l'alarmisme.",
    servicesText: "Nous évaluons l'opération réelle, traduisons les constats en risque business et livrons un plan exécutable par la direction, l'IT et les utilisateurs.",
    services: [["Audit de cybersécurité", "Diagnostic professionnel pour identifier les vulnérabilités, valider les contrôles et documenter l'exposition au phishing, ransomware, fuite de données et interruptions.", ["Évaluation alignée NIST CSF", "Revue accès, email, réseau, endpoints et sauvegardes", "Matrice des risques par impact, probabilité et urgence", "Rapport exécutif prêt pour la direction"]], ["Formation anti-phishing", "Formation utilisateurs, managers et équipes techniques avec cas réels, sessions live et supports pratiques.", ["Phishing, mots de passe, MFA et données", "Guides de signalement d'incidents", "Webinars exécutifs et sessions par équipe", "Preuves internes de sensibilisation"]]],
    processTitle: "Du diagnostic à la remédiation sans perdre des semaines.",
    processText: "Un processus conçu pour obtenir des preuves vite, prioriser le critique et transformer les constats en actions mesurables.",
    process: [["01", "Contexte business", "Systèmes critiques, utilisateurs clés, sites, fournisseurs, données sensibles et scénarios d'impact."], ["02", "Revue technique", "Contrôles identité, email, appareils, réseau, cloud, sauvegardes, politiques et réponse incidents."], ["03", "Risque exécutif", "Constats priorisés, maturité, impact probable et recommandations avec responsables suggérés."], ["04", "Plan 30 / 60 / 90", "Quick wins, améliorations structurelles et formation pour réduire le risque technique et humain."]],
    academyTitle: "Une formation qui réduit le risque là où la plupart des attaques commencent : les personnes.",
    academyText: "Sessions pratiques pour détecter les pièges, protéger les accès, gérer les données sensibles et signaler à temps.",
    academy: [["Culture cyber", "Phishing et fraude digitale", "Faux emails, liens malveillants, usurpation, ingénierie sociale et arnaques WhatsApp ou téléphone."], ["Accès sécurisés", "Mots de passe, MFA et appareils", "Protection des comptes, MFA, mots de passe uniques et sécurité laptop/mobile."], ["Opération sécurisée", "Données, ransomware et incidents", "Données sensibles, signaux ransomware et protocole de signalement rapide."]],
    plansTitle: "Choisissez le niveau de profondeur dont votre entreprise a besoin.",
    plansText: "Du diagnostic rapide au programme complet d'audit, remédiation et sensibilisation cyber.",
    plans: [["Diagnostic Express", "Pour les PME qui veulent savoir où elles en sont.", "48h", ["Entretien initial", "Checklist NIST CSF", "Rapport exécutif court", "Priorités d'amélioration"]], ["Audit + Plan", "L'offre principale pour transformer les constats en exécution.", "30/60/90", ["Audit des contrôles", "Matrice des risques", "Roadmap de correction", "Session direction"]], ["Sensibilisation Cyber", "Formation continue pour équipes et zones critiques.", "Cours", ["Phishing et ingénierie sociale", "Mots de passe, MFA et accès", "Gestion sécurisée des données", "Ransomware et signalement incidents"]]],
    quote: {
      tag: "Cotisation express", title: "Estimez le périmètre de votre diagnostic.", text: "Obtenez une référence rapide selon les équipements, l'exposition digitale, les sites et les contrôles actuels. Le périmètre final est validé en appel technique.", devices: "Équipements à revoir", exposure: "Exposition", exposures: [["1", "Basse : bureau et email"], ["1.18", "Moyenne : cloud et VPN"], ["1.38", "Élevée : e-commerce / données sensibles"]], controls: "Contrôles actuels", controlOptions: [["1.15", "Basiques ou sans preuve"], ["1", "Partiels : MFA / sauvegardes"], [".9", "Matures : politiques et supervision"]], locations: "Sites", locationOptions: [["0", "1 site"], ["4500", "2 à 3 sites"], ["8500", "4+ sites"]], training: "Ajouter formation", trainingOptions: [["0", "Pas maintenant"], ["8500", "Webinar exécutif"], ["18000", "Webinar + cours enregistré"]], result: "Diagnostic Express estimé", note: "Référence hors TVA. Peut varier selon périmètre technique, accès et urgence.", delivery: "Livraison", scope: "Périmètre", name: "Nom", email: "Email", company: "Entreprise", phone: "Téléphone", notes: "Notes", placeholder: "Indiquez les systèmes critiques, sites ou urgence particulière.", submit: "Envoyer pour proposition", success: "Demande envoyée. Nous préparerons la proposition.", error: "Envoi impossible. Veuillez réessayer.", labels: { exposure: { "1": "exposition basse", "1.18": "exposition moyenne", "1.38": "exposition élevée" }, controls: { "1.15": "contrôles basiques", "1": "contrôles partiels", ".9": "contrôles matures" }, training: { "0": "Sans formation additionnelle", "8500": "Inclut webinar exécutif", "18000": "Inclut webinar et cours enregistré" }, devices: "équipements considérés", scopes: ["PME", "Entreprise moyenne", "Multi-zone"] },
    },
  },
} as const;

function CyberQuote({ data }: { data: (typeof cyberLanding)[keyof typeof cyberLanding] }) {
  const [devices, setDevices] = useState(40);
  const [exposure, setExposure] = useState("1.18");
  const [controls, setControls] = useState("1");
  const [locations, setLocations] = useState("0");
  const [training, setTraining] = useState("0");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const q = data.quote;
  const deviceBlock = Math.ceil(devices / 25);
  const base = 22000 + deviceBlock * 5200;
  const total = Math.round(((base * Number(exposure) * Number(controls)) + Number(locations) + Number(training)) / 500) * 500;
  const delivery = devices > 120 || exposure === "1.38" ? "72h" : "48h";
  const scope = devices < 50 ? q.labels.scopes[0] : devices < 130 ? q.labels.scopes[1] : q.labels.scopes[2];
  const price = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(total);
  const summary = `${devices} | ${q.labels.exposure[exposure as keyof typeof q.labels.exposure]} | ${q.labels.controls[controls as keyof typeof q.labels.controls]} | ${q.labels.training[training as keyof typeof q.labels.training]}`;

  async function submit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);
    const form = event.currentTarget;
    try {
      const response = await fetch(formspreeEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Formspree request failed");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="cyber-quote" onSubmit={submit}>
      <div>
        <span className="cyber-tag">{q.tag}</span>
        <h3>{q.title}</h3>
        <p>{q.text}</p>
        <div className="cyber-quote-form">
          <label className="wide">{q.devices}<div className="range-row"><input name="devices" type="range" min="5" max="250" step="5" value={devices} onChange={(e) => setDevices(Number(e.currentTarget.value))} /><span>{devices}</span></div></label>
          <label>{q.exposure}<select name="exposure" value={exposure} onChange={(e) => setExposure(e.currentTarget.value)}>{q.exposures.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
          <label>{q.controls}<select name="controls" value={controls} onChange={(e) => setControls(e.currentTarget.value)}>{q.controlOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
          <label>{q.locations}<select name="locations" value={locations} onChange={(e) => setLocations(e.currentTarget.value)}>{q.locationOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
          <label>{q.training}<select name="training" value={training} onChange={(e) => setTraining(e.currentTarget.value)}>{q.trainingOptions.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        </div>
      </div>
      <div className="cyber-quote-result">
        <div><span>{q.result}</span><strong>{price} MXN</strong><p>{q.note}</p></div>
        <div className="cyber-quote-metrics"><article><span>{q.delivery}</span><b>{delivery}</b></article><article><span>{q.scope}</span><b>{scope}</b></article></div>
        <ul><li>{devices} {q.labels.devices}</li><li>{q.labels.exposure[exposure as keyof typeof q.labels.exposure]} / {q.labels.controls[controls as keyof typeof q.labels.controls]}</li><li>{q.labels.training[training as keyof typeof q.labels.training]}</li></ul>
        <div className="cyber-quote-contact">
          <label>{q.name}<input name="name" required autoComplete="name" /></label>
          <label>{q.email}<input name="email" type="email" required autoComplete="email" /></label>
          <label>{q.company}<input name="company" autoComplete="organization" /></label>
          <label>{q.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
          <label className="wide">{q.notes}<textarea name="message" placeholder={q.placeholder}></textarea></label>
        </div>
        <input type="hidden" name="_subject" value="Cotización Diagnóstico Express INFRASEGURA NEXORA TECH" />
        <input type="hidden" name="estimated_price" value={`${price} MXN`} />
        <input type="hidden" name="delivery" value={delivery} />
        <input type="hidden" name="scope" value={scope} />
        <input type="hidden" name="quote_summary" value={summary} />
        <button className="button button-primary" type="submit" disabled={loading}>{loading ? "..." : q.submit}</button>
        {sent && <p className="success">{q.success}</p>}
        {error && <p className="success error">{q.error}</p>}
      </div>
    </form>
  );
}

export default function CyberAudit({ copy, lang }: { copy: SiteCopy["cyber"]; lang: SiteCopy["langTag"] }) {
  const [tab, setTab] = useState<"scope" | "deliverables">("scope");
  const data = cyberLanding[lang as keyof typeof cyberLanding] ?? cyberLanding.en;

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
      <div className="cyber-program">
        <div className="cyber-program-head">
          <h3>{data.servicesTitle}</h3>
          <p>{data.servicesText}</p>
        </div>
        <div className="cyber-program-cards">
          {data.services.map(([title, text, items]) => (
            <article key={title}>
              <span className="cyber-tag">NIST</span>
              <h4>{title}</h4>
              <p>{text}</p>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="cyber-program-head">
          <h3>{data.processTitle}</h3>
          <p>{data.processText}</p>
        </div>
        <div className="cyber-process">
          {data.process.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="cyber-program-head">
          <h3>{data.academyTitle}</h3>
          <p>{data.academyText}</p>
        </div>
        <div className="cyber-academy">
          {data.academy.map(([tag, title, text]) => (
            <article key={title}>
              <span className="cyber-tag">{tag}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="cyber-program-head">
          <h3>{data.plansTitle}</h3>
          <p>{data.plansText}</p>
        </div>
        <div className="cyber-plans">
          {data.plans.map(([title, text, amount, items], index) => (
            <article className={index === 1 ? "featured" : ""} key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
              <strong>{amount}</strong>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <CyberQuote data={data} />
      </div>
    </section>
  );
}

const services = [
  { id: "01", title: "Soporte técnico", detail: "Respuesta rápida, monitoreo y continuidad." },
  { id: "02", title: "Ciberseguridad", detail: "Protección activa para datos y equipos." },
  { id: "03", title: "Desarrollo web", detail: "Experiencias veloces hechas para convertir." },
  { id: "04", title: "SEO", detail: "Visibilidad orgánica con resultados medibles." },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Sistema digital protegido y en crecimiento">
      <div className="line line-a" />
      <div className="line line-b" />
      <div className="line line-c" />
      <div className="coral-block block-a" />
      <div className="coral-block block-b" />
      <div className="arc" />
      <span className="node node-a" />
      <span className="node node-b" />
      <span className="node node-c" />
      <div className="visual-card lock-card" aria-hidden="true">
        <span className="lock-body"><i /></span>
      </div>
      <div className="visual-card shield-card" aria-hidden="true">
        <span className="shield"><i /><b /></span>
      </div>
      <div className="visual-card globe-card" aria-hidden="true">
        <span className="globe"><i /><b /></span>
      </div>
      <div className="visual-card growth-card" aria-hidden="true">
        <span className="mini-chart"><i /><b /><em /></span>
        <small>Crecimiento</small>
      </div>
      <div className="dot-grid" />
      <div className="status-pill"><span /> Sistemas protegidos</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Nexora, inicio">NEX<span>O</span>RA</a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#enfoque">Enfoque</a>
          <a href="#casos">Casos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Hablemos <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Tecnología que protege. Web que convierte.</p>
          <h1>Tu negocio, siempre activo. <span>Siempre seguro.</span></h1>
          <p className="hero-text">
            Soporte técnico, ciberseguridad, desarrollo web y SEO para empresas
            que quieren crecer con confianza en México.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Solicitar diagnóstico <Arrow /></a>
            <a className="button button-secondary" href="#servicios">Ver servicios</a>
          </div>
          <div className="trust-line">
            <span className="trust-dot" /> Atención en México · Remota y presencial
          </div>
        </div>
        <SystemVisual />
      </section>

      <section className="service-rail" id="servicios" aria-label="Servicios principales">
        {services.map((service) => (
          <a className="rail-card" href={`#servicio-${service.id}`} key={service.id}>
            <span className="rail-id">{service.id}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.detail}</p>
            </div>
            <Arrow />
          </a>
        ))}
      </section>

      <section className="statement section-pad" id="enfoque">
        <p className="section-kicker">Una sola visión</p>
        <div className="statement-grid">
          <h2>No necesitas cuatro proveedores. Necesitas un socio que entienda <em>todo el sistema.</em></h2>
          <div className="statement-copy">
            <p>
              Conectamos infraestructura, seguridad, experiencia digital y visibilidad
              para eliminar puntos ciegos y convertir la tecnología en crecimiento.
            </p>
            <a className="text-link" href="#metodo">Conoce nuestro enfoque <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="services-detail">
        <article className="service-detail coral-panel" id="servicio-01">
          <div className="detail-number">01 / SOPORTE</div>
          <h3>Tu operación no espera.</h3>
          <p>Resolvemos incidencias, cuidamos tus equipos y damos seguimiento antes de que un problema detenga a tu equipo.</p>
          <ul><li>Mesa de ayuda</li><li>Monitoreo y mantenimiento</li><li>Soporte remoto y presencial</li></ul>
          <span className="detail-mark">24<span>/7</span></span>
        </article>
        <article className="service-detail dark-panel" id="servicio-02">
          <div className="detail-number">02 / CIBERSEGURIDAD</div>
          <h3>Protección sin fricción.</h3>
          <p>Reducimos riesgos con una estrategia clara, controles prácticos y vigilancia continua para que tu negocio avance seguro.</p>
          <ul><li>Diagnóstico de vulnerabilidades</li><li>Protección de accesos y datos</li><li>Respuesta ante incidentes</li></ul>
          <div className="risk-ring"><b>−72%</b><small>superficie de riesgo*</small></div>
        </article>
        <article className="service-detail light-panel" id="servicio-03">
          <div className="detail-number">03 / DESARROLLO WEB</div>
          <h3>Rápido, claro, rentable.</h3>
          <p>Diseñamos sitios y plataformas que cargan rápido, transmiten confianza y convierten visitas en oportunidades reales.</p>
          <ul><li>Web corporativa y e-commerce</li><li>Automatización e integraciones</li><li>Optimización de conversión</li></ul>
          <div className="speed-card"><b>0.9s</b><small>carga objetivo</small><i /></div>
        </article>
        <article className="service-detail sand-panel" id="servicio-04">
          <div className="detail-number">04 / SEO</div>
          <h3>Que te encuentren primero.</h3>
          <p>Posicionamos tu negocio con una estrategia de contenidos, SEO técnico y señales locales diseñadas para México.</p>
          <ul><li>SEO técnico y local</li><li>Contenido que responde intención</li><li>Reportes transparentes</li></ul>
          <div className="seo-bars"><i /><i /><i /><i /><span>+ visibilidad</span></div>
        </article>
      </section>

      <section className="proof section-pad" id="casos">
        <div className="proof-head">
          <div><p className="section-kicker">Impacto medible</p><h2>Menos problemas.<br />Más negocio.</h2></div>
          <p>La tecnología solo importa cuando produce resultados. Medimos cada proyecto con indicadores claros desde el primer día.</p>
        </div>
        <div className="metrics">
          <article><strong>−65%</strong><span>tiempo promedio de resolución</span><small>Soporte gestionado</small></article>
          <article><strong>99.9%</strong><span>continuidad operativa objetivo</span><small>Infraestructura crítica</small></article>
          <article><strong>×3.2</strong><span>más oportunidades orgánicas</span><small>Web + SEO</small></article>
        </div>
        <p className="metric-note">*Cifras demostrativas para el mockup. Se sustituyen por resultados reales del cliente.</p>
      </section>

      <section className="method section-pad" id="metodo">
        <div className="method-intro">
          <p className="section-kicker">Método Nexora</p>
          <h2>Primero entendemos.<br />Después resolvemos.</h2>
        </div>
        <div className="steps">
          <article><span>01</span><h3>Diagnóstico</h3><p>Revisamos tu operación, riesgos, presencia digital y prioridades.</p></article>
          <article><span>02</span><h3>Plan claro</h3><p>Definimos alcance, tiempos, responsables y métricas sin letra pequeña.</p></article>
          <article><span>03</span><h3>Implementación</h3><p>Trabajamos por fases, comunicamos avances y minimizamos interrupciones.</p></article>
          <article><span>04</span><h3>Mejora continua</h3><p>Medimos, protegemos y optimizamos para que la solución siga creciendo.</p></article>
        </div>
      </section>

      <section className="contact section-pad" id="contacto">
        <div className="contact-main">
          <p className="section-kicker">Tu siguiente paso</p>
          <h2>Cuéntanos qué te está frenando.</h2>
          <p>En una conversación de 30 minutos identificamos riesgos, oportunidades y el mejor punto para empezar.</p>
          <a className="button contact-button" href="mailto:hola@nexora.mx?subject=Quiero%20un%20diagnóstico">Solicitar diagnóstico gratuito <Arrow /></a>
        </div>
        <aside className="contact-aside">
          <span>RESPUESTA EN MENOS DE 1 DÍA HÁBIL</span>
          <a href="mailto:hola@nexora.mx">hola@nexora.mx</a>
          <p>Atención en Ciudad de México y todo México.</p>
          <div className="availability"><i /> Agenda abierta esta semana</div>
        </aside>
      </section>

      <footer>
        <a className="brand" href="#inicio">NEX<span>O</span>RA</a>
        <p>Soporte · Ciberseguridad · Desarrollo Web · SEO</p>
        <span>© 2026 Nexora México</span>
      </footer>
    </main>
  );
}

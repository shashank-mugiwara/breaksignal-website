import { PRODUCTS_CONTENT } from "../content";

export default function ProductsSection() {
  const { atomicSync, agentManage } = PRODUCTS_CONTENT;

  return (
    <section id="products" className="section" aria-labelledby="products-title">
      <header className="section-head">
        <h2 id="products-title" className="section-title">
          {PRODUCTS_CONTENT.heading}
        </h2>
        <p className="section-lede">{PRODUCTS_CONTENT.lede}</p>
      </header>

      <div className="products-stack">
        {/* AtomicSync Product Card */}
        <article className="product-panel" aria-labelledby="atomicsync-title">
          <div className="product-header">
            <h3 id="atomicsync-title" className="product-name">
              {atomicSync.name}
            </h3>
            <span className="status-badge">{atomicSync.statusBadge}</span>
          </div>

          <p className="product-summary">{atomicSync.summary}</p>

          <div className="facts-list" role="list" aria-label="AtomicSync details">
            {atomicSync.facts.map((fact) => (
              <div key={fact.label} className="fact-item" role="listitem">
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </article>

        {/* AgentManage Product Card */}
        <article className="product-panel" aria-labelledby="agentmanage-title">
          <div className="product-header">
            <h3 id="agentmanage-title" className="product-name">
              {agentManage.name}
            </h3>
            <span className="status-badge">{agentManage.statusBadge}</span>
          </div>

          <p className="product-summary">{agentManage.summary}</p>

          {/* 5-Role Table */}
          <div className="roles-table-wrapper">
            <table className="roles-table">
              <caption className="roles-caption">{agentManage.rolesCaption}</caption>
              <thead>
                <tr>
                  <th scope="col">Role</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                {agentManage.roles.map((item) => (
                  <tr key={item.role}>
                    <td className="role-name-cell">{item.role}</td>
                    <td className="role-desc-cell">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* AgentManage Facts */}
          <div className="facts-list" role="list" aria-label="AgentManage details">
            {agentManage.facts.map((fact) => (
              <div key={fact.label} className="fact-item" role="listitem">
                <span className="fact-label">{fact.label}</span>
                <span className="fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

import { WHAT_WE_DO_CONTENT } from "../content";

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="section" aria-labelledby="what-we-do-title">
      <header className="section-head">
        <h2 id="what-we-do-title" className="section-title">
          {WHAT_WE_DO_CONTENT.heading}
        </h2>
        <p className="section-lede">{WHAT_WE_DO_CONTENT.lede}</p>
      </header>

      <div className="offers-ruled-list" role="list" aria-label="What we do offers">
        {WHAT_WE_DO_CONTENT.offers.map((offer, index) => (
          <article key={offer.id} className="offer-row" role="listitem">
            <div className="offer-row-heading">
              <span className="offer-row-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="offer-row-title">{offer.title}</h3>
            </div>
            <div className="offer-row-content">
              <p className="offer-row-summary">{offer.summary}</p>
              <ul className="offer-row-points" aria-label={`${offer.title} details`}>
                {offer.points.map((point) => (
                  <li key={point} className="offer-row-point">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

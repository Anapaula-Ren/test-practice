export function ReadingList() {
  return (
    <section className="reading-list">
      <div className="reading-list__header">
        <h2>Shelf</h2>
        <p>Books currently saved on the reading list.</p>
      </div>

      <ul className="book-grid">
        <li className="book-card">
          <h3>Project Hail Mary</h3>
          <dl className="book-card__meta">
            <div>
              <dt>Author</dt>
              <dd>Andy Weir</dd>
            </div>
            <div>
              <dt>Pages</dt>
              <dd>496</dd>
            </div>
          </dl>
        </li>

        <li className="book-card">
          <h3>Circe</h3>
          <dl className="book-card__meta">
            <div>
              <dt>Author</dt>
              <dd>Madeline Miller</dd>
            </div>
            <div>
              <dt>Pages</dt>
              <dd>393</dd>
            </div>
          </dl>
        </li>

        <li className="book-card">
          <h3>The Midnight Library</h3>
          <dl className="book-card__meta">
            <div>
              <dt>Author</dt>
              <dd>Matt Haig</dd>
            </div>
            <div>
              <dt>Pages</dt>
              <dd>304</dd>
            </div>
          </dl>
        </li>
      </ul>
    </section>
  )
}

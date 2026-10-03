import './Notes.css';

const notes = [
  'Make the hard part understandable.',
  'Keep the feedback loop short.',
  'Useful first; delightful when possible.',
];

function Notes() {
  return (
    <section id="notes" className="notes section-shell">
      <div className="notes-content">
        <div className="section-heading">
          <div>
            <p className="section-kicker">A few working notes</p>
            <h2 className="section-title">Simple rules I come back to.</h2>
          </div>
          <p className="section-intro">Small reminders for the way I build and work with people.</p>
        </div>
        <ol className="notes-list">
          {notes.map((note) => <li key={note}>{note}</li>)}
        </ol>
      </div>
    </section>
  );
}

export default Notes;

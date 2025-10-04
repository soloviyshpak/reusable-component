export default function Section({ children }) {
  return (
    <section className="component-group">
      <h2>Sizes</h2>
      <div className="component-card">{children}</div>
    </section>
  );
}

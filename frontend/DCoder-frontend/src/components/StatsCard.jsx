function StatsCard({ title, stat }) {
  return (
    <div className="stats-card">
      <h3 className="stats-card-title">{title}</h3>
      <p className="stats-card-stat">{stat}</p>
    </div>
  );
}

export default StatsCard;

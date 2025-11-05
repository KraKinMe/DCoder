import { useEffect, useState } from 'react';
import axios from 'axios';
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';
import Spinner from '../components/Spinner';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function Dashboard() {
  const [stats, setStats] = useState(null);      // Store user stats
  const [loading, setLoading] = useState(true);  // Show spinner during fetch
  const [error, setError] = useState('');        // Error messages

  useEffect(() => {
    // Fetch the stats on mount!
    axios.get(`${API_BASE}/api/user/stats`, { withCredentials: true })
      .then(res => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.error || 'Failed to fetch stats');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  // If stats exist, display cards and chart
  return (
    <div>
      <StatsCard title="GitHub Repos" stat={stats.githubRepos} />
      <StatsCard title="LeetCode Solved" stat={stats.leetcodeSolved} />
      <Chart labels={stats.months} data={stats.monthlySolves} />
    </div>
  );
}

export default Dashboard;

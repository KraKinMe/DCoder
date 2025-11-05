import { useEffect, useState } from 'react';
import axios from 'axios';
import GithubAvatar from '../components/GithubAvatar';
import Spinner from '../components/Spinner';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE}/api/user/profile`, { withCredentials: true })
      .then(res => {
        setProfile(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.error || 'Failed to fetch profile');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ maxWidth: "400px", margin: "2em auto", background: "var(--color-bg)", padding: "2em", borderRadius: "12px", textAlign: "center" }}>
      <GithubAvatar avatarUrl={profile.avatarUrl} username={profile.username} />
      <h2 style={{ marginTop: "1em" }}>{profile.username}</h2>
      <p style={{ color: "var(--color-light)" }}>{profile.email}</p>
      <div style={{ margin: "1em 0" }}>
        <div>GitHub Repos: <strong>{profile.githubRepos}</strong></div>
        <div>LeetCode Solved: <strong>{profile.leetcodeSolved}</strong></div>
      </div>
    </div>
  );
}

export default Profile;

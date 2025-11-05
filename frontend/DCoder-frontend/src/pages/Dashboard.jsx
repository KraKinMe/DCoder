import ThemeToggle from '../components/ThemeToggle';
import GithubAvatar from '../components/GithubAvatar';
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';

// For test/demo purposes, define mock user:
const mockUser = {
  avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
  username: "octocat",
  githubRepos: 42
};

function Dashboard() {
  return (
    <div>
      <ThemeToggle />
      <GithubAvatar avatarUrl={mockUser.avatarUrl} username={mockUser.username} />
      <StatsCard title="GitHub Repos" stat={mockUser.githubRepos} />
      <Chart labels={["Jan","Feb","Mar"]} data={[8, 18, 5]} />
    </div>
  );
}

export default Dashboard;

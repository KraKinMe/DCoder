function GithubAvatar({ avatarUrl, username }) {
  return (
    <div className="github-avatar">
      <img src={avatarUrl} alt="avatar" className="github-avatar-img" />
      <span className="github-avatar-name">{username}</span>
    </div>
  );
}
export default GithubAvatar;

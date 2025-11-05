const passport=require('passport');
const GitHubStrategy=require('passport-github2').Strategy;
const User=require('./models/User.js');

passport.use(new GitHubStrategy({
    clientID:process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL:'/api/auth/github/callback'
},
async function(accessToken, refreshToken, profile, done) {

  let user = await User.findOne({ githubId: profile.id });
  if (!user) {
    user = new User({
      githubId: profile.id,
      githubUsername: profile.username,
      email: profile.emails?.[0].value || "",
    });
    await user.save();
  }
  return done(null, user);
}));

passport.serializeUser((user, done) => { done(null, user.id); });
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

module.exports=passport;
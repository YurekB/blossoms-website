const Header = () => {
  console.log();

  return (
    <div class="Header">
      <div class="topText">
        <img class="logo" src="logo.png" alt="Blossoms Logo" />
        <h1>Fan Page</h1>
      </div>
      <div class="links">
        <a
          id="spotify"
          href="https://open.spotify.com/artist/22RISwgVJyZu9lpqAcv1F5"
          target="_blank"
          rel="noreferrer"
        >
          Spotify
        </a>
        <a
          id="instagram"
          href="https://www.instagram.com/blossomsband/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          id="website"
          href="https://www.blossomsband.co.uk/"
          target="_blank"
          rel="noreferrer"
        >
          Official Website
        </a>
      </div>
    </div>
  );
};

export default Header;

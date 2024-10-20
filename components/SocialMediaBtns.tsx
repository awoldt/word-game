const SocialMedia = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <p style={{ marginBottom: "0px" }}>Share with friends</p>
      <a
        href={
          "https://www.facebook.com/sharer/sharer.php?u=https://word-game-lovat.vercel.app/"
        }
        target={"_blank"}
        rel="noreferrer"
        className="fa fa-facebook"
        title="Share to Facebook"
        style={{ color: "#3B5998" }}
      />
      <a
        href={
          "https://twitter.com/share?url=https://word-game-lovat.vercel.app/"
        }
        target={"_blank"}
        rel="noreferrer"
        className="fa fa-twitter"
        title="Share to Twitter"
        style={{ color: "#1DA1F2" }}
      />
      <a
        href={
          "https://reddit.com/submit?url=https://word-game-lovat.vercel.app/"
        }
        target={"_blank"}
        rel="noreferrer"
        className="fa fa-reddit"
        title="Share to Reddit"
        style={{ color: "#FF5700" }}
      />
    </div>
  );
};

export default SocialMedia;

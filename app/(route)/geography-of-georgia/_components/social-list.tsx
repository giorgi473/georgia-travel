function SocialList() {
  return (
    <div>
      <h2 className="text-black font-bold mb-3">გაზიარება</h2>
      <div className="flex items-center gap-3">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=[URL]"
          className="cursor-pointer underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=[URL]"
          className="cursor-pointer underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=[URL]"
          className="cursor-pointer underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default SocialList;

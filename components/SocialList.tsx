import Link from "next/link";

function SocialList() {
  return (
    <div>
      <h2 className="text-black font-bold mb-3">გაზიარება</h2>
      <div className="flex items-center gap-3">
        <Link
          href="https://www.facebook.com/sharer/sharer.php?u=[URL]"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
        <Link
          href="https://twitter.com/intent/tweet?url=[URL]"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-200 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
        <Link
          href="https://www.linkedin.com/sharing/share-offsite/?url=[URL]"
          className="text-blue-700 hover:text-blue-900 transition-colors duration-200 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </Link>
      </div>
    </div>
  );
}

export default SocialList;

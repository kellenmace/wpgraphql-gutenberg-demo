import Link from "next/link";

export default function PostCard({ post }) {
  const { uri, title } = post;
  return (
    <Link href={uri}>
      <a>
        <article>
          <h2>{title}</h2>
        </article>
      </a>
    </Link>
  );
}

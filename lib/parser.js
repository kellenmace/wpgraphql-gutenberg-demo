import parse, { domToReact } from "html-react-parser";
import Link from "next/link";

export default function parseHtml(html) {
  const options = {
    replace: ({ name, attribs, children }) => {
      // Convert internal links to Next.js Link components.
      const isInternalLink =
        name === "a" && attribs["data-internal-link"] === "true";

      if (isInternalLink) {
        return (
          <Link href={attribs.href}>
            <a {...attribs}>{domToReact(children, options)}</a>
          </Link>
        );
      }
    },
  };

  return parse(html, options);
}

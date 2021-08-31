import React from "react";
import { gql } from "@apollo/client";

export const PARAGRAPH_BLOCK_ATTRIBUTES = gql`
  fragment ParagraphBlockAttributes on CoreParagraphBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    dropCap
    style
    textColor
  }
`;

function getClassName(align) {
  if (align === "center" || align === "right") {
    return `text-${align}`;
  }

  return "text-left";
}

export default function ParagraphBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  dropCap,
  style,
  textColor,
}) {
  return (
    <p
      className={getClassName(align)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

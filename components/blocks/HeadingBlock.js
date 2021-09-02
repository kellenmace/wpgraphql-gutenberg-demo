import React from "react";
import { gql } from "@apollo/client";

export const HEADING_BLOCK_ATTRIBUTES = gql`
  fragment HeadingBlockAttributes on CoreHeadingBlockAttributes {
    align
    anchor
    backgroundColor
    className
    content
    level
    style
    textAlign
    textColor
  }
`;

function getClassName(textAlign) {
  if (textAlign === "center" || textAlign === "right") {
    return `text-${textAlign}`;
  }

  return "text-left";
}

export default function HeadingBlock({
  align,
  anchor,
  backgroundColor,
  className,
  content,
  level,
  style,
  textAlign,
  textColor,
}) {
  const tag = `h${level}`;

  return React.createElement(
    tag,
    {
      className: getClassName(textAlign),
    },
    content
  );
}

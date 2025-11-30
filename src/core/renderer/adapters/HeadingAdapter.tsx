import { HeadingNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { clsx } from "clsx";

import { ElementType } from "react";

export function HeadingAdapter({ node }: { node: HeadingNode }) {
  const Tag = `h${node.props?.level || 2}` as ElementType;
  const styles = convertStyles(node.styles);

  return (
    <Tag className={clsx(styles)}>
      {node.props?.content}
    </Tag>
  );
}

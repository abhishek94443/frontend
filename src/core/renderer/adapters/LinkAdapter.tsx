import { LinkNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import Link from "next/link";
import { clsx } from "clsx";

export function LinkAdapter({ node }: { node: LinkNode }) {
  const styles = convertStyles(node.styles);
  
  return (
    <Link 
      href={node.props?.href || "#"} 
      target={node.props?.target}
      className={clsx(styles)}
    >
      {node.props?.label}
    </Link>
  );
}

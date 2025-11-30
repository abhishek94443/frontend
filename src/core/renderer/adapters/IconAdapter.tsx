import { IconNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { clsx } from "clsx";
import * as LucideIcons from "lucide-react";
import { ElementType } from "react";

export function IconAdapter({ node }: { node: IconNode }) {
  const styles = convertStyles(node.styles);
  // Dynamic icon lookup
  const iconName = node.props?.name || "HelpCircle";
  // @ts-ignore - Dynamic access to Lucide icons
  const IconComponent = LucideIcons[iconName] as ElementType;

  if (!IconComponent) {
    return <span className="text-red-500 text-xs">Icon not found: {iconName}</span>;
  }

  return (
    <IconComponent 
      size={node.props?.size || 24} 
      color={node.props?.color}
      className={clsx(styles)} 
    />
  );
}

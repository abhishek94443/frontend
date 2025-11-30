import { DividerNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { clsx } from "clsx";

export function DividerAdapter({ node }: { node: DividerNode }) {
  const styles = convertStyles(node.styles);
  const isVertical = node.props?.orientation === 'vertical';
  
  return (
    <div 
      className={clsx(
        "bg-neutral-200", 
        isVertical ? "w-px h-full" : "h-px w-full",
        styles
      )}
      style={{
        backgroundColor: node.props?.color,
        [isVertical ? 'width' : 'height']: node.props?.thickness
      }}
    />
  );
}

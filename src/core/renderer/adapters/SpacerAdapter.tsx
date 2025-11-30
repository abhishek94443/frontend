import { SpacerNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { clsx } from "clsx";

export function SpacerAdapter({ node }: { node: SpacerNode }) {
  const styles = convertStyles(node.styles);
  const isVertical = node.props?.axis === 'vertical' || !node.props?.axis; // Default vertical
  
  return (
    <div 
      className={clsx(styles)}
      style={{
        [isVertical ? 'height' : 'width']: node.props?.size
      }}
    />
  );
}

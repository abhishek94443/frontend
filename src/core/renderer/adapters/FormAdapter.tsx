"use client";

import { FormNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { Renderer } from "@/core/renderer";
import { clsx } from "clsx";

export function FormAdapter({ node }: { node: FormNode }) {
  const styles = convertStyles(node.styles);

  return (
    <form
      action={node.props?.action}
      method={node.props?.method}
      className={clsx("space-y-4", styles)}
      onSubmit={(e) => {
        if (node.props?.onSubmit) {
          e.preventDefault();
          console.log(`Form submitted: ${node.props.onSubmit}`);
          // Future: Handle dynamic form submission
        }
      }}
    >
      {node.children && <Renderer nodeTree={node.children} />}
    </form>
  );
}

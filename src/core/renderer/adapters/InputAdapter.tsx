import { InputNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { clsx } from "clsx";
import { tokens } from "@/core/theme/tokens";

export function InputAdapter({ node }: { node: InputNode }) {
  const styles = convertStyles(node.styles);
  const isTextarea = node.props?.type === 'textarea';

  const baseInputStyles = clsx(
    "block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2",
    tokens.form['focus-ring'],
    // tokens.form['input-md'], // Removed explicit height to allow padding to control size
    styles
  );

  return (
    <div className="w-full">
      {node.props?.label && (
        <label htmlFor={node.id} className="block text-sm font-medium text-gray-700 mb-1">
          {node.props.label}
        </label>
      )}
      
      {isTextarea ? (
        <textarea
          id={node.id}
          name={node.props?.name}
          placeholder={node.props?.placeholder}
          required={node.props?.required}
          defaultValue={node.props?.defaultValue}
          className={baseInputStyles}
          rows={4}
        />
      ) : (
        <input
          id={node.id}
          type={node.props?.type || 'text'}
          name={node.props?.name}
          placeholder={node.props?.placeholder}
          required={node.props?.required}
          defaultValue={node.props?.defaultValue}
          className={baseInputStyles}
        />
      )}
    </div>
  );
}

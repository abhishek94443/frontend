import { SiteNode } from "@/types/site";
import { SectionAdapter } from "./adapters/SectionAdapter";
import { TextAdapter } from "./adapters/TextAdapter";
import { FlexAdapter } from "./adapters/FlexAdapter";
import { ImageAdapter } from "./adapters/ImageAdapter";
import { ButtonAdapter } from "./adapters/ButtonAdapter";
import { GridAdapter } from "./adapters/GridAdapter";
import { ContainerAdapter } from "./adapters/ContainerAdapter";
import { 
  SectionNode, 
  TextNode, 
  FlexNode, 
  ImageNode, 
  ButtonNode, 
  GridNode, 
  ContainerNode 
} from "../nodes/definitions";

interface RendererProps {
  nodeTree: SiteNode[];
}

export function Renderer({ nodeTree }: RendererProps) {
  if (!nodeTree || nodeTree.length === 0) {
    return null;
  }

  return (
    <>
      {nodeTree.map((node) => {
        switch (node.type) {
          case 'section':
            return <SectionAdapter key={node.id} node={node as SectionNode} />;
          case 'text':
            return <TextAdapter key={node.id} node={node as TextNode} />;
          case 'flex':
            return <FlexAdapter key={node.id} node={node as FlexNode} />;
          case 'image':
            return <ImageAdapter key={node.id} node={node as ImageNode} />;
          case 'button':
            return <ButtonAdapter key={node.id} node={node as ButtonNode} />;
          case 'grid':
            return <GridAdapter key={node.id} node={node as GridNode} />;
          case 'container':
            return <ContainerAdapter key={node.id} node={node as ContainerNode} />;
          default:
            return (
              <div key={node.id} className="p-4 border border-dashed border-red-300 m-2">
                <p className="text-red-500 font-bold">Unknown Node Type: {node.type}</p>
                <pre className="text-xs bg-gray-100 p-2 overflow-auto">
                  {JSON.stringify(node, null, 2)}
                </pre>
              </div>
            );
        }
      })}
    </>
  );
}

import { SiteNode } from "@/types/site";
import { SectionAdapter } from "./adapters/SectionAdapter";
import { TextAdapter } from "./adapters/TextAdapter";
import { FlexAdapter } from "./adapters/FlexAdapter";
import { ImageAdapter } from "./adapters/ImageAdapter";
import { ButtonAdapter } from "./adapters/ButtonAdapter";
import { GridAdapter } from "./adapters/GridAdapter";
import { ContainerAdapter } from "./adapters/ContainerAdapter";
import { HeadingAdapter } from "./adapters/HeadingAdapter";
import { LinkAdapter } from "./adapters/LinkAdapter";
import { VideoAdapter } from "./adapters/VideoAdapter";
import { IconAdapter } from "./adapters/IconAdapter";
import { DividerAdapter } from "./adapters/DividerAdapter";
import { SpacerAdapter } from "./adapters/SpacerAdapter";
import { FormAdapter } from "./adapters/FormAdapter";
import { InputAdapter } from "./adapters/InputAdapter";
import { MotionWrapper, AnimationType } from "./MotionWrapper";
import { 
  SectionNode, 
  TextNode, 
  FlexNode, 
  ImageNode, 
  ButtonNode, 
  GridNode, 
  ContainerNode,
  HeadingNode,
  LinkNode,
  VideoNode,
  IconNode,
  DividerNode,
  SpacerNode,
  FormNode,
  InputNode
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
        const animation = node.styles?.animation as AnimationType | undefined;
        
        const content = (() => {
          switch (node.type) {
            case 'section':
              return <SectionAdapter node={node as SectionNode} />;
            case 'text':
              return <TextAdapter node={node as TextNode} />;
            case 'flex':
              return <FlexAdapter node={node as FlexNode} />;
            case 'image':
              return <ImageAdapter node={node as ImageNode} />;
            case 'button':
              return <ButtonAdapter node={node as ButtonNode} />;
            case 'grid':
              return <GridAdapter node={node as GridNode} />;
            case 'container':
              return <ContainerAdapter node={node as ContainerNode} />;
            case 'heading':
              return <HeadingAdapter node={node as HeadingNode} />;
            case 'link':
              return <LinkAdapter node={node as LinkNode} />;
            case 'video':
              return <VideoAdapter node={node as VideoNode} />;
            case 'icon':
              return <IconAdapter node={node as IconNode} />;
            case 'divider':
              return <DividerAdapter node={node as DividerNode} />;
            case 'spacer':
              return <SpacerAdapter node={node as SpacerNode} />;
            case 'form':
              return <FormAdapter node={node as FormNode} />;
            case 'input':
              return <InputAdapter node={node as InputNode} />;
            default:
              return (
                <div className="p-4 border border-dashed border-red-300 m-2">
                  <p className="text-red-500 font-bold">Unknown Node Type: {node.type}</p>
                  <pre className="text-xs bg-gray-100 p-2 overflow-auto">
                    {JSON.stringify(node, null, 2)}
                  </pre>
                </div>
              );
          }
        })();

        return (
          <MotionWrapper key={node.id} animation={animation}>
            {content}
          </MotionWrapper>
        );
      })}
    </>
  );
}

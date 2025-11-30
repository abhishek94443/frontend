import { VideoNode } from "@/core/nodes/definitions";
import { convertStyles } from "@/core/engine/styleConverter";
import { clsx } from "clsx";

export function VideoAdapter({ node }: { node: VideoNode }) {
  const styles = convertStyles(node.styles);
  
  return (
    <video
      src={node.props?.src}
      poster={node.props?.poster}
      controls={node.props?.controls}
      autoPlay={node.props?.autoplay}
      loop={node.props?.loop}
      muted={node.props?.muted}
      className={clsx("w-full h-auto object-cover", styles)}
    />
  );
}

import { Position } from "reactflow";

export function getHandleDotPositions(count = 1) {
    return Array.from({ length: count }, (_, i) => ((i + 1) * 100) / (count + 1));
}


export const sideConfig = {
    left:   { position: Position.Left,   axis: "top",    type: "target" },
    right:  { position: Position.Right,  axis: "top",    type: "source" },
    top:    { position: Position.Top,    axis: "left",   type: "target" },
    bottom: { position: Position.Bottom, axis: "left",   type: "source" },
  };
  
import { memo, useCallback } from "react";
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
  Edge,
  EdgeProps,
} from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Edit } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export type RelationshipType = "1:N" | "N:1" | "M:N" | "1:1";

interface RelationshipEdgeData extends Record<string, unknown> {
  relationshipType: RelationshipType;
  label?: string;
}

interface RelationshipEdgeProps extends EdgeProps {
  data?: RelationshipEdgeData;
}

export const RelationshipEdge = memo(({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  data,
}: RelationshipEdgeProps) => {
  const { setEdges } = useReactFlow();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onDeleteEdge = useCallback(() => {
    setEdges((edges) => edges.filter((edge) => edge.id !== id));
  }, [id, setEdges]);

  const onEditEdge = useCallback(() => {
    // TODO: Implement edit functionality
    console.log("Edit edge:", id);
  }, [id]);

  const relationshipType = data?.relationshipType || "1:N";
  const label = data?.label || relationshipType;

  return (
    <>
      <BaseEdge 
        path={edgePath} 
        markerEnd={markerEnd} 
        style={{
          stroke: "hsl(var(--primary))",
          strokeWidth: 2,
          ...style,
        }} 
      />
      <EdgeLabelRenderer>
        <div
          className="absolute pointer-events-auto"
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
        >
          <ContextMenu>
            <ContextMenuTrigger>
              <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-2 py-1 shadow-sm hover:shadow-md transition-shadow">
                <Badge variant="secondary" className="text-xs font-medium">
                  {label}
                </Badge>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={onEditEdge}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Relationship
              </ContextMenuItem>
              <ContextMenuItem onClick={onDeleteEdge} className="text-destructive">
                <X className="h-4 w-4 mr-2" />
                Delete Relationship
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </EdgeLabelRenderer>
    </>
  );
});
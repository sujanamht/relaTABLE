import { memo } from "react";
import { Handle, Position, NodeResizer } from "@xyflow/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, Key, Link } from "lucide-react";

interface Column {
  name: string;
  type: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  isRequired?: boolean;
}

interface TableBlockProps {
  data: {
    tableName: string;
    columns: Column[];
  };
  selected?: boolean;
}

export const TableBlock = memo(({ data, selected }: TableBlockProps) => {
  const { tableName, columns } = data;

  return (
    <div className="min-w-[200px] relative">
      {selected && (
        <NodeResizer
          minWidth={200}
          minHeight={100}
          handleClassName="w-2 h-2 bg-primary border-2 border-background rounded-sm hover:bg-primary/80 transition-colors"
          lineClassName="border-primary"
        />
      )}
      
      {/* Connection Handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="h-3 w-3 bg-background border-2 border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ top: -6 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="h-3 w-3 bg-background border-2 border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ bottom: -6 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        className="h-3 w-3 bg-background border-2 border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ left: -6 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="h-3 w-3 bg-background border-2 border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ right: -6 }}
      />
      
      <Card className="shadow-soft border-2 border-border hover:border-primary/50 transition-colors bg-background">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm">
            <Table className="h-4 w-4" />
            {tableName}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-1">
            {columns.map((column, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-xs py-1 px-2 rounded bg-secondary/50"
              >
                <div className="flex items-center gap-1">
                  {column.isPrimaryKey && <Key className="h-3 w-3 text-primary" />}
                  {column.isForeignKey && <Link className="h-3 w-3 text-orange-500" />}
                  <span className="font-medium">{column.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs py-0 px-1">
                    {column.type}
                  </Badge>
                  {column.isRequired && (
                    <span className="text-destructive text-xs">*</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
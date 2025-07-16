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
    <div className="min-w-[120px] relative">
      {selected && (
        <NodeResizer
          minWidth={120}
          minHeight={40}
          handleClassName="w-1.5 h-1.5 bg-primary border border-background rounded-sm hover:bg-primary/80 transition-colors"
          lineClassName="border-primary"
        />
      )}
      
      {/* Connection Handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="h-2 w-2 bg-background border border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ top: -4 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="h-2 w-2 bg-background border border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ bottom: -4 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        className="h-2 w-2 bg-background border border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ left: -4 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="h-2 w-2 bg-background border border-primary rounded-full hover:bg-primary hover:border-background transition-colors opacity-0 hover:opacity-100"
        style={{ right: -4 }}
      />
      
      <Card className="shadow-soft border border-border hover:border-primary/50 transition-colors bg-background">
        <CardHeader className="pb-1 px-1.5 pt-1.5">
          <CardTitle className="flex items-center gap-1" style={{ fontSize: '7px', lineHeight: '10px' }}>
            <Table className="h-2 w-2" />
            <span className="truncate font-medium">{tableName}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 px-1.5 pb-1.5">
          <div className="space-y-0.5">
            {columns.map((column, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-0.5 px-1 rounded bg-secondary/50"
                style={{ fontSize: '7px', lineHeight: '9px' }}
              >
                <div className="flex items-center gap-0.5 min-w-0 flex-1">
                  {column.isPrimaryKey && <Key className="h-1.5 w-1.5 text-primary flex-shrink-0" />}
                  {column.isForeignKey && <Link className="h-1.5 w-1.5 text-orange-500 flex-shrink-0" />}
                  <span className="font-medium truncate">{column.name}</span>
                </div>
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  <Badge 
                    variant="outline" 
                    className="py-0 px-0.5 border-0 bg-muted/50"
                    style={{ fontSize: '6px', lineHeight: '8px', height: '10px' }}
                  >
                    {column.type.length > 8 ? column.type.substring(0, 8) + '...' : column.type}
                  </Badge>
                  {column.isRequired && (
                    <span className="text-destructive" style={{ fontSize: '7px' }}>*</span>
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
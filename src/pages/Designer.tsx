import { useState, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
  MiniMap,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Navigation } from "@/components/Navigation";
import { AIPromptPanel } from "@/components/AIPromptPanel";
import { TableBlock } from "@/components/TableBlock";
import { RelationshipEdge, RelationshipType } from "@/components/RelationshipEdge";
import { Button } from "@/components/ui/button";
import { Plus, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const nodeTypes = {
  table: TableBlock,
};

const edgeTypes = {
  relationship: RelationshipEdge,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "table",
    position: { x: 100, y: 100 },
    data: {
      tableName: "users",
      columns: [
        { name: "id", type: "UUID", isPrimaryKey: true, isRequired: true },
        { name: "email", type: "VARCHAR(255)", isRequired: true },
        { name: "name", type: "VARCHAR(100)", isRequired: true },
        { name: "created_at", type: "TIMESTAMP", isRequired: true },
      ],
    },
  },
  {
    id: "2",
    type: "table",
    position: { x: 400, y: 100 },
    data: {
      tableName: "posts",
      columns: [
        { name: "id", type: "UUID", isPrimaryKey: true, isRequired: true },
        { name: "user_id", type: "UUID", isForeignKey: true, isRequired: true },
        { name: "title", type: "VARCHAR(255)", isRequired: true },
        { name: "content", type: "TEXT" },
        { name: "created_at", type: "TIMESTAMP", isRequired: true },
      ],
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "right",
    targetHandle: "left",
    type: "relationship",
    data: {
      relationshipType: "1:N" as RelationshipType,
      label: "has many",
    },
  },
];

export default function Designer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { toast } = useToast();

  const onConnect = useCallback(
    (params: Connection) => {
      const newEdge = {
        ...params,
        type: "relationship",
        data: {
          relationshipType: "1:N" as RelationshipType,
          label: "relates to",
        },
      };
      setEdges((eds) => addEdge(newEdge, eds));
    },
    [setEdges]
  );

  const handleGenerateSchema = async (prompt: string) => {
    // Mock AI schema generation
    const mockTables = [
      {
        id: Date.now().toString(),
        type: "table",
        position: { x: Math.random() * 300 + 100, y: Math.random() * 300 + 100 },
        data: {
          tableName: "ai_generated_table",
          columns: [
            { name: "id", type: "UUID", isPrimaryKey: true, isRequired: true },
            { name: "name", type: "VARCHAR(100)", isRequired: true },
            { name: "description", type: "TEXT" },
            { name: "created_at", type: "TIMESTAMP", isRequired: true },
          ],
        },
      },
    ];

    setNodes((nds) => [...nds, ...mockTables]);
    
    toast({
      title: "Schema Generated",
      description: "AI has generated new tables based on your prompt.",
    });
  };

  const addNewTable = () => {
    const newTable = {
      id: Date.now().toString(),
      type: "table",
      position: { x: Math.random() * 300 + 100, y: Math.random() * 300 + 100 },
      data: {
        tableName: "new_table",
        columns: [
          { name: "id", type: "UUID", isPrimaryKey: true, isRequired: true },
          { name: "name", type: "VARCHAR(100)", isRequired: true },
        ],
      },
    };

    setNodes((nds) => [...nds, newTable]);
  };

  const clearCanvas = () => {
    setNodes([]);
    setEdges([]);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navigation />
      
      <div className="flex-1 flex">
        {/* Main Designer Area */}
        <div className="flex-1 relative">
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <Button onClick={addNewTable} size="sm" className="rounded-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Table
            </Button>
            <Button onClick={clearCanvas} variant="outline" size="sm" className="rounded-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            className="bg-background"
          >
            <Background color="#e5e7eb" gap={20} />
            <Controls />
            <MiniMap 
              nodeColor="#4f46e5"
              className="bg-background border border-border rounded-lg"
            />
          </ReactFlow>
        </div>

        {/* AI Prompt Panel */}
        <div className="p-4 border-l border-border bg-secondary/20">
          <AIPromptPanel onGenerateSchema={handleGenerateSchema} />
        </div>
      </div>
    </div>
  );
}
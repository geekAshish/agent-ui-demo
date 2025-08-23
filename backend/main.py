from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any

app = FastAPI()

# Node, and Edge schema
class Node(BaseModel):
    id: str
    type: str
    data: Dict[str, Any]

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Build adjacency list
    graph = {node.id: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)

    # DFS cycle detection
    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return True  # cycle found
        if node in visited:
            return False

        visited.add(node)
        rec_stack.add(node)
        for neighbor in graph.get(node, []):
            if dfs(neighbor):
                return True
        rec_stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if dfs(node):
            is_dag = False
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }

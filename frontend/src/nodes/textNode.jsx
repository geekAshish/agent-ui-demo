import { useState } from 'react';
import { Node } from './Node';
import Input from '../components/TextBox';
import { useStore } from '../store';

const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const variables = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    variables.push(match[1]);
  }
  return Array.from(new Set(variables));
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState("");
  const [variables, setVariables] = useState(extractVariables(currText));

  const nodes = useStore((s) => s.getNode());

  // direct access to update state
  const setEdges = useStore.setState;

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    const newVars = extractVariables(newText);
    setVariables(newVars);

    setEdges((state) => {
      let newEdges = [...state.edges];

      newVars?.forEach((v, idx) => {
        const matchingNode = nodes?.find(
          (n) => n.id === v.replace("_", "-")
        );

        if (matchingNode) {
          const edgeId = `${matchingNode.id}-to-${id}-left-${idx}`;

          // avoid duplicates
          if (!newEdges?.some((e) => e.id === edgeId)) {
            newEdges?.push({
              id: edgeId,
              source: matchingNode.id,
              sourceHandle: `${matchingNode.id}-right-0`,
              target: id,
              targetHandle: `${id}-left-${idx}`,
              type: 'smoothstep',
              animated: true,
              markerEnd: { type: 'arrowclosed' },
            });
          }
        }
      });

      return { edges: newEdges };
    });
  };

  return (
    <Node
      id={id}
      nodeType={"Text"}
      variableName={data?.id}
      handleCount={{ ...data.handleCount, left: variables?.length }}
    >
      <Input label={"Text"} value={currText} onChange={handleTextChange} />

      {variables.length > 0 && (
        <div className="mt-2 text-xs text-gray-500">
          Variables: {variables.join(", ")}
        </div>
      )}
    </Node>
  );
};

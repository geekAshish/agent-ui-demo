import { useState } from 'react';
import { Node } from './Node';
import Input from '../components/TextBox';

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

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    setVariables(extractVariables(newText));
  };

  return (
    <Node
      id={id}
      nodeType={"Text"}
      variableName={data?.id}
      handleCount={{...data.handleCount, left: variables?.length}}
    >
      <Input label={"Text"} value={currText} onChange={handleTextChange} />

      {/* {variables.length > 0 && (
        <div className="mt-2 text-xs text-gray-500">
          Variables detected: {variables.join(", ")}
        </div>
      )} */}
    </Node>
  );
};

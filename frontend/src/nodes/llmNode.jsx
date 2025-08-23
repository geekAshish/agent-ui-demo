// llmNode.js
import { useState } from 'react';
import Select from '../components/Select';
import { Node } from './Node';

export const LLMNode = ({ id, data }) => {
  const [llmType, setLLMType] = useState("");
  const handleTypeChange = (e) => {
    setLLMType(e.target.value);
  };

  return (
    <Node 
      id={id}
      nodeType={"LLM"}
      variableName={data?.id}
      handleCount={data.handleCount}
    >
      <Select 
          label={"Type"} 
          name={"type"} 
          value={llmType} 
          onChange={handleTypeChange} 
          options={[
            { value: "ChatGPT", label: "ChatGPT" },
            { value: "VectorAI", label: "VectorAI" },
            { value: "Grok", label: "Grok" }
          ]}
        />
    </Node>
  );
}

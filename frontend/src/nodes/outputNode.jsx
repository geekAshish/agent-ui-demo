// outputNode.js
import { useState } from 'react';
import { Node } from './Node';
import Input from '../components/ui/TextBox';
import Select from '../components/ui/Select';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState("");
  const [outputType, setOutputType] = useState('Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };
  
  return (
    <Node 
      id={id}
      nodeType={"Output"}
      variableName={data?.id}
      handleCount={data.handleCount}
    >
     <div>
        <Input label={"Name"} value={currName} onChange={handleNameChange} />

        <Select
          label={"Type"} 
          name={"type"} 
          value={outputType} 
          onChange={handleTypeChange} 
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "File" }
          ]}
        />
      </div>
    </Node>
  );
}

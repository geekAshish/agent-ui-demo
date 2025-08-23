// inputNode.js

import { useState } from 'react';
import { Node } from './Node';
import Input from '../components/TextBox';
import Select from '../components/Select';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState("");
  const [inputType, setInputType] = useState('Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <Node 
      id={id}
      nodeType={"Input"}
      variableName={data?.id}
      handleCount={data.handleCount}
    >
      <Input label={"Name"} value={currName} onChange={handleNameChange} />

      <Select 
        label={"Type"} 
        name={"type"} 
        value={inputType} 
        onChange={handleTypeChange} 
        options={[
          { value: "Text", label: "Text" },
          { value: "File", label: "File" }
        ]}
      />
    </Node>
  );
}

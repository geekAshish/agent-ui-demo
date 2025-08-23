import React, { useState } from 'react'
import { Node } from './Node'
import Input from '../components/TextBox'
import Select from '../components/Select'

const KnowlegdeBase = ({id, data}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [inputType, setInputType] = useState(data.inputType || 'Text');

    const handleNameChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };
    
  return (
    <Node 
      id={id}
      nodeType={"Knowledge Base Reader"}
      variableName={data?.id}
      handleCount={data.handleCount}
    >
        <Input label={"Search Query"} value={searchQuery} onChange={handleNameChange} />

        <Select 
          label={"Knowledge Base"} 
          name={"type"} 
          value={inputType} 
          onChange={handleTypeChange} 
          options={[
            { value: "Text", label: "Text" },
            { value: "File", label: "File" }
          ]}
        />
    </Node>
  )
}

export default KnowlegdeBase
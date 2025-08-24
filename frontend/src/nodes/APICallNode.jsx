import React, { useState } from 'react'
import { Node } from './Node';
import Input from '../components/ui/TextBox';
import Select from '../components/ui/Select';

const APICallNode = ({id, data}) => {
    const [apiQuery, setapiQuery] = useState("");
    const [inputType, setInputType] = useState(data.inputType || 'Text');

    const handleNameChange = (e) => {
        setapiQuery(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    return (
        <Node 
        id={id}
        nodeType={"API Query"}
        variableName={data?.id}
        handleCount={data.handleCount}
        >
            <Input label={"API URI"} value={apiQuery} onChange={handleNameChange} />

            <Select 
                label={"API Request"} 
                name={"type"} 
                value={inputType} 
                onChange={handleTypeChange} 
                options={[
                    { value: "GET", label: "GET" },
                    { value: "POST", label: "POST" },
                    { value: "PUT", label: "PUT" },
                    { value: "DELETE", label: "DELETE" },
                ]}
            />
        </Node>
    )
}

export default APICallNode

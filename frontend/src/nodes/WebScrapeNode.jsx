import React, { useState } from 'react'
import Input from '../components/TextBox';
import { Node } from './Node';

const WebScrape = ({id, data}) => {
    const [apiQuery, setapiQuery] = useState("");

    const handleNameChange = (e) => {
        setapiQuery(e.target.value);
    };

    return (
        <Node 
        id={id}
        nodeType={"URL Loader"}
        variableName={data?.id}
        handleCount={data.handleCount}
        >
            <Input label={"URL"} placeholder={"www.example.com"} value={apiQuery} onChange={handleNameChange} />
        </Node>
    )
}

export default WebScrape
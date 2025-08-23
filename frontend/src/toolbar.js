// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4">
            <div className="mt-5 flex flex-wrap gap-4">
                <DraggableNode type="customInput" label="Input" handleRightCount={1} />
                <DraggableNode type="llm" label="LLM" handleLeftCount={3} handleRightCount={2} />
                <DraggableNode type="customOutput" label="Output" handleLeftCount={2} />
                <DraggableNode type="text" label="Text" handleRightCount={1} />
                <DraggableNode type="image" label="Image" handleRightCount={2} />
                <DraggableNode type="knowlegdeBase" label="Knowledge Base Reader" handleRightCount={2} />
                <DraggableNode type="apiQuery" label="API Query" handleRightCount={1} handleLeftCount={1} />
                <DraggableNode type="webScrape" label="Web Scrape" handleRightCount={1} handleLeftCount={1} />
                <DraggableNode type="conditionalChatBot" label="Conditional Chat Bot" handleRightCount={3} handleLeftCount={1} />
            </div>
        </div>
    );
};

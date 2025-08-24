// toolbar.js
import { FileInput, Bot, FileOutput, LetterText, Image, SquareLibrary, ArrowBigUp, Rss, BotMessageSquare } from "lucide-react"; 


import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4">
            <div className="mt-5 flex flex-wrap gap-4">
                <DraggableNode type="customInput" label="Input" handleRightCount={1} icon={FileInput}/>
                <DraggableNode type="llm" label="LLM" handleLeftCount={3} handleRightCount={2} icon={Bot} />
                <DraggableNode type="customOutput" label="Output" handleLeftCount={2} icon={FileOutput} />
                <DraggableNode type="text" label="Text" handleRightCount={1} icon={LetterText} />
                <DraggableNode type="image" label="Image" handleRightCount={2} icon={Image} />
                <DraggableNode type="knowlegdeBase" label="Knowledge Base Reader" handleRightCount={2} icon={SquareLibrary} />
                <DraggableNode type="apiQuery" label="API Query" handleRightCount={1} handleLeftCount={1} icon={ArrowBigUp} />
                <DraggableNode type="webScrape" label="Web Scrape" handleRightCount={1} handleLeftCount={1} icon={Rss} />
                <DraggableNode type="conditionalChatBot" label="Conditional Chat Bot" handleRightCount={3} handleLeftCount={1} icon={BotMessageSquare} />
            </div>
        </div>
    );
};

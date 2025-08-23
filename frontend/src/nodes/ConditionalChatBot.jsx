import React, { useState } from 'react'
import { Node } from './Node'
import Input from '../components/TextBox';

const ConditionalChatBot = ({ id, data }) => {
  const [conditions, setConditions] = useState([
    { id: 1, value: "" }
  ]);

  // Handle input change
  const handleChange = (index, e) => {
    const newConditions = [...conditions];
    newConditions[index].value = e.target.value;
    setConditions(newConditions);
  };

  // Add new input field
  const handleAddMore = () => {
    setConditions([...conditions, { id: conditions.length + 1, value: '' }]);
  };

  return (
    <Node
      id={id}
      nodeType={"Conditional Chat Bot"}
      variableName={data?.id}
      handleCount={data.handleCount}
    >
      <div className="flex flex-col gap-3 w-full">
        {conditions?.map((cond, index) => (
          <div key={cond.id} className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-600">
              {index === 0 ? "if" : `else if`}
            </span>
            <Input
              label={`Condition ${index + 1}`}
              value={cond.value}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}

        <button
          className="mt-2 border border-gray-300 px-3 py-1 rounded-md text-xs hover:bg-gray-100 cursor-pointer"
          onClick={handleAddMore}
        >
            Add more
        </button>
      </div>
    </Node>
  );
};

export default ConditionalChatBot;

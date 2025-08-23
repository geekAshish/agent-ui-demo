import { Handle, Position } from 'reactflow';
import { getHandleDotPositions, sideConfig } from '../utils/utils';
import Input from '../components/Input';
import { useState } from 'react';

export const Node = ({ id, nodeType, variableName, handleCount, children }) => {
  const [nodeVariable, setNodeVariable] = useState(variableName);
  
  const handleChange = (e) => {
    setNodeVariable(e.target.value)
  }

  if (!handleCount) return;

  return (
    <div
      className="relative w-56 min-h-[100px] bg-gray-50 border border-gray-300 rounded-2xl shadow-md px-3 pt-3 pb-2 flex flex-col gap-2 hover:shadow-lg transition-shadow"
    >
      
      {/* Handles */}
      {Object.entries(handleCount)?.flatMap(([side, count]) => {
        const cfg = sideConfig?.[side];
        const positions = getHandleDotPositions(count);

        return positions?.map((pos, idx) => (
          <Handle
            key={`${side}-${idx}`}
            type={cfg?.type}
            position={cfg?.position}
            id={`${id}-${side}-${idx}`}
            style={{ [cfg?.axis]: `${pos}%` }}
            className="!bg-blue-500 hover:!bg-blue-600 transition-colors"
          />
        ));
      })}

      <div className="text-sm font-semibold bg-blue-100 text-blue-500 rounded p-1">
        <p>{nodeType}</p>
      </div>

      <Input
        value={nodeVariable}
        onChange={handleChange}
        className='p-0 bg-blue-50'
      />

      <div className="flex flex-col gap-2 text-xs bg-white text-gray-700 bg-gray-100 p-3 rounded-lg shadow-inner">
        {children}
      </div>
    </div>
  );
}

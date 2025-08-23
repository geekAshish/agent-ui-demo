// draggableNode.js

export const DraggableNode = ({ type, handleTopCount, handleBottomCount, handleLeftCount, handleRightCount, label }) => {
    const onDragStart = (event, nodeType, handleCount) => {
      const appData = { nodeType, handleCount }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const handleCount = { top: handleTopCount, bottom: handleBottomCount, left: handleLeftCount, right: handleRightCount }
  
    return (
      <div
        className={`
        flex flex-col items-center justify-center 
        min-w-[90px] p-3
        rounded-xl shadow-md 
        bg-gradient-to-r from-blue-600 to-indigo-600 
        cursor-grab select-none 
        text-white font-medium text-sm
        transition-transform hover:scale-105 active:scale-95
      `}
        onDragStart={(event) => onDragStart(event, type, handleCount)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
          <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };
  
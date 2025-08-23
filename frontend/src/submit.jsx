// frontend/src/submit.js
import axios from "axios";
import { useState } from "react";
import { useStore } from "./store";
import PipelineResultModal from "./components/PipelineInfoModel";
import Button from "./components/Button";
import { usePiplineParse } from "./services/api/hook/usePipelineParse";

export const SubmitButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const {data: result, loading, mutate} = usePiplineParse()

  const nodes = useStore((state) => state.getNode());
  const edges = useStore((state) => state.getEdge());

  console.log({nodes, edges});

  const handleSubmit = async () => {
    await mutate({nodes, edges}, {
      onSuccess: () => {
        setModalOpen(true)
      }
    })
  };

  return (
    <div className="flex items-center justify-center">
      <Button 
        onClick={handleSubmit} 
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>

      <PipelineResultModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        result={result}
      />
    </div>
  );
};

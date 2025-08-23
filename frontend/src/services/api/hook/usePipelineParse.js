import axios from "axios";
import { useState } from "react";

export const usePiplineParse = () => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false);

    const handleSubmit = async ({nodes, edges}, { onSuccess }) => {
        try {
          setLoading(true);
    
          const res = await axios.post("http://127.0.0.1:8000/pipelines/parse", {
            nodes,
            edges,
          });;

          setResult(res.data)
          onSuccess(res.data)
        } catch (err) {
          console.error("Error submitting pipeline:", err);
        } finally {
          setLoading(false);
        }
    };

    return {
        data: result,
        loading,
        mutate: handleSubmit
    }
}

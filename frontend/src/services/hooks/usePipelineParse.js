import { useState } from "react";

import { getParsedData } from "../api/fetcher/piplelineParse";

export const usePiplineParse = () => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false);

    const handleSubmit = async ({nodes, edges}, { onSuccess }) => {
        try {
          setLoading(true);
    
          const res = await getParsedData({nodes, edges})

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

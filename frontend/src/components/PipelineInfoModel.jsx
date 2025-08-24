// PipelineResultModal.jsx

import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function PipelineResultModal({ isOpen, onClose, result }) {
  if (!isOpen) return null;

  const { num_nodes, num_edges, is_dag } = result || {};

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <h2 className="text-xl font-semibold text-center mb-4">
              Pipeline Summary
            </h2>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-500">Nodes</p>
                <p className="text-lg font-bold text-blue-700">{num_nodes}</p>
              </div>

              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-500">Edges</p>
                <p className="text-lg font-bold text-green-700">{num_edges}</p>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-500">DAG?</p>
                <p
                  className={`text-lg font-bold ${
                    is_dag ? "text-purple-700" : "text-red-600"
                  }`}
                >
                  {is_dag ? "Yes" : "No"}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button
                onClick={onClose}
                className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

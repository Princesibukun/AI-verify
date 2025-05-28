import { useState } from "react";

const data = [
  {
    name: "Evaporation is t...",
    type: "Text",
    aiScore: "40%",
    uniqueScore: "60%",
    words: 240,
    model: "Model 1",
    date: "10/May/2025",
  },
  {
    name: "Evaporation is t...",
    type: "Document",
    aiScore: "70%",
    uniqueScore: "10%",
    words: 302,
    model: "Model 2",
    date: "10/May/2025",
  },
  {
    name: "Evaporation is t...",
    type: "Text",
    aiScore: "20%",
    uniqueScore: "80%",
    words: 1490,
    model: "Model 3",
    date: "10/May/2025",
  },
  {
    name: "Evaporation is t...",
    type: "Text",
    aiScore: "20%",
    uniqueScore: "40%",
    words: 560,
    model: "Model 1",
    date: "10/May/2025",
  },
  {
    name: "Evaporation is t...",
    type: "Document",
    aiScore: "40%",
    uniqueScore: "50%",
    words: 233,
    model: "Model 1",
    date: "10/May/2025",
  },
];

const RecentScans = () => {
  const [activeTab, setActiveTab] = useState("ai");

  return (
    <div className="flex flex-col w-full p-6 bg-white rounded-xl">
      <div className="flex flex-col items-start w-[343px] max-w-[100%] md:ml-36 font-quicksand">
        <h1 className="font-bold text-2xl text-[#072B43] text-center mb-8">
          Recent Scans
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <div className="md:border border-gray-200 md:w-auto w-full rounded-2xl p-8 overflow-x-auto">
          <div className="flex mb-4 space-x-6 text-sm font-medium">
            <button
              className={`pb-2 border-b-2 transition-all duration-700 ease-in-out ${
                activeTab === "ai"
                  ? "border-[#D63C42] text-[#031B4E] font-semibold"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("ai")}
            >
              AI Detector
            </button>
            <button
              className={`pb-2 border-b-2 transition-all duration-700 ease-in-out ${
                activeTab === "plagiarism"
                  ? "border-[#D63C42] text-[#031B4E] font-semibold"
                  : "border-transparent text-gray-500"
              }`}
              onClick={() => setActiveTab("plagiarism")}
            >
              Plagiarism Checker
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <select
            aria-label="Content type" 
              className="border-2 border-gray-200 text-sm text-gray-700 rounded-md px-3 py-2 font-quicksand focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Content type
              </option>
              <option value="all">All</option>
              <option value="text">Text</option>
              <option value="document">Document</option>
            </select>

            <select  aria-label="Date from" className="border-2 border-gray-200 text-sm text-gray-700 rounded-md px-3 py-2 font-quicksand">
              <option>Date from</option>
            </select>
            <select aria-label="Date to" className="border-2 border-gray-200 text-sm text-gray-700 rounded-md px-3 py-2 font-quicksand">
              <option>Date to</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead className="bg-[#F9FAFB] text-[#031B4E] font-medium font-quicksand">
                <tr>
                  <th className="p-3 whitespace-nowrap">Name</th>
                  <th className="p-3 whitespace-nowrap">Content Type</th>
                  <th className="p-3 whitespace-nowrap">AI Score</th>
                  <th className="p-3 whitespace-nowrap">Unique Score</th>
                  <th className="p-3 whitespace-nowrap">Word Count</th>
                  <th className="p-3 whitespace-nowrap">Model</th>
                  <th className="p-3 whitespace-nowrap">Date</th>
                </tr>
              </thead>
              <tbody className="text-[#031B4E]">
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 font-quicksand">
                    <td className="p-3 whitespace-nowrap">{item.name}</td>
                    <td className="p-3 whitespace-nowrap">{item.type}</td>
                    <td className="p-3 whitespace-nowrap">{item.aiScore}</td>
                    <td className="p-3 whitespace-nowrap">
                      {item.uniqueScore}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {item.words.toLocaleString()}
                    </td>
                    <td className="p-3 whitespace-nowrap">{item.model}</td>
                    <td className="p-3 whitespace-nowrap">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentScans;

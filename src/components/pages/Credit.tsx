//import React from 'react';
import coin from "../../assets/Images/coins.png";
import BuyCredits from "../../components/BuyCredits";

export default function Credit() {
  const balance = 400;

  const purchases = [
    {
      sn: 1,
      credit: 250,
      amount: "$10",
      date: "10/May/2025",
      status: "Pending",
    },
    {
      sn: 2,
      credit: 400,
      amount: "$15",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 3,
      credit: 1000,
      amount: "$80",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 4,
      credit: 250,
      amount: "$10",
      date: "10/May/2025",
      status: "Failed",
    },
    {
      sn: 5,
      credit: 250,
      amount: "$10",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 6,
      credit: 500,
      amount: "$20",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 7,
      credit: 800,
      amount: "$20",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 8,
      credit: 750,
      amount: "$20",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 9,
      credit: 300,
      amount: "$24",
      date: "10/May/2025",
      status: "Completed",
    },
    {
      sn: 10,
      credit: 2000,
      amount: "$40",
      date: "10/May/2025",
      status: "Completed",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-[#F7F9D6] text-[#072B43]";
      case "Completed":
        return "bg-[#DFF9E4] text-[#1F7634]";
      case "Failed":
        return "bg-[#FFEDEA] text-[#072B43]";
      default:
        return "";
    }
  };

  return (
    <div className="">
      {" "}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#072B43] mb-4 font-quicksand">
          Credits
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-auto">
          <div className="inline-block mb-2 px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-[#072B43]">
            Credit Balance
          </div>

          <div className="flex justify-center items-center gap-2 text-2xl font-semibold text-gray-900 mb-4">
            <img className="w-5 h-5 md:mr-1 mr-2" src={coin} alt="coins" />
            {balance}
          </div>

          <button className="bg-[#D63C42] hover:bg-red-600 text-white text-sm px-6 py-2 rounded font-quicksand font-bold">
            Buy Credits
          </button>
        </div>
      </div>
      {/*Recect Purchases*/}
      <div className="p-6 mt-24">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-[#072B43] mb-4 font-quicksand">
            Recent Purchases
          </h2>
          <div className="flex gap-2">
            <input
              type="date"
              placeholder="Date from"
              className="text-sm border-2 border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none"
            />
            <input
              type="date"
              placeholder="Date to"
              className="text-sm border-2 border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-sm font-medium text-[#072B43] font-quicksand">
            <tr>
              <th className="p-2 text-left">SN</th>
              <th className="p-2 text-left">Credit</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#072B43] font-quicksand">
            {purchases.map((item) => (
              <tr key={item.sn} className="hover:bg-gray-50">
                <td className="p-2">{item.sn}</td>
                <td className="p-2 flex items-center gap-1">
                  <span>
                    <img
                      className="w-5 h-5 md:mr-1 mr-2"
                      src={coin}
                      alt="coins"
                    />
                  </span>
                  {item.credit}
                </td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2">{item.date}</td>
                <td className="p-2">
                  <span
                    className={`gap-10 px-4 py-2 rounded-lg text-xs font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm border-t border-gray-300">
          <span className="font-quicksand font-semibold text-[#072B43]">
            Table 1 of 10
          </span>
          <div className="flex items-center space-x-1 mt-2">
            <button className="px-2 py-1 border rounded text-[#171D15] font-quicksand">
              &lt;
            </button>
            <button className="px-3 py-1 bg-[#D63C42] text-white rounded font-quicksand">
              1
            </button>
            <button className="px-3 py-1 border rounded text-[#171D15] font-quicksand">
              2
            </button>
            <button className="px-3 py-1 border rounded text-[#171D15] font-quicksand">
              3
            </button>
            <span className="px-2 text-[#171D15] font-quicksand">...</span>
            <button className="px-3 py-1 border rounded text-[#171D15] font-quicksand">
              10
            </button>
            <button className="px-2 py-1 border rounded text-[#171D15] font-quicksand">
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div>
        <BuyCredits />
      </div>
    </div>
  );
}

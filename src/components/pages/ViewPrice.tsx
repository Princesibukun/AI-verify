import { useState } from "react";
import coin from "../../assets/Images/coins.png";

const plans = [
  {
    title: "250 Credits",
    price: "$4.5",
    subtitle: "/250 credits",
    description: "Lorem ipsum dolor sit amet consectetur.",
    features: Array(6).fill("Feature and benefit breakdown one"),
    highlight: false,
  },
  {
    title: "250 Credits",
    price: "$4.5",
    subtitle: "/250 credits",
    description: "Lorem ipsum dolor sit amet consectetur.",
    features: Array(6).fill("Feature and benefit breakdown one"),
    highlight: true,
  },
  {
    title: "250 Credits",
    price: "$4.5",
    subtitle: "/250 credits",
    description: "Lorem ipsum dolor sit amet consectetur.",
    features: Array(6).fill("Feature and benefit breakdown one"),
    highlight: false,
  },
];

export default function CreditPricing() {
  const [customCredits, setCustomCredits] = useState(50);
  const creditRate = 0.2;
  const totalPrice = (customCredits * creditRate).toFixed(2);

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 mt-20">
        <h2 className="text-3xl font-extrabold text-[#072B43] font-nunito">
          Flexible Credit Packs to Match Your <br /> Needs
        </h2>
        <p className="text-[#072B43] text-xs font-quicksand mt-2 ">
          Pick the plan that gives you the right amount of credits. Pay only for
          what you use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl border border-[#FFEDEA] p-6 shadow-sm flex flex-col justify-between transition duration-300 font-quicksand ${
              plan.highlight ? "bg-[#FFEDEA] border-[#FFEDEA]" : "bg-white"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#072B43]">
                <img className="w-5 h-5 md:mr-1 mr-2" src={coin} alt="coins" />
                <h3 className="font-semibold text-lg">{plan.title}</h3>
              </div>
              <p className="text-sm text-[#072B43] mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-[#072B43]">
                {plan.price}
                <span className="text-sm font-normal text-[#072B43] ml-1">
                  {plan.subtitle}
                </span>
              </div>
              <h4 className="font-semibold mt-4 mb-2 text-[#072B43]">
                Breakdown
              </h4>
              <ul className="text-sm text-[#072B43] space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-black text-md mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 bg-[#D63C42] py-2 rounded-md hover:bg-red-600 text-black font-quicksand text-sm font-[1000] ${
                plan.highlight
                  ? "text-white"
                  : "bg-white border border-gray-300"
              }`}
            >
              Purchase
            </button>
          </div>
        ))}

        {/* Custom Plan */}
        <div className="rounded-xl border border-[#FFEDEA] p-6 shadow-sm flex flex-col justify-between text-[#072B43]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img className="w-5 h-5 md:mr-1 mr-2" src={coin} alt="coins" />

              <h3 className="font-semibold text-lg">Custom</h3>
            </div>
            <p className="text-sm text-[#072B43] mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="text-3xl font-bold text-[#072B43] mb-4">Custom</div>

            <label className="block text-sm font-medium text-[#072B43] mb-1">
              Min. 50 credits
            </label>
            <input
              type="number"
              min="50"
              value={customCredits}
              onChange={(e) =>
                setCustomCredits(Math.max(50, Number(e.target.value)))
              }
              className="w-full border border-gray-300 px-3 py-2 rounded-md mb-3"
            />
            <p className="text-sm text-[#072B43] mb-4">
              $1 = 20 credits
              <br />
              Total: ${totalPrice}
            </p>
          </div>
          <button className="bg-[#D63C42] text-white py-2 rounded-md hover:bg-red-300 font-quicksand text-sm font-[1000]">
            Purchase (${totalPrice})
          </button>
        </div>
      </div>
    </div>
  );
}

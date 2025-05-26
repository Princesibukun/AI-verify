// import React from 'react'
import Accordion, { AccordionGroupInterface } from "./Accordion";

const FAQ = () => {
  const questionGroups: Array<AccordionGroupInterface> = [
    {
      title: "Frequently asked question 1?",
      content:
        "this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,,this is the frequently asked question",
    },
    {
      title: "Frequently asked question 1?",
      content:
        "this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,,this is the frequently asked question",
    },
    {
      title: "Frequently asked question 1?",
      content:
        "this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,,this is the frequently asked question",
    },
    {
      title: "Frequently asked question 1?",
      content:
        "this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,,this is the frequently asked question",
    },
    {
      title: "Frequently asked question 1?",
      content:
        "this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,this is the frequently asked question,,this is the frequently asked question",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center font-quicksand mt-10 h-fit w-full py-12 ">
        <div className="bg-white md:h-[290px] md:w-[800px] h-[500px] w-[343px] max-w-[100%] p-4 rounded-lg flex flex-col md:flex-row md:justify-between ">
          <div>
            <h1 className="md:text-2xl text-lg font-bold pt-4">
              Frequently Asked <br /> Question
            </h1>
            <p className="text-gray-700 text-sm mt-2 font-quicksand">
              Lorem ipsum dolor sit amet consectetur.
              <br />
              Habitant cursus odio fringilla id tellus faucibus fermentum felis
              risus.
            </p>
          </div>
          <div className="bg-slate-100 h-[450px] md:h-[250px] md:w-[482px] w-full rounded-sm p-4 overflow-hidden mt-10 md:mt-0">
            {questionGroups.map((questionGroup, _index) => {
              return (
                <Accordion
                  key={`faq_group_${_index}`}
                  title={questionGroup.title}
                  content={questionGroup.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

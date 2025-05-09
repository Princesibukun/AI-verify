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
      <div className="flex flex-col items-center m-auto mt-24 h-full container max-w-[1000px] ">
        <div className="bg-white h-[290px] w-[600px] max-w-[100%] p-4 rounded-lg flex ">
          <div>
            <h1 className="md:text-2xl text-lg font-bold pt-4">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="bg-slate-100 h-[100%] w-[400px] rounded-sm p-4 overflow-auto">
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

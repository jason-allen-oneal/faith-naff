
import React from 'react';
import { ISSUE_SECTION_DESCRIPTION, ISSUE_SECTION_TITLE, ISSUES } from '../constants';

const Issues: React.FC = () => {
  return (
    <section id="issues" className="py-24 bg-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d3e33] serif mb-4">{ISSUE_SECTION_TITLE}</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">{ISSUE_SECTION_DESCRIPTION}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ISSUES.map((issue) => (
            <div key={issue.id} className="bg-white p-8 border border-stone-200 hover:border-[#2d3e33] transition-colors group">
              <div className="w-16 h-16 bg-[#2d3e33] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className={`fas ${issue.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#2d3e33] serif mb-4 uppercase tracking-tighter">{issue.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {issue.description}
              </p>
              {/*
              <a href={`#issue-${issue.id}`} className="inline-block mt-6 text-[#2d3e33] font-bold text-xs uppercase tracking-widest border-b border-[#2d3e33]/30 hover:border-[#2d3e33] transition-all">
                Read Plan
              </a>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;

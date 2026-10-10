"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/team";
import { Users, ShieldCheck, Sparkles, CheckCircle2, Linkedin } from "lucide-react";

interface DeptFilter {
  id: string;
  label: string;
  count: number;
}

export function TeamGrid() {
  const [selectedDept, setSelectedDept] = useState("All");

  const departments: DeptFilter[] = [
    { id: "All", label: "All Members", count: TEAM_MEMBERS.length },
    { id: "Leadership & Strategy", label: "Leadership & Strategy", count: TEAM_MEMBERS.filter((m) => m.department === "Leadership & Strategy").length },
    { id: "Paid Media & LinkedIn Ads", label: "Paid Media & Ads", count: TEAM_MEMBERS.filter((m) => m.department === "Paid Media & LinkedIn Ads").length },
    { id: "Demand Generation & ABM", label: "Demand Gen & ABM", count: TEAM_MEMBERS.filter((m) => m.department === "Demand Generation & ABM").length },
    { id: "Content & Creative", label: "Content & Creative", count: TEAM_MEMBERS.filter((m) => m.department === "Content & Creative").length },
    { id: "Operations & Analytics", label: "Operations & Data", count: TEAM_MEMBERS.filter((m) => m.department === "Operations & Analytics").length },
  ];

  const filteredMembers = selectedDept === "All" 
    ? TEAM_MEMBERS 
    : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <section id="directory" className="space-y-8">
      {/* Top Filter Bar with Department Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Specialist Directory
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-xs">
            {filteredMembers.length} Specialists
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex sm:flex-wrap items-center gap-2 pt-2 pb-2.5 px-1 overflow-x-auto no-scrollbar scroll-smooth">
          {departments.map((dept) => {
            const isActive = selectedDept === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-xs"
                }`}
              >
                <span>{dept.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}>
                  {dept.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMembers.map((member) => {
          const isDevRaj = member.name === "Dev Raj Saini";
          const isFounder = member.role.toLowerCase().includes("founder");

          return (
            <div
              key={member.name}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 relative border ${
                isFounder 
                  ? "bg-gradient-to-b from-blue-50/40 via-white to-white border-blue-200/80 shadow-sm hover:shadow-md hover:border-blue-300"
                  : "bg-white border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300"
              }`}
            >
              <div className="space-y-4">
                {/* Header: Circular Portrait + Department Badge & LinkedIn */}
                <div className="flex items-start justify-between gap-3">
                  <div className="relative p-0.5 rounded-full ring-2 ring-slate-100 shadow-sm shrink-0">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-slate-100 relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 80px, 96px"
                        className="object-cover rounded-full"
                        style={{
                          objectPosition: isDevRaj ? "center 18%" : "center center"
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/70 shrink-0 text-right">
                      {member.department}
                    </span>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white hover:bg-[#0077b5] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0077b5] shadow-xs transition-colors"
                        title={`View ${member.name} on LinkedIn`}
                        aria-label={`View ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-3 h-3" />
                        <span>Profile ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Member Details */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 leading-normal">
                    {member.role}
                  </p>
                </div>

                {/* Member Bio / Value Delivery */}
                {member.bio && (
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 pt-3 border-t border-slate-100 font-normal">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Card Footer Pod Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Saini Nexus Team</span>
                </span>
                <span className="text-slate-500 font-medium">
                  Jaipur, India
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

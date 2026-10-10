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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-black">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl sm:text-3xl font-bold text-black tracking-tight">
            Specialist Directory
          </span>
          <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#BFDBFE] text-black border border-black shadow-[1.5px_1.5px_0px_#000000]">
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
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-extrabold tracking-tight transition-all cursor-pointer whitespace-nowrap border-2 border-black ${
                  isActive
                    ? "bg-[#60A5FA] text-black shadow-[2.5px_2.5px_0px_#000000]"
                    : "bg-white text-zinc-800 hover:bg-[#FAF7EF] shadow-[1.5px_1.5px_0px_#000000]"
                }`}
              >
                <span>{dept.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full border border-black ${
                  isActive ? "bg-white text-black" : "bg-zinc-100 text-black"
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
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-200 relative border-2 border-black ${
                isFounder 
                  ? "bg-[#EFF6FF] shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000]"
                  : "bg-white shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000]"
              }`}
            >
              <div className="space-y-4">
                {/* Header: Circular Portrait + Department Badge & LinkedIn */}
                <div className="flex items-start justify-between gap-3">
                  <div className="relative p-0.5 rounded-full bg-black shrink-0 shadow-[2px_2px_0px_#000000]">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-zinc-100 border-2 border-white relative">
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
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider bg-[#BFDBFE] text-black border border-black shadow-[1.5px_1.5px_0px_#000000] shrink-0 text-right">
                      {member.department}
                    </span>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white hover:bg-[#0077b5] text-[#0077b5] hover:text-white border border-black shadow-[1.5px_1.5px_0px_#000000] transition-colors"
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
                  <h3 className="font-serif text-xl font-bold text-black tracking-tight leading-snug">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs font-bold text-[#2563EB] leading-normal">
                    {member.role}
                  </p>
                </div>

                {/* Member Bio / Value Delivery */}
                {member.bio && (
                  <p className="text-xs text-zinc-700 leading-relaxed line-clamp-3 pt-2 border-t-2 border-black/10 font-normal">
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Card Footer Pod Tag */}
              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                <span className="flex items-center gap-1 font-bold text-black">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Saini Nexus Team</span>
                </span>
                <span className="text-zinc-600 font-bold">
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";
import { Users, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface DeptFilter {
  id: string;
  label: string;
  count: number;
}

export function TeamGrid() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filterMember = (m: typeof TEAM_MEMBERS[0], dept: string) => {
    if (dept === "All") return true;
    const deptLower = m.department.toLowerCase();
    const roleLower = m.role.toLowerCase();
    if (dept === "Leadership") return roleLower.includes("founder") || roleLower.includes("lead") || deptLower.includes("leadership") || m.name.includes("Dev Raj") || m.name.includes("Dau Raj") || m.name.includes("Jyoti");
    if (dept === "Strategy & Demand") return deptLower.includes("strategy") || deptLower.includes("demand") || deptLower.includes("research");
    if (dept === "Paid Media & Ads") return deptLower.includes("paid") || deptLower.includes("media") || deptLower.includes("growth");
    if (dept === "Creative & Content") return deptLower.includes("creative") || deptLower.includes("design") || deptLower.includes("content") || deptLower.includes("distribution");
    if (dept === "Operations & Analytics") return deptLower.includes("operations") || deptLower.includes("analytics") || deptLower.includes("tech");
    return true;
  };

  const departments: DeptFilter[] = [
    { id: "All", label: "All Members", count: TEAM_MEMBERS.length },
    { id: "Leadership", label: "Leadership", count: TEAM_MEMBERS.filter((m) => filterMember(m, "Leadership")).length },
    { id: "Strategy & Demand", label: "Strategy & Demand", count: TEAM_MEMBERS.filter((m) => filterMember(m, "Strategy & Demand")).length },
    { id: "Paid Media & Ads", label: "Paid Media & Ads", count: TEAM_MEMBERS.filter((m) => filterMember(m, "Paid Media & Ads")).length },
    { id: "Creative & Content", label: "Creative & Content", count: TEAM_MEMBERS.filter((m) => filterMember(m, "Creative & Content")).length },
    { id: "Operations & Analytics", label: "Operations & Data", count: TEAM_MEMBERS.filter((m) => filterMember(m, "Operations & Analytics")).length },
  ];

  const filteredMembers = TEAM_MEMBERS.filter((m) => filterMember(m, selectedDept));

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
        <div className="flex flex-wrap items-center gap-2 py-1">
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
                  ? "bg-[#EFF6FF] shadow-[5px_5px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-0.5"
                  : "bg-white shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5"
              }`}
            >
              <div className="space-y-4">
                {/* Header: Circular Portrait + Department Badge */}
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

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider bg-[#BFDBFE] text-black border border-black shadow-[1.5px_1.5px_0px_#000000] shrink-0">
                    {member.department}
                  </span>
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
                  <span>Saini Nexus Pod</span>
                </span>
                <span className="text-emerald-700 font-extrabold flex items-center gap-0.5">
                  <span>Verified</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



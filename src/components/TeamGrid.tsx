"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/team";
import { Users, ShieldCheck, Sparkles, CheckCircle2, Linkedin, ArrowUpRight } from "lucide-react";

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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-2">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1572B8] block">
            Specialist Directory
          </span>
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
              Our 18-Member Team
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex sm:flex-wrap items-center gap-2 pt-2 pb-2.5 px-1 overflow-x-auto no-scrollbar scroll-smooth border border-slate-200 bg-slate-50 p-1">
          {departments.map((dept) => {
            const isActive = selectedDept === dept.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-[9px] font-sans font-bold uppercase tracking-[0.2em] transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? "bg-[#1572B8] text-white border-[#1572B8] shadow-sm"
                    : "bg-white text-slate-600 hover:text-[#1572B8] border-slate-200 shadow-xs"
                }`}
              >
                <span>{dept.label}</span>
                <span className={`px-1.5 py-0.5 border ${
                  isActive ? "bg-white/20 text-white border-white/20" : "bg-slate-100 text-slate-500 border-slate-200"
                }`}>
                  {dept.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredMembers.map((member) => {
          const isDevRaj = member.name === "Dev Raj Saini";
          const isFounder = member.role.toLowerCase().includes("founder");

          return (
            <div
              key={member.name}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative border group ${
                isFounder 
                  ? "bg-[#0F172A] border-slate-800 shadow-xl"
                  : "bg-white border-slate-200 shadow-sm hover:border-[#1572B8] hover:shadow-xl"
              }`}
            >
              {/* Top Accent Line */}
              {!isFounder && <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />}
              {isFounder && <div className="absolute top-0 left-0 w-full h-1 bg-[#38A9EB]" />}

              <div className="space-y-4 sm:space-y-6">
                {/* Header: Portrait + Department Badge & LinkedIn */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-start justify-between">
                    <div className="relative p-1 border border-slate-200 bg-slate-50 shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-200 relative overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 64px, 80px"
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          style={{
                            objectPosition: isDevRaj ? "center 15%" : "center center"
                          }}
                        />
                      </div>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 p-2 font-sans font-bold bg-white text-slate-700 hover:text-white border border-slate-200 hover:border-[#0077b5] hover:bg-[#0077b5] transition-colors ${isFounder ? "bg-slate-800 text-slate-300 border-slate-700" : ""}`}
                        title={`View ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <span className={`self-start px-2 sm:px-2.5 py-1 text-[8.5px] sm:text-[9px] font-sans font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] border ${isFounder ? "bg-slate-800 text-[#38A9EB] border-slate-700" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                    {member.department}
                  </span>
                </div>

                {/* Member Details */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className={`text-lg sm:text-xl font-sans font-black tracking-tight leading-snug ${isFounder ? "text-white" : "text-slate-900 group-hover:text-[#1572B8]"}`}>
                    {member.name}
                  </h3>
                  <p className={`text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.15em] ${isFounder ? "text-[#38A9EB]" : "text-[#1572B8]"}`}>
                    {member.role}
                  </p>
                </div>

                {/* Member Bio / Value Delivery */}
                {member.bio && (
                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 pt-4 sm:pt-5 border-t font-medium ${isFounder ? "text-slate-400 border-slate-800" : "text-slate-600 border-slate-100"}`}>
                    {member.bio}
                  </p>
                )}
              </div>

              {/* Card Footer Pod Tag */}
              <div className={`pt-4 sm:pt-6 mt-4 sm:mt-6 border-t flex flex-col gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] ${isFounder ? "border-slate-800 text-slate-500" : "border-slate-100 text-slate-500"}`}>
                <span className={`flex items-center gap-2 ${isFounder ? "text-slate-300" : "text-slate-900"}`}>
                  <ShieldCheck className={`w-4 h-4 ${isFounder ? "text-[#38A9EB]" : "text-[#1572B8]"}`} />
                  <span>Saini Nexus Team</span>
                </span>
                <span>Jaipur, India</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

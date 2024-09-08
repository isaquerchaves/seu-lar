"use client";
import Header from "@/components/Header";
import { useFetchAllProfiles } from "@/hooks/useFetch";
import AgentCard from "./components/agent-card";

const Agent = () => {
  const { profiles } = useFetchAllProfiles();
  return (
    <div className="h-screen">
      <Header />

      <div className="px-4">
        {profiles?.map((profile) => (
          <AgentCard profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Agent;

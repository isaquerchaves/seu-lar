"use client";
import Header from "@/components/Header";
import { useFetchAllProfiles } from "@/hooks/useFetch";
import AgentCard from "./components/agent-card";

const Agent = () => {
  const { profiles } = useFetchAllProfiles();
  return (
    <div className="h-screen">
      <Header />

      <div className="px-4 pt-4 flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:px-8 lg:pt-8">
        {profiles?.map((profile) => (
          <AgentCard profile={profile} key={profile.user_id} />
        ))}
      </div>
    </div>
  );
};

export default Agent;

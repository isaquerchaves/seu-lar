"use client";
import Header from "@/components/Header";
import { useFetchAllProfiles } from "@/hooks/useFetch";

const Agent = () => {
  const { profiles } = useFetchAllProfiles();
  return (
    <div>
      <Header />
      {profiles?.map((profile) => (
        <div key={profile.user_id}>
          <p>{profile.User?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Agent;

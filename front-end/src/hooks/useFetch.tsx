import { fetchAllProfiles, fetchProfile, Profile } from "@/services/service";
import { useEffect, useState } from "react";

interface UseFetchProfileResult {
  profile: Profile | null;
}

interface UseFetchProfilesResult {
  profiles: Profile[] | null;
}

export function useFetchProfile(user_id: string): UseFetchProfileResult {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (user_id) {
        try {
          const profileData = await fetchProfile(user_id);
          setProfile(profileData);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [user_id]);

  return { profile };
}

export function useFetchAllProfiles(): UseFetchProfilesResult {
  const [profiles, setProfiles] = useState<Profile[] | null>(null); // Corrigido para um array de perfis

  useEffect(() => {
    async function fetchData() {
      try {
        const profilesData = await fetchAllProfiles();
        setProfiles(profilesData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return { profiles };
}

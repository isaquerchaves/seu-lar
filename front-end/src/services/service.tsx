import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface Profile {
  user_id: string;
  creci: string;
  phone: string;
  city: string;
  state: string;
  User?: User; // Alterado para um objeto User
}

// PROFILE
export async function fetchAllProfiles(): Promise<Profile[] | null> {
  try {
    const response = await axios.get(`${API_BASE_URL}/profiles`);
    return response.data.profiles || [];
  } catch (error) {
    console.log("Error fetching profiles: ", error);
    return null;
  }
}

export async function fetchProfile(user_id: string): Promise<Profile | null> {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/${user_id}`);
    return response.data.profile;
  } catch (error) {
    console.log("Error fetching profile: ", error);
    return null;
  }
}

export async function updateProfile(
  user_id: string,
  profileData: Profile
): Promise<void> {
  try {
    await axios.put(`${API_BASE_URL}/profile/${user_id}`, profileData);
  } catch (error) {
    console.error("Erro ao atualizar o Perfil: ", error);
    throw error;
  }
}

export async function createProfile(profileData: Profile): Promise<void> {
  try {
    await axios.post(`${API_BASE_URL}/profile/`, profileData);
  } catch (error) {
    console.error("Erro ao criar o Perfil: ", error);
    throw error;
  }
}

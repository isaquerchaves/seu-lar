import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export interface Profile {
  user_id: string;
  creci: string;
  phone: string;
  city: string;
  state: string;
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

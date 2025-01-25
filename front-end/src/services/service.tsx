import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = "https://seu-lar-back-production.up.railway.app" 

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
  userData?: User;
}

// PROFILE
export async function fetchAllProfiles(): Promise<Profile[] | null> {
  try {
    const response = await axios.get(`${BASE_URL}/profiles`);
    console.log('response:', response.data);
    return response.data || [];
  } catch (error) {
    console.log("Error fetching profiles: ", error);
    return null;
  }
}

export async function fetchProfile(user_id: string): Promise<Profile | null> {
  try {
    const response = await axios.get(`${BASE_URL}/profiles/${user_id}`);
    return response.data;
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
    await axios.put(`${BASE_URL}/profiles/${user_id}`, profileData);
  } catch (error) {
    console.error("Erro ao atualizar o Perfil: ", error);
    throw error;
  }
}

export async function createProfile(profileData: Profile): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/profiles`, profileData);
  } catch (error) {
    console.error("Erro ao criar o Perfil: ", error);
    throw error;
  }
}

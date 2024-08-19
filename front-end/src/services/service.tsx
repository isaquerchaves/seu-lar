import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api";

export interface Profile {
  user_id: string;
  cresci: string;
  phone: number;
  city: string;
  state: string;
}

export async function fetchProfile(user_id: string): Promise<Profile[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/profile/${user_id}`);
    return response.data.profile;
  } catch (error) {
    console.log("Error fetching profile: ", error);
    return [];
  }
}

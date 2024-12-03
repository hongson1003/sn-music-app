import APP_ENVS from "../constants/appEnvs";

const userService = {
  async getMe(accessToken) {
    const response = await fetch(`${APP_ENVS.EXPO_PUBLIC_API_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      return await response.json();
    }

    throw await response.json();
  },
};

export default userService;
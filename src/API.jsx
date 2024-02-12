const LEADERS_URL = "https://wedev-api.sky.pro/api/leaderboard";

export async function getLeadersList() {
  const response = await fetch(LEADERS_URL, {
    method: "GET",
  });
  if (response.status !== 200) {
    throw new Error("Что-то пошло не так");
  }
  const data = await response.json();
  return data;
}

export async function addLeader({ name, time }) {
  const response = await fetch(LEADERS_URL, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      time: time,
    }),
  });
  if (response.status !== 201) {
    throw new Error("Что-то пошло не так");
  }
  const data = await response.json();
  return data;
}

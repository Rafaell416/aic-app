async function fetchEvents() {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/events?limit=30"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.log("Error fetching events", error);
  }
}

export { fetchEvents };

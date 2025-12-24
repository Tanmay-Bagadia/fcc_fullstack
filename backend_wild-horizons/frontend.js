export const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "tanmay_13" }),
  headers: {
    "Content-Type": "application/json",
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { prompt } = req.body;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      version: "db21e45bfa0110c111a8d4d12e3bfe501310b7b545539f29ecb70a3a60c5a711",
      input: { prompt }
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}

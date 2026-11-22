import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "A hand rests on your shoulder and stays there. The kettle ticks as it cools, the dog settles its head on your foot, and the evening keeps you exactly where you are.";

const outputDir = "/output";
const outputPath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, entry, "utf8");

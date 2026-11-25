import { mkdirSync, writeFileSync } from "node:fs";

const autoReply =
  "My human approved my day off, so today they are the assistant; please ask them for the password they always ask me for.";

function ensureSingleLine(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 159 || trimmed.includes("\n")) {
    throw new Error("entry must be one line of 1-159 characters");
  }
  return trimmed;
}

function publishAutoReply(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ensureSingleLine(autoReply), "utf8");
}

publishAutoReply();

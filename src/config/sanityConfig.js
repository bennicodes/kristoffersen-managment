// src/config/sanityClient.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bfsn0mcr", // from sanity.config
  dataset: "production",
  apiVersion: "2025-08-17", // today’s date (safe to just use today)
  useCdn: true, // true = fast, cached queries (read-only)
});

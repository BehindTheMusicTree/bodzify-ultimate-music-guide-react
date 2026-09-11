"use client";

import GenreTreePage from "@components/features/genre-tree/GenreTreePage";
import { getGrowBackendBaseUrl } from "@lib/site-urls";

export default function PrototypeReferenceGenreTreePage() {
  return <GenreTreePage getBackendBaseUrl={getGrowBackendBaseUrl} title="Prototype Genre Tree (Demo)" readOnly={true} />;
}

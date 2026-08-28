export const mockClusters = [
  {
    id: 1,
    canonicalName: "Stainless Steel Pipe, 2 inch",
    canonicalCode: "SSP-002IN",
    confidence: 96,
    method: "tfidf",
    members: [
      { source: "IOCL", raw: "SS Pipe-2IN" },
      { source: "ONGC", raw: "Steel Pipe, 2 inch dia" },
      { source: "GAIL", raw: "Pipe-STL-050mm" },
    ],
  },
  {
    id: 2,
    canonicalName: "Ball Valve, 1 inch, Brass",
    canonicalCode: "BVL-001BR",
    confidence: 91,
    method: "tfidf",
    members: [
      { source: "IOCL", raw: "Brass Ball Valve 1IN" },
      { source: "BPCL", raw: "Valve-Ball-Brass-025mm" },
    ],
  },
  {
    id: 3,
    canonicalName: "Hex Head Bolt, M12 x 50mm",
    canonicalCode: "HXB-M1250",
    confidence: 88,
    method: "tfidf",
    members: [
      { source: "ONGC", raw: "Bolt Hex M12x50" },
      { source: "GAIL", raw: "HEX-BOLT-12MM-50L" },
      { source: "IOCL", raw: "M12 Hexagon Bolt 50mm" },
    ],
  },
  {
    id: 4,
    canonicalName: "Corrosion-Resistant Tubular, Grade 304",
    canonicalCode: "CRT-G304",
    confidence: 74,
    method: "llm_verified",
    members: [
      { source: "BPCL", raw: "SS Pipe Grade 304" },
      { source: "ONGC", raw: "Corrosion Resistant Tubular G304" },
    ],
  },
  {
    id: 5,
    canonicalName: "Gate Valve, 4 inch, Cast Iron",
    canonicalCode: "GTV-004CI",
    confidence: 93,
    method: "tfidf",
    members: [
      { source: "IOCL", raw: "CI Gate Valve-4IN" },
      { source: "GAIL", raw: "Gate Valve, 4 inch Cast Iron" },
    ],
  },
];

export const summaryStats = {
  rawEntries: 60,
  standardizedItems: 14,
  duplicatesEliminated: 46,
  cpses: ["IOCL", "ONGC", "GAIL", "BPCL"],
};

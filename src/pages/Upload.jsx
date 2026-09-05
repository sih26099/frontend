import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, FileSpreadsheet, X, Download } from "lucide-react";
import ErrorState from "../components/ErrorState";

const SAMPLE_ROWS = [
  { source: "IOCL", code: "SSP-2IN-001", desc: "SS Pipe-2IN" },
  { source: "ONGC", code: "STLPIPE-050", desc: "Steel Pipe, 2 inch dia" },
  { source: "GAIL", code: "PIPE-STL-050mm", desc: "Pipe-STL-050mm" },
  { source: "BPCL", code: "BVBR-1IN", desc: "Brass Ball Valve 1IN" },
];

const SAMPLE_CSV_ROWS = [
  { source: "IOCL", code: "SSP-2IN-001", desc: "SS Pipe-2IN" },
  { source: "ONGC", code: "STLPIPE-050", desc: "Steel Pipe, 2 inch dia" },
  { source: "GAIL", code: "PIPE-STL-050mm", desc: "Pipe-STL-050mm" },
  { source: "BPCL", code: "BVBR-1IN", desc: "Brass Ball Valve 1IN" },
  { source: "HPCL", code: "BALLV-1INCH", desc: "Ball Valve Brass 1 inch" },
  { source: "IOCL", code: "GSKT-CU-3MM", desc: "Copper Gasket 3mm" },
  { source: "ONGC", code: "CU-GASKET-003", desc: "Gasket, Copper, 3mm thick" },
  { source: "GAIL", code: "FLNG-SS-4IN", desc: "SS Flange 4 Inch" },
  { source: "BPCL", code: "FLANGE-STL-100", desc: "Steel Flange 100mm" },
  { source: "HPCL", code: "NUT-HEX-M12", desc: "Hex Nut M12" },
  { source: "IOCL", code: "HEXNUT-12MM", desc: "Hexagonal Nut, 12mm" },
  { source: "ONGC", code: "BOLT-SS-M10-50", desc: "SS Bolt M10x50mm" },
];

const MAX_SIZE_MB = 10;
const ALLOWED_EXT = [".csv", ".xlsx"];

function downloadSampleCSV() {
  const header = "Source CPSE,Material Code,Description";
  const rows = SAMPLE_CSV_ROWS.map(
    (r) => `${r.source},${r.code},"${r.desc}"`
  );
  const csvContent = [header, ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "matsync-sample-materials.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function Upload() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleFile = (f) => {
    if (!f) return;
    const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED_EXT.includes(ext)) {
      setError({
        title: "Unsupported file type",
        message: `MatSync only reads .csv or .xlsx files. "${f.name}" isn't one of those.`,
      });
      setFile(null);
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError({
        title: "File too large",
        message: `This file is over ${MAX_SIZE_MB}MB. Try splitting it into smaller batches.`,
      });
      setFile(null);
      return;
    }
    setError(null);
    setFile(f);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleRun = () => {
    if (!file) {
      setError({
        title: "No file selected",
        message: "Upload a .csv or .xlsx file before running standardization.",
      });
      return;
    }
    navigate("/processing");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <p className="text-xs tracking-widest uppercase text-steel font-medium mb-2">
        Step 1
      </p>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
        <h1 className="font-display text-3xl font-semibold text-navy">
          Upload a material list
        </h1>
        <button
          onClick={downloadSampleCSV}
          className="inline-flex items-center gap-1.5 text-sm text-steel hover:text-steel-light font-medium whitespace-nowrap"
        >
          <Download size={16} />
          Download sample CSV
        </button>
      </div>
      <p className="text-navy/70 mb-8 max-w-xl">
        Upload a CSV or Excel file with material entries from one or more CPSEs. No fixed
        column format required — MatSync will detect and normalize the fields. Don't have
        a file handy? Download the sample above and upload it right back.
      </p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-xl border-2 border-dashed transition-colors p-12 flex flex-col items-center text-center ${
          dragActive
            ? "border-steel bg-steel/5"
            : "border-navy/20 bg-white hover:border-navy/40"
        }`}
      >
        <UploadCloud size={36} className="text-steel mb-4" />
        <p className="font-medium text-navy">
          {file ? file.name : "Drag & drop your file here, or click to browse"}
        </p>
        <p className="text-sm text-navy/50 mt-1">Supports .csv, .xlsx up to 10MB</p>
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      {file && (
        <button
          onClick={() => setFile(null)}
          className="mt-3 text-sm text-alert hover:underline inline-flex items-center gap-1"
        >
          <X size={14} /> Remove file
        </button>
      )}

      {error && (
        <div className="mt-6">
          <ErrorState
            title={error.title}
            message={error.message}
            onRetry={() => setError(null)}
          />
        </div>
      )}

      <div className="mt-10">
        <div className="flex items-center gap-2 mb-3">
          <FileSpreadsheet size={18} className="text-navy/50" />
          <h2 className="font-display font-semibold text-navy">
            {file ? "Preview" : "Sample format (no file uploaded yet)"}
          </h2>
        </div>
        <div className="overflow-x-auto rounded-lg border border-navy/10 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-navy/5 text-navy/70 font-medium">
              <tr>
                <th className="text-left px-4 py-3">Source CPSE</th>
                <th className="text-left px-4 py-3">Material Code</th>
                <th className="text-left px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody className="font-mono text-navy/80">
              {SAMPLE_ROWS.map((r, i) => (
                <tr key={i} className="border-t border-navy/10">
                  <td className="px-4 py-3">{r.source}</td>
                  <td className="px-4 py-3">{r.code}</td>
                  <td className="px-4 py-3 font-body">{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={handleRun}
        className="mt-10 w-full sm:w-auto bg-steel hover:bg-steel-light text-white font-medium px-8 py-3 rounded-md transition-colors"
      >
        Run Standardization
      </button>
    </div>
  );
}
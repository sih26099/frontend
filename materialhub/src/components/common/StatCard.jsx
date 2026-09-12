export default function StatCard({ label, value, hint }) {
  return (
    <div className="bg-white border border-ink-200 rounded-md px-4 py-3.5">
      <div className="text-xs text-ink-500 mb-1.5">{label}</div>
      <div className="text-2xl font-semibold text-ink-900 font-mono leading-none">{value}</div>
      {hint && <div className="text-xs text-ink-400 mt-1.5">{hint}</div>}
    </div>
  )
}

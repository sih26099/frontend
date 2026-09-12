import { Loader2 } from 'lucide-react'

export default function LoadingState({ label = 'Loading…', compact = false }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-ink-500 ${compact ? 'py-6' : 'py-16'}`}>
      <Loader2 size={16} className="animate-spin" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

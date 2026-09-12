import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Search, UploadCloud } from 'lucide-react'
import { useApiHealth } from '../../hooks/useApiHealth'
import GlobalSearch from './GlobalSearch'

export default function Header({ onOpenMobileNav }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const status = useApiHealth()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-ink-200 bg-white px-4">
      <button
        onClick={onOpenMobileNav}
        className="lg:hidden text-ink-500 hover:text-ink-900 p-1 -ml-1"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-ink-900 truncate">SIH 26099</div>
        <div className="text-[0.7rem] text-ink-500 truncate leading-tight hidden sm:block">
          National Material Harmonization
        </div>
      </div>

      <button
        onClick={() => setSearchOpen(true)}
        className="flex items-center gap-2 rounded border border-ink-200 bg-surface-sunk px-3 py-1.5 text-sm text-ink-500 hover:border-ink-300 transition-colors"
      >
        <Search size={14} />
        <span className="hidden sm:inline">Search materials…</span>
      </button>

      <button
        onClick={() => navigate('/upload')}
        className="hidden sm:inline-flex items-center gap-1.5 rounded bg-navy-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-navy-800 transition-colors"
      >
        <UploadCloud size={14} />
        Upload
      </button>

      <div className="flex items-center gap-1.5 pl-2 border-l border-ink-100">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === 'connected'
              ? 'bg-signal-good'
              : status === 'offline'
                ? 'bg-signal-bad'
                : 'bg-ink-300 animate-pulse'
          }`}
          aria-hidden="true"
        />
        <span className="text-xs text-ink-500 hidden md:inline">
          {status === 'connected' ? 'API Connected' : status === 'offline' ? 'API Offline' : 'Checking…'}
        </span>
      </div>

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}

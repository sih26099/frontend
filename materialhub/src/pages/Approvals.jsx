import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipboardCheck } from 'lucide-react'
import { listApprovals } from '../services/api'
import { useApi } from '../hooks/useApi'
import LoadingState from '../components/common/LoadingState'
import ErrorState from '../components/common/ErrorState'
import EmptyState from '../components/common/EmptyState'
import ApprovalStatusBadge from '../components/common/ApprovalStatusBadge'
import { APPROVAL_STATUSES } from '../lib/constants'
import { fmt, fmtDateTime } from '../lib/formatters'

export default function Approvals() {
  const [status, setStatus] = useState('')
  const navigate = useNavigate()

  const fetcher = useCallback(() => listApprovals({ status: status || undefined, limit: 200 }), [status])
  const { data: approvals, error, loading, refetch } = useApi(fetcher, [status])

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-ink-900">Approval Queue</h1>
        <p className="text-sm text-ink-500">
          AI-recommended harmonizations awaiting human review. Nothing changes the material master until approved.
        </p>
      </div>

      <div className="bg-white border border-ink-200 rounded-md p-3 flex flex-wrap gap-2">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="text-sm border border-ink-200 rounded px-2.5 py-1.5"
        >
          <option value="">All statuses</option>
          {Object.values(APPROVAL_STATUSES).map((s) => (
            <option key={s} value={s}>
              {s.replace('_', ' ')}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white border border-ink-200 rounded-md overflow-hidden">
        {loading && <LoadingState label="Loading approvals…" />}
        {!loading && error && <ErrorState message={error.message} onRetry={refetch} />}
        {!loading && !error && (!approvals || approvals.length === 0) && <EmptyState icon={ClipboardCheck} />}

        {!loading && !error && approvals && approvals.length > 0 && (
          <div className="scroll-x">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Approval ID</th>
                  <th>Status</th>
                  <th>Reviewer</th>
                  <th>Created</th>
                  <th>Decided</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map((a) => (
                  <tr key={a.id} onClick={() => navigate(`/approvals/${a.id}`)} className="cursor-pointer">
                    <td className="font-mono text-xs">{a.id.slice(0, 8)}</td>
                    <td>
                      <ApprovalStatusBadge status={a.status} />
                    </td>
                    <td>{fmt(a.approved_by)}</td>
                    <td className="text-xs text-ink-500">{fmtDateTime(a.created_date)}</td>
                    <td className="text-xs text-ink-500">{a.approval_date ? fmtDateTime(a.approval_date) : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

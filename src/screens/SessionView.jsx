import Logo from '../components/Logo'

function SessionView({
  session,
  setCurrentScreen
}) {
  if (!session) {
    return null
  }

  const formatDate = (dateString) => {
    const date = new Date(
      `${dateString}T00:00:00`
    )

    return date.toLocaleDateString(
      'id-ID',
      {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }
    )
  }

  return (
    <div className="screen-card">

      <Logo />

      <button
        type="button"
        className="back-button"
        onClick={() =>
          setCurrentScreen('summary')
        }
      >
        ← Kembali
      </button>

      <div className="session-view-header">
        <span className="session-label">
          Sesi {session.sessionNumber}
        </span>

        <h1>
          Detail Sesi
        </h1>
      </div>

      <div className="session-view-info">

        <div className="detail-item">
          <span className="detail-label">
            Tanggal
          </span>

          <span className="detail-value">
            {formatDate(session.date)}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Waktu
          </span>

          <span className="detail-value">
            {session.startTime} – {session.endTime}
          </span>
        </div>

        <div className="detail-item">
          <span className="detail-label">
            Tempat
          </span>

          <span className="detail-value">
            {session.location}
          </span>
        </div>

      </div>

      <div className="material-card">

        <span className="detail-label">
          Materi
        </span>

        <p>
          {session.material}
        </p>

      </div>

    </div>
  )
}

export default SessionView
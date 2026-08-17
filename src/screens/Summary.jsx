import Logo from '../components/Logo'

function Summary({
  student,
  sessions,
  setCurrentScreen,
  setSelectedSession
}) {
  const totalSessions =
    Number(student.packageSessions)

  const scheduledSessions =
    sessions.length

  const remainingSessions =
    totalSessions - scheduledSessions

  const allSessionsScheduled =
    scheduledSessions >= totalSessions

  const formatDate = (dateString) => {
    const date = new Date(
      `${dateString}T00:00:00`
    )

    return date.toLocaleDateString(
      'id-ID',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }
    )
  }

  const handleSessionClick = (session) => {
    setSelectedSession(session)

    setCurrentScreen('session-view')
  }

  return (
    <div className="screen-card">

      <Logo />

      <h1>
        Ringkasan
      </h1>

      {/* =========================
          STUDENT INFO
      ========================= */}

      <div className="student-summary">

        <h2>
          {student.name}
        </h2>

        <p>
          {student.program}
        </p>

        <div className="student-meta">

          <span>
            {totalSessions} sesi
          </span>

          <span>
            {student.duration} menit / sesi
          </span>

          <span>
            {student.learningMode}
          </span>

        </div>

      </div>


      {/* =========================
          PROGRESS
      ========================= */}

      <div className="progress-section">

        <div className="progress-header">

          <span>
            Progress jadwal
          </span>

          <strong>
            {scheduledSessions} / {totalSessions}
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${
                (scheduledSessions /
                  totalSessions) *
                100
              }%`
            }}
          />

        </div>

      </div>


      {/* =========================
          SESSION LIST
      ========================= */}

      {scheduledSessions > 0 && (
        <div className="session-list">

          <h2>
            Sesi yang sudah dijadwalkan
          </h2>

          {sessions.map((session) => (

            <button
              key={session.sessionNumber}
              type="button"
              className="session-card"
              onClick={() =>
                handleSessionClick(session)
              }
            >

              <div className="session-card-top">

                <span className="session-number">
                  Sesi {session.sessionNumber}
                </span>

                <span className="session-arrow">
                  →
                </span>

              </div>

              <div className="session-card-date">
                {formatDate(session.date)}
              </div>

              <div className="session-card-time">
                {session.startTime} – {session.endTime}
              </div>

              <div className="session-card-bottom">

                <span>
                  {session.location}
                </span>

                <span>
                  {session.material}
                </span>

              </div>

            </button>

          ))}

        </div>
      )}


      {/* =========================
          ALL SESSIONS COMPLETE
      ========================= */}

      {allSessionsScheduled ? (

        <div className="complete-message">

          <div className="complete-icon">
            ✓
          </div>

          <div>
            <strong>
              Semua sesi telah dijadwalkan
            </strong>

            <p>
              Seluruh sesi dalam paket{' '}
              {student.name} sudah memiliki
              jadwal.
            </p>
          </div>

        </div>

      ) : (

        <>
          <div className="schedule-status">

            <div>
              <strong>
                {scheduledSessions}
              </strong>

              <span>
                Sesi terjadwal
              </span>
            </div>

            <div>
              <strong>
                {remainingSessions}
              </strong>

              <span>
                Sesi belum dijadwalkan
              </span>
            </div>

          </div>

          <button
            className="primary-button" type="button" 
            onClick={() =>
              setCurrentScreen('date')
            }
          >
            Jadwalkan Sesi Berikutnya
          </button>
        </>

      )}

    </div>
  )
}

export default Summary
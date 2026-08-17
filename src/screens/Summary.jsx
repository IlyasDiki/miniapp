function Summary({
  student,
  sessions,
  setCurrentScreen
}) {
  const remainingSessions =
    Number(student.packageSessions) - sessions.length

  return (
    <div className="screen-card">
      <h1>Ringkasan</h1>

      <p>
        Siswa: {student.name}
      </p>

      <p>
        Program: {student.program}
      </p>

      <p>
        Paket: {student.packageSessions} sesi
      </p>

      <p>
        Durasi: {student.duration} menit
      </p>

      <p>
        Mode belajar: {student.learningMode}
      </p>

      <hr />

      <h2>Sesi yang sudah dijadwalkan</h2>

      {sessions.map((session, index) => (
        <div key={index}>
          <h3>
            Sesi {index + 1}
          </h3>

          <p>
            Tanggal: {session.date}
          </p>

          <p>
            Jam: {session.startTime} - {session.endTime}
          </p>

          <p>
            Tempat: {session.location}
          </p>

          <p>
            Materi: {session.material}
          </p>

          <hr />
        </div>
      ))}

      <p>
        Sudah dijadwalkan: {sessions.length} sesi
      </p>

      <p>
        Belum dijadwalkan: {remainingSessions} sesi
      </p>

      {remainingSessions > 0 && (
        <button
          onClick={() => setCurrentScreen('date')}
        >
          Jadwalkan Sesi Berikutnya
        </button>
      )}
    </div>
  )
}

export default Summary
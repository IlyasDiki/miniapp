import { useState } from 'react'
import Logo from '../components/Logo'

function SessionDetail({
  student,
  selectedDate,
  sessions,
  setSessions,
  setCurrentScreen
}) {
  console.log(
    'SessionDetail student:',
    student
  )

  console.log(
    'SessionDetail selectedDate:',
    selectedDate
  )

  console.log(
    'SessionDetail sessions:',
    sessions
  )

  const [startTime, setStartTime] = useState('')
  const [location, setLocation] = useState('')
  const [material, setMaterial] = useState('')
  const [error, setError] = useState('')

  const calculateEndTime = (
    time,
    duration
  ) => {
    if (!time) {
      return ''
    }

    const [hours, minutes] =
      time.split(':').map(Number)

    const date = new Date()

    date.setHours(hours)
    date.setMinutes(
      minutes + Number(duration)
    )

    const endHours = String(
      date.getHours()
    ).padStart(2, '0')

    const endMinutes = String(
      date.getMinutes()
    ).padStart(2, '0')

    return `${endHours}:${endMinutes}`
  }

  const endTime = calculateEndTime(
    startTime,
    student.duration
  )

  const isOnline =
    student.learningMode === 'online'

  const handleSubmit = (event) => {
    event.preventDefault()

    setError('')

    // ====================================
    // 1. CEK BATAS JUMLAH SESI
    // ====================================

    if (
      sessions.length >=
      Number(student.packageSessions)
    ) {
      setError(
        'Semua sesi dalam paket sudah dijadwalkan'
      )

      return
    }

    // ====================================
    // 2. CEK JAM MULAI
    // ====================================

    if (!startTime) {
      setError(
        'Jam mulai wajib diisi'
      )

      return
    }

    // ====================================
    // 3. CEK TEMPAT
    // ====================================

    if (
      !isOnline &&
      !location.trim()
    ) {
      setError(
        'Tempat wajib diisi'
      )

      return
    }

    // ====================================
    // 4. CEK MATERI
    // ====================================

    if (!material.trim()) {
      setError(
        'Materi wajib diisi'
      )

      return
    }

    // ====================================
    // 5. CEK BENTROK
    // ====================================

    const isOverlapping =
      sessions.some((session) => {

        if (
          session.date !==
          selectedDate
        ) {
          return false
        }

        return (
          startTime <
            session.endTime &&
          endTime >
            session.startTime
        )
      })

    if (isOverlapping) {
      setError(
        'Jadwal bertabrakan dengan sesi yang sudah ada'
      )

      return
    }

    // ====================================
    // 6. BUAT SESI BARU
    // ====================================

    const newSession = {
      date: selectedDate,

      startTime: startTime,

      endTime: endTime,

      location: isOnline
        ? 'Online'
        : location.trim(),

      material: material.trim()
    }

    console.log(
      'Data sesi baru:',
      newSession
    )

    // ====================================
    // 7. SIMPAN SESI
    // ====================================

    setSessions([
      ...sessions,
      newSession
    ])

    // ====================================
    // 8. PINDAH KE SUMMARY
    // ====================================

    setCurrentScreen('summary')
  }

  return (
    <div className="screen-card">
      <Logo />
      <h1>
        Detail Sesi
      </h1>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <p>
        Tanggal: {selectedDate}
      </p>

      <p>
        Mode belajar:{' '}
        {student.learningMode}
      </p>

      <form
        onSubmit={handleSubmit}
      >

        {/* JAM MULAI */}

        <div>
          <label htmlFor="startTime">
            Jam Mulai
          </label>

          <input
            id="startTime"
            type="time"
            value={startTime}
            onChange={(event) =>
              setStartTime(
                event.target.value
              )
            }
          />
        </div>

        {/* JAM SELESAI */}

        <div>
          <label htmlFor="endTime">
            Jam Selesai
          </label>

          <input
            id="endTime"
            type="time"
            value={endTime}
            readOnly
          />
        </div>

        {/* TEMPAT */}

        <div>
          <label htmlFor="location">
            Tempat
          </label>

          {isOnline ? (
            <input
              id="location"
              type="text"
              value="Online"
              readOnly
            />
          ) : (
            <input
              id="location"
              type="text"
              value={location}
              onChange={(event) =>
                setLocation(
                  event.target.value
                )
              }
              placeholder="Masukkan tempat les"
            />
          )}
        </div>

        {/* MATERI */}

        <div>
          <label htmlFor="material">
            Materi
          </label>

          <textarea
            id="material"
            value={material}
            onChange={(event) =>
              setMaterial(
                event.target.value
              )
            }
            placeholder="Masukkan materi yang akan disampaikan"
          />
        </div>

        {/* TOMBOL */}

        <button type="submit">
          Simpan Sesi
        </button>

      </form>

    </div>
  )
}

export default SessionDetail
import { useState } from 'react'
import Logo from '../components/Logo'

function Registration({ setCurrentScreen, setStudent }) {
  const [name, setName] = useState('')
  const [program, setProgram] = useState('')
  const [packageSessions, setPackageSessions] = useState('')
  const [duration, setDuration] = useState('')
  const [learningMode, setLearningMode] = useState('')
  return (
    <div className="screen-card">
      <Logo />
      <h1>Pendaftaran</h1>

      <p>Silakan isi data siswa untuk memulai penjadwalan.</p>

      <form
      onSubmit={(event) => {
          event.preventDefault()

          if (!name.trim()) {
            alert('Nama siswa wajib diisi')
            return
          }

          if (!program) {
            alert('Program wajib dipilih')
            return
          }

          if (!packageSessions) {
            alert('Paket wajib dipilih')
            return
          }

          if (!duration) {
            alert('Durasi wajib dipilih')
            return
          }

          if (!learningMode) {
            alert('Mode belajar wajib dipilih')
            return
          }

          const studentData = {
            name,
            program,
            packageSessions,
            duration,
            learningMode
          }

          setStudent(studentData)

          setCurrentScreen('date')
        }}>
        <div>
          <label htmlFor="name">Nama Siswa</label>
          <input
            id="name"
            type="text"
            placeholder="Masukkan nama siswa"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="program">Program</label>

          <select id="program"
          value={program}
          onChange={(event) => setProgram(event.target.value)}
          >
            <option value="">Pilih program</option>
            <option value="sd">Les Privat SD</option>
            <option value="smp">Les Privat SMP</option>
            <option value="sma">Les Privat SMA</option>
          </select>
        </div>

        <div>
          <label htmlFor="package">Paket</label>

          <select id="package" value={packageSessions} onChange={(event) => setPackageSessions(event.target.value)}>
            <option value="">Pilih paket</option>
            <option value="4">4 sesi</option>
            <option value="8">8 sesi</option>
            <option value="12">12 sesi</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration">Durasi per Sesi</label>

          <select id="duration" value={duration} onChange={(event) => setDuration(event.target.value)}  >
            <option value="">Pilih durasi</option>
            <option value="60">60 menit</option>
            <option value="90">90 menit</option>
            <option value="120">120 menit</option>
          </select>
        </div>

        <div>
          <label htmlFor="learningMode">Mode Belajar</label>

          <select id="learningMode" value={learningMode} onChange={(event) => setLearningMode(event.target.value)}>
            <option value="">Pilih mode belajar</option>
            <option value="onsite">Tutor datang ke lokasi</option>
            <option value="online">Online</option>
          </select>
        </div>

        <button type="submit">
          Lanjutkan
        </button>
      </form>
    </div>
  )
}

export default Registration

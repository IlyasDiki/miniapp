import Logo from '../components/Logo'
function DateSelection({
  student,
  selectedDate,
  setSelectedDate,
  setCurrentScreen
}) {
  const today = new Date()

  const minimumDate = new Date(today)

  minimumDate.setDate(
    minimumDate.getDate() + 3
  )

  const minimumDateString =
    minimumDate.toISOString().split('T')[0]

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!selectedDate) {
      return
    }

    console.log(
      'DateSelection student:',
      student
    )

    console.log(
      'DateSelection selectedDate:',
      selectedDate
    )

    setCurrentScreen('session')
  }

  return (
    <div className="screen-card">
      <Logo />
      <h1>
        Pilih Tanggal
      </h1>

      {student && (
        <p>
          Siswa: {student.name}
        </p>
      )}

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="date">
            Tanggal Sesi
          </label>

          <input
            id="date"
            type="date"
            min={minimumDateString}
            value={selectedDate}
            onChange={(event) => {
              setSelectedDate(
                event.target.value
              )
            }}
          />
        </div>

        <button
          className="primary-button" type="submit"
          disabled={!selectedDate}
        >
          Lanjutkan
        </button>

      </form>

    </div>
  )
}

export default DateSelection
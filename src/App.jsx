import { useState } from 'react'

import Registration from './screens/Registration'
import DateSelection from './screens/DateSelection'
import SessionDetail from './screens/SessionDetail'
import Summary from './screens/Summary'
import SessionView from './screens/SessionView'

function App() {
  const [currentScreen, setCurrentScreen] = useState('registration')

  const [student, setStudent] = useState(null)

  const [selectedDate, setSelectedDate] = useState('')

  const [sessions, setSessions] = useState([])

  const [selectedSession, setSelectedSession] = useState(null)

  return (
    <main className="app">
      <div className="app-container">

        {currentScreen === 'registration' && (
          <Registration
            setStudent={setStudent}
            setCurrentScreen={setCurrentScreen}
          />
        )}

        {currentScreen === 'date' && (
          <DateSelection
            student={student}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setCurrentScreen={setCurrentScreen}
          />
        )}

        {currentScreen === 'session' && (
          <SessionDetail
            student={student}
            selectedDate={selectedDate}
            sessions={sessions}
            setSessions={setSessions}
            setCurrentScreen={setCurrentScreen}
          />
        )}

        {currentScreen === 'summary' && (
          <Summary
            student={student}
            sessions={sessions}
            setCurrentScreen={setCurrentScreen}
            setSelectedSession={setSelectedSession}
          />
        )}
        {currentScreen === 'session-view' && (
          <SessionView
            session={selectedSession}
            setCurrentScreen={setCurrentScreen}
          />
        )}

      </div>
    </main>
  )
}

export default App
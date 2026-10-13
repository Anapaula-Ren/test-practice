import { AppHeader } from "./components/AppHeader"
import { BookForm } from "./components/BookForm"
import { ReadingList } from "./components/ReadingList"

function App() {
  return (
    <main className="app">
      <AppHeader />
      <BookForm />
      <ReadingList />
    </main>
  )
}

export default App

import { AppHeader } from "./components/AppHeader"
import { BookForm } from "./components/BookForm"
import { ReadingList } from "./components/ReadingList"
import { useReadingList } from "./hooks/useReadingList"

function App() {
  const {
    books,
    formState,
    submitBook,
    isPending,
    titleInputRef,
  } = useReadingList()

  return (
    <main className="app">
      <AppHeader />
      <BookForm
        submitBook={submitBook}
        isPending={isPending}
        formMessage={formState.message}
        titleInputRef={titleInputRef}
      />
      <ReadingList books={books} />
    </main>
  )
}

export default App

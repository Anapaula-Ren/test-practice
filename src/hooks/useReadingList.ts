import { useActionState, useRef, useState } from "react"
import type { Book, FormState } from "../types/readingList"

const initialBooks: Book[] = [
  {
    id: 1,
    title: "Project Hail Mary",
    author: "Andy Weir",
    pages: 496,
  },
  {
    id: 2,
    title: "Circe",
    author: "Madeline Miller",
    pages: 393,
  },
  {
    id: 3,
    title: "The Midnight Library",
    author: "Matt Haig",
    pages: 304,
  },
]

export function useReadingList() {
  const [books, setBooks] = useState<Book[]>(initialBooks)
  const titleInputRef = useRef<HTMLInputElement>(null)

  function focusTitleInput() {
    titleInputRef.current?.focus()
  }

  function addBook(_previousState: FormState, formData: FormData): FormState {
    const titleValue = formData.get("title")
    const authorValue = formData.get("author")
    const pagesValue = formData.get("pages")

    const title = typeof titleValue === "string" ? titleValue.trim() : ""
    const author = typeof authorValue === "string" ? authorValue.trim() : ""
    const pages = typeof pagesValue === "string" ? Number(pagesValue) : NaN

    if (!title) {
      focusTitleInput()
      return { message: "El título es obligatorio." }
    }

    if (!author) {
      focusTitleInput()
      return { message: "El autor es obligatorio." }
    }

    if (!Number.isInteger(pages) || pages <= 0) {
      focusTitleInput()
      return {
        message: "Las páginas deben ser un número entero mayor que 0.",
      }
    }

    setBooks((currentBooks) => {
      const nextId =
        Math.max(0, ...currentBooks.map((book) => book.id)) + 1

      return [...currentBooks, { id: nextId, title, author, pages }]
    })

    focusTitleInput()
    return { message: `"${title}" se agregó a la lista.` }
  }

  const [formState, submitBook, isPending] = useActionState(addBook, {
    message: "",
  })

  return {
    books,
    formState,
    submitBook,
    isPending,
    titleInputRef,
    focusTitleInput,
  }
}
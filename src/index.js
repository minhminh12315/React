import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import books from './books'
import Book from './Book'
function BookList() {
  return (
    <div>
      <h1 className='title'>Amazon best seller</h1>
      <hr />
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <div className="div">
              <Book {...book} key={book.id} number={index}/>
            </div>
          )
        })}
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)

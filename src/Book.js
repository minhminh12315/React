const Book = ({ img, title, author,number }) => {
  return (
    <article className="book">
      <div className="idNumber">#{number + 1}</div>
      <img src={img} alt={title} />
      <h2> {title} </h2>

      <p> {author} </p>
    </article>
  )
}
export default Book
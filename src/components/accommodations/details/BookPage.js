import BookForm from "./BookForm";

import Footer from "../../layout/Footer";

function BookPage() {
  return (
    <>
      <div className="books">
        <div className="wrapper">
          <BookForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookPage;

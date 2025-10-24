import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// 🎬 Movies Data
import movie1 from "../assets/sample-movie1.jpg";
import movie2 from "../assets/sample-movie2.jpg";
import movie3 from "../assets/sample-movie3.jpg";
import movie4 from "../assets/sample-movie4.jpg";
import movie5 from "../assets/sample-movie5.jpg";
import movie6 from "../assets/sample-movie6.jpg";
import movie7 from "../assets/sample-movie7.jpg";
import movie8 from "../assets/sample-movie8.jpg";

// 📚 Books Data
import book1 from "../assets/sample-book1.jpg";
import book2 from "../assets/sample-book2.jpg";
import book3 from "../assets/sample-book3.jpg";
import book4 from "../assets/sample-book4.jpg";
import book5 from "../assets/sample-book5.jpg";
import book6 from "../assets/sample-book6.jpg";
import book7 from "../assets/sample-book7.jpg";
import book8 from "../assets/sample-book8.jpg";

const LandingPage = () => {
  const movies = [
    { img: movie1, title: "Inception", desc: "Directed by Christopher Nolan" },
    {
      img: movie2,
      title: "Interstellar",
      desc: "Directed by Christopher Nolan",
    },
    {
      img: movie3,
      title: "The Dark Knight",
      desc: "Directed by Christopher Nolan",
    },
    { img: movie4, title: "Parasite", desc: "Directed by Bong Joon-ho" },
    {
      img: movie5,
      title: "Avengers: Endgame",
      desc: "Directed by Russo Brothers",
    },
    { img: movie6, title: "Joker", desc: "Directed by Todd Phillips" },
    { img: movie7, title: "Dune", desc: "Directed by Denis Villeneuve" },
    {
      img: movie8,
      title: "Oppenheimer",
      desc: "Directed by Christopher Nolan",
    },
  ];

  const books = [
    { img: book1, title: "Atomic Habits", desc: "by James Clear" },
    { img: book2, title: "The Alchemist", desc: "by Paulo Coelho" },
    {
      img: book3,
      title: "The Subtle Art of Not Giving a F*ck",
      desc: "by Mark Manson",
    },
    { img: book4, title: "The Psychology of Money", desc: "by Morgan Housel" },
    { img: book5, title: "Deep Work", desc: "by Cal Newport" },
    { img: book6, title: "Rich Dad Poor Dad", desc: "by Robert Kiyosaki" },
    { img: book7, title: "Think Like a Monk", desc: "by Jay Shetty" },
    { img: book8, title: "Can't Hurt Me", desc: "by David Goggins" },
  ];

  return (
    <div className="landing">
      {/* 🎥 Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Favorite Movies & Books Effortlessly</h1>
          <p>
            Manage your personal library and watchlist with ease. Simple, fast,
            and secure — all in one place.
          </p>
          <Link to="/login" className="cta-btn">
            Get Started →
          </Link>
        </div>
      </section>

      {/* 🎬 Movie Section */}
      <section className="section">
        <h2>Trending Movies</h2>
        <div className="cards">
          {movies.map((movie, index) => (
            <div className="card" key={index}>
              <img src={movie.img} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📚 Book Section */}
      <section className="section">
        <h2>Popular Books</h2>
        <div className="cards">
          {books.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.img} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

// import React from "react";
// import "../styles/LandingPage.css";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import movie1 from "../assets/sample-movie1.jpg";
// import movie2 from "../assets/sample-movie2.jpg";
// import movie3 from "../assets/sample-movie3.jpg";
// import movie4 from "../assets/sample-movie4.jpg";
// import movie5 from "../assets/sample-movie5.jpg";
// import movie6 from "../assets/sample-movie6.jpg";
// import movie7 from "../assets/sample-movie7.jpg";
// import movie8 from "../assets/sample-movie8.jpg";
// import book1 from "../assets/sample-book1.jpg";
// import book2 from "../assets/sample-book2.jpg";
// import book3 from "../assets/sample-book3.jpg";
// import book4 from "../assets/sample-book4.jpg";
// import book5 from "../assets/sample-book5.jpg";
// import book6 from "../assets/sample-book6.jpg";
// import book7 from "../assets/sample-book7.jpg";
// import book8 from "../assets/sample-book8.jpg";

// const LandingPage = () => {
//   return (
//     <div className="landing">
//       {/* 🎥 Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Track Your Favorite Movies & Books Effortlessly</h1>
//           <p>
//             Manage your personal library and watchlist with ease. Simple, fast,
//             and secure — all in one place.
//           </p>
//           <Link to="/login" className="cta-btn">
//             Get Started →
//           </Link>
//         </div>
//       </section>
//       {/* 🎬 Movie Section */}
//       <section className="section">
//         <h2>Trending Movies</h2>
//         <div className="cards">
//           <div className="card">
//             <img src={movie1} alt="Inception" />
//             <h3>Inception</h3>
//             <p>Directed by Christopher Nolan</p>
//           </div>
//           <div className="card">
//             <img src={movie2} alt="Interstellar" />
//             <h3>Interstellar</h3>
//             <p>Directed by Christopher Nolan</p>
//           </div>
//           <div className="card">
//             <img src={movie3} alt="The Dark Knight" />
//             <h3>The Dark Knight</h3>
//             <p>Directed by Christopher Nolan</p>
//           </div>
//           <div className="card">
//             <img src={movie4} alt="Parasite" />
//             <h3>Parasite</h3>
//             <p>Directed by Bong Joon-ho</p>
//           </div>
//           <div className="card">
//             <img src={movie5} alt="Avengers: Endgame" />
//             <h3>Avengers: Endgame</h3>
//             <p>Directed by Russo Brothers</p>
//           </div>
//           <div className="card">
//             <img src={movie6} alt="Joker" />
//             <h3>Joker</h3>
//             <p>Directed by Todd Phillips</p>
//           </div>
//           <div className="card">
//             <img src={movie7} alt="Dune" />
//             <h3>Dune</h3>
//             <p>Directed by Denis Villeneuve</p>
//           </div>
//           <div className="card">
//             <img src={movie8} alt="Oppenheimer" />
//             <h3>Oppenheimer</h3>
//             <p>Directed by Christopher Nolan</p>
//           </div>
//         </div>
//       </section>
//       {/* 📚 Book Section */}
//       <section className="section">
//         <h2>Popular Books</h2>
//         <div className="cards">
//           <div className="card">
//             <img src={book1} alt="Atomic Habits" />
//             <h3>Atomic Habits</h3>
//             <p>by James Clear</p>
//           </div>
//           <div className="card">
//             <img src={book2} alt="The Alchemistz" />
//             <h3>The Alchemist</h3>
//             <p>by Paulo Coelho</p>
//           </div>
//           <div className="card">
//             <img src={book3} alt="The Subtle Art of Not Giving a F*ck" />
//             <h3>The Subtle Art of Not Giving a F*ck</h3>
//             <p>by Mark Manson</p>
//           </div>
//           <div className="card">
//             <img src={book4} alt="The Psychology of Money" />
//             <h3>The Psychology of Money</h3>
//             <p>by Morgan Housel</p>
//           </div>
//           <div className="card">
//             <img src={book5} alt="Deep Work" />
//             <h3>Deep Work</h3>
//             <p>by Cal Newport</p>
//           </div>
//           <div className="card">
//             <img src={book6} alt="Rich Dad Poor Dad" />
//             <h3>Rich Dad Poor Dad</h3>
//             <p>by Robert Kiyosaki</p>
//           </div>
//           <div className="card">
//             <img src={book7} alt="Think Like a Monk" />
//             <h3>Think Like a Monk</h3>
//             <p>by Jay Shetty</p>
//           </div>
//           <div className="card">
//             <img src={book8} alt="Can't Hurt Me" />
//             <h3>Can't Hurt Me</h3>
//             <p>by David Goggins</p>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

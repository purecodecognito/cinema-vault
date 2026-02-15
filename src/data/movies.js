import inter from '../images/inter.png'
import dune from '../images/dune.png'
import knight from '../images/dark.png'
import interstellar from '../images/interstellar.png'


export const moviesData = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    // Используем picsum для надежных картинок
    image:  inter,
    description: "A thief who steals corporate secrets..."
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image: knight,
    description: "When the menace known as the Joker..."
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    image: interstellar,
    description: "A team of explorers travel..."
  },
  {
    id: 4,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    image: dune,
    description: "Feature adaptation of Frank Herbert's novel."
  }
];
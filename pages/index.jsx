import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import navigateArrow from '../src/navigate-arrow.svg';
import star from '../src/star.svg';

const HeadlinerContainer = styled.div`
  display: block;
`;

const MoviesHeadliner = styled.h1`
  font-weight: bold;
  margin-bottom: 30px;
  color: #B8B8BC;
  width: 100%;
`;

const MovieContainer = styled.div`
  width: 90%;
  height: 440px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  border: 2px solid #2C2D3A;
  overflow: hidden;
  margin-bottom: 2em;
  outline: 2px solid #20202E;
  outline-offset: -15px;
`;

const MovieDetail = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background: #1D1D29;
  color: white;
  position: relative;
`;

const MovieName = styled.h2`
  margin: 0 0 5px;
`;

const MovieLength = styled.span`
  text-transform: uppercase;
  color: #565664;
  font-weight: bold;
  vertical-align: middle;
`;

const MovieDescription = styled.p`
  color: white;
  letter-spacing: 2px;
  line-height: 1.4rem;
  font-weight: 200;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BuyButton = styled.a`
  display: block;
  position: absolute;
  bottom: 30px;
  background: linear-gradient(to bottom, #A542AE, #DF4773);
  padding: 15px 10px;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 30px;
  width: calc(100% - 40px);
  box-sizing: border-box;
  cursor: pointer;
`;

const MovieThumbnail = styled.img`
  width: 100%;
  height: 440px;
  object-fit: cover;
  margin: 2px;
  border-radius: 7px 0 0 0;
`;

const ThumbnailContainer = styled.div`
  position: relative;

  &::before {
    content: '${props => props.age}';
    position: absolute;
    top: 12px;
    left: 12px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #252935;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    height: 50px;
    width: 50px;
  }

  &::after {
    content: url('/heart.svg');
    position: absolute;
    display: block;
    top: 16px;
    right: 12px;
    height: 50px;
    width: 40px;
  }
`;

const ThumbnailInfo = styled.div`
  position: absolute;
  bottom: 0;
  height: 150px;
  width: 100%;
  background: linear-gradient(to top, #191925, #191925, transparent);
  padding: 84px 15px 15px 15px;
  color: #EC4969;
`;

const MovieGenres = styled.span`
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: .5rem;
`;

const NavigateArrow = styled(navigateArrow)`
  fill: #B8B8BC;
  transform: rotate(180deg);
  height: 20px;
  position: absolute;
  left: calc(5% + 7px);
  top: 30px;
`;

const Star = styled(star)`
  height: 20px;
  width: 20px;
  display: inline-block;
  margin-right: 5px;

  path {
    fill: #EB4968;
  }

  &:last-child {
    margin: 0;
  }
`;

const MovieReviews = styled(MovieLength)`
  margin: 2px 0 0 7px;
  display: inline-block;
  vertical-align: top;
`;

const Home = () => {
  const movies = [
    {
      name: 'Tenet',
      length: 97,
      ageRestriction: '16+',
      genres: 'Action, Sci-Fi, Thriller',
      rating: 5,
      reviews: 98,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'Wonder Woman 1984',
      length: 120,
      ageRestriction: '13+',
      genres: 'Action, Sci-Fi, Thriller',
      rating: 5,
      reviews: 98,
      image: 'https://source.unsplash.com/random',
    },
    {
      name: 'The Old Guard',
      length: 84,
      ageRestriction: '16+',
      genres: 'Action, Sci-Fi, Thriller',
      rating: 5,
      reviews: 98,
      image: 'https://source.unsplash.com/random',
    },
  ]

  return (
    <div style={{ background: '#191925' }} className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadlinerContainer>
        <NavigateArrow />
        <MoviesHeadliner>Favourite movies</MoviesHeadliner>
      </HeadlinerContainer>
      {movies.map(({ name, length, ageRestriction, genres, reviews, image, rating }, index) => (
        <MovieContainer key={index}>
          <ThumbnailContainer age={ageRestriction}>
            <MovieThumbnail src={image} />
            <ThumbnailInfo>
              <MovieGenres>{genres}</MovieGenres>
              {[...Array(rating)].map((_, index) => (
                <Star index={index} />
              ))}
              <MovieReviews>{reviews} reviews</MovieReviews>
            </ThumbnailInfo>
          </ThumbnailContainer>
          <MovieDetail>
            <MovieName>{name}</MovieName>
            <MovieLength>{`${length} min`}</MovieLength>
            <MovieDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, magna id dictum placerat, erat urna tempor sapien, non auctor eros tortor ut mi. Mauris magna metus, tempor at dolor vel, aliquet luctus erat.</MovieDescription>
            <BuyButton>Book your ticket</BuyButton>
          </MovieDetail>
        </MovieContainer>
      ))}
    </div>
  )
}

export default Home;
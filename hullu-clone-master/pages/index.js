import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Requests from "../Utils/Requests";

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hullu App</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results}/>
    </div>
  );
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${Requests[genre]?.url || Requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
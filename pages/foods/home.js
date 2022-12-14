import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';
import {getSortedListFoods} from '../../lib/data';

export async function getStaticProps() {
  const FoodData = await getSortedListFoods();
  return {
    props: {
      FoodData,
    },
    revalidate: 10,
  };
}

export default function Home({ FoodData}) { 
  return (
      <Layout>
        <h3> Foods </h3>
        <div className="list-group">
          {FoodData ? 
          FoodData.map(({ id, name }) => (
            <Link key={id} href={`/foods/${id}`}>
              <a className="homelist">{name}</a>
            </Link>
          ))
          : null
        }
        </div>
      </Layout>
  );
}
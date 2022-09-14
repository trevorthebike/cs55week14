import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllIds,getData} from '../../lib/data';

export async function getStaticProps({ params }) {
  let filename = 'friends.json';
  const itemData = await getData(params.id, filename);
  return {
    props: {
      itemData,
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds('friends.json');
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData,itemData1 }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h2 className="card-title">{itemData.name}</h2>
          <h3 className="card-title">{"Favorite: " + itemData.favorite}</h3>
          <a href={"../" + itemData.id} > Favorite Friend Link </a>
        </div>
      </article>
  </Layout>
  );
}
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds,getData} from '../lib/data';

export async function getStaticProps({ params }) {
  let filename = 'persons.json';
  const itemData = await getData(params.id, filename);
  return {
    props: {
      itemData,
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds('persons.json');
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
          <h4 className="card-title">{itemData.name}</h4>
          <p className="card-subtitle">{itemData.phone}</p>
          <p className="card-text">{itemData.birthdate}</p>
          <p> {"Email Link: "}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
          <h4></h4>
          <h4><a href ={'friends/' + itemData.id}> Friend Link</a></h4>
        </div>
      </article>
  </Layout>
  );
}
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds,getData} from '../lib/data';

export async function getStaticProps({ params }) {
  let jsontype = 0;
  const itemData = await getData(params.id, jsontype);
  const itemData1 = await getData(params.id, jsontype+1);
  return {
    props: {
      itemData,
      itemData1
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  console.log(paths)
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
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
        </div>
      </article>
    <article className="card col-6">
      <div className="card-body">
        <h5 className="card-title">{itemData1.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{itemData1.phone}</h6>
        <p className="card-text">{itemData1.birthdate}</p>
        <a href={'mailto:' + itemData.email} className="card-link">{itemData1.email}</a>
      </div>
    </article>
  </Layout>
  );
}
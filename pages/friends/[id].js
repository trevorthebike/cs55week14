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
  let filename = 'friends.json';
  const paths = await getAllIds(filename);
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h4 className="card-title">{itemData.post_title}</h4>
          <h4 className="card-title">{itemData.post_author}</h4>
          <p className="card-subtitle">{itemData.post_date}</p>
          <p className="card-text">{itemData.post_content}</p>
        </div>
      </article>
  </Layout>
  );
}
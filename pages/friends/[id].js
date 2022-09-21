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
  const paths = getAllIds(filename);
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
        {itemData.related ? 
          <h2>Related Persons</h2> : null
        }
        {itemData.related ? 
          itemData.related.map(
            ({ id, name }) => (
              <Link key={id} href={`/${id}`}>
                <a>{name}</a>
              </Link>
            )
          ) 
          : null
        }
        </div>
      </article>
  </Layout>
  );
}
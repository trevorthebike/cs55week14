import Layout from '../../components/layout';
import { getAllIdsFoods, getDataFoods} from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getDataFoods(params.id);
  return {
    props: {
      itemData,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await getAllIdsFoods();
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
          <h1 className="card-title">{itemData.post_title}</h1>
          <p className="card-subtitle">Description: {itemData.new_description}</p>
          <p className="card-subtitle">Rating: {itemData.new_rating}</p>
          <p className="card-subtitle">Good? {itemData.new_good}</p>
          </div>
      </article>
  </Layout>
  );
}
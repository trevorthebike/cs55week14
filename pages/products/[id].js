import Layout from '../../components/layout';
import { getAllIdsProduct, getDataProduct} from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getDataProduct(params.id);
  return {
    props: {
      itemData,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await getAllIdsProduct();
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
          <h2 className = "card-title">Name: {itemData.new_name} </h2>
          <h2 className = "card-title">Price: {itemData.new_price} </h2>
          <h2 className = "card-title">Color: {itemData.new_color} </h2>
        </div>
      </article>
  </Layout>
  );
}
import Layout from '../../components/layout';
import { getAllIds, getData} from '../../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
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
          <div className = "card-text" dangerouslySetInnerHTML = {{__html: itemData.post_content}} />
          <h2 className = "card-title">Firstname: {itemData.new_firstname} </h2>
          <h2 className = "card-title">Lastname: {itemData.new_lastname} </h2>
          <h2 className = "card-title">Number: {itemData.new_number} </h2>
        </div>
      </article>
  </Layout>
  );
}
import Link from 'next/link'
import Layout from '../../components/layout';
import {getSortedListProducts} from '../../lib/data';

export async function getStaticProps() {
  const productData = await getSortedListProducts();
  return {
    props: {
      productData,
    },
    revalidate: 10,
  };
}

export default function Home({ productData}) { 
  return (
      <Layout>
        <h3> Products </h3>
        <div className="list-group">
          {productData ? 
          productData.map(({ id, name }) => (
            <Link key={id} href={`/products/${id}`}>
              <a className="homelist">{name}</a>
            </Link>
          ))
          : null
        }
        </div>
      </Layout>
  );
}
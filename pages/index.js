import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import { getSortedList} from '../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },
    revalidate: 10,
  }
}

export default function Home() { 
  return (
      <Layout home>
        <div className = "homediv">
        <Link href={`/products/home`}>
          <a className = "mainpage">Products List</a>
        </Link>
        <Link href={`/foods/home`}>
          <a className = "mainpage">Foods List</a>
        </Link>
        <Link href={`/contacts/home`}>
          <a className = "mainpage">Contacts List</a>
        </Link>
        </div>
      </Layout>
  );
}
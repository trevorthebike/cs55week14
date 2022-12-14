import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';
import {getSortedList} from '../../lib/data';

export async function getStaticProps() {
  const ContactData = await getSortedList();
  return {
    props: {
      ContactData,
    },
    revalidate: 10,
  };
}

export default function Home({ ContactData}) { 
  return (
      <Layout>
        <h3> Contacts </h3>
        <div className="list-group">
          {ContactData ? 
          ContactData.map(({ id, name }) => (
            <Link key={id} href={`/contacts/${id}`}>
              <a className="homelist">{name}</a>
            </Link>
          ))
          : null
        }
        </div>
      </Layout>
  );
}
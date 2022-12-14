import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>CS55.13 Week 14</title>
      </Head>
      <header>
        <nav>
          <h1>CS55.13 Week 14 </h1> <br></br>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-primary mt-2">← Back to home</a>
          </Link>
        )
      }
      <footer>
      <a href="https://github.com/trevorthebike/cs55week14">GitHub Link</a>
      </footer>
    </div>
  );
}
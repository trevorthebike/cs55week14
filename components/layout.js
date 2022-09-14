import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>CS55.13 Week 4</title>
      </Head>
      <header>
        <nav>
          <h1>CS55.13 Week 4 Trevor </h1> <br></br>
          <a href="https://github.com/trevorthebike/cs55week4">GitHub Link</a>
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
        <p>This is my next.js Website</p>
      </footer>
    </div>
  );
}
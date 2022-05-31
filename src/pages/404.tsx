import Head from "next/head";

export default function Custom404() {
  return <div>
    <Head>
      <title>Nao existe essa pagina </title>
      <meta name="description" content="A pagina de login" />
    </Head>
    <h1>404 - Page Not Found</h1>
  </div>
}
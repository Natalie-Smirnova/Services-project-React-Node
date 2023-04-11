import Head from 'next/head';

export default function Layout(props: { children: any }) {
    return (
        <div>
            <Head>
                <title>Services Project</title>
                <link rel="icon" href="#" />
                <meta name="keywords" content="services, business" />
            </Head>
            <main>{props.children}</main>
        </div>
    );
}

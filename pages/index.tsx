import type {GetStaticPropsResult} from "next";
import Head from "next/head";
import styles from "@styles/base.module.css";
import Link from "next/link";
import {Item} from "@lib/types";
import {getItems} from "@repo/items";

interface Props {
  items?: Item[],
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const items = await getItems();
  return {
    props: {
      items: items,
    },
  };
}

export default function Home({items}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inventory Management</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Inventory Management</h1>

        <Link href="/shipments/new">
          <a className={styles.createLink}>Create shipment</a>
        </Link>
        <Link href="/items/new">
          <a className={styles.createLink}>Create item</a>
        </Link>

        <h2>Items</h2>
        <div>
          {
            // List items
            items?.map(item => (
              <div key={item.id} className={styles.itemContainer}>
                <Link href={`/items/edit/${item.id}`}>Edit</Link>
                {item.name}, Quantity: {item.quantity}
              </div>
            ))
          }
        </div>
      </main>
    </div>
  );
};

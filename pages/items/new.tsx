import styles from "../../styles/base.module.css";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { apiCreateItem } from "../../repo/api/items";
import { HttpError } from "../../lib/types";

export default function NewItemPage() {
  const router = useRouter();
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!itemName) {
      alert("Item name is required.");
      return;
    }
    try {
      await apiCreateItem({ name: itemName, quantity: itemQuantity });
      await router.push("/");
    } catch (e) {
      if (e instanceof HttpError || e instanceof Error) {
        alert(`Oops! Something went wrong. Error: ${e.message}`);
      }
      console.error(e);
    }
  }

  return (
    <div className={styles["container"]}>
      <Link href="/">
        <h1 className={styles["titleLink"]}>Inventory Management</h1>
      </Link>
      <h2>Create Item</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="itemName">Name</label><br/>
          <input name="itemName" type="text" onChange={event => setItemName(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="itemQuantity">Quantity</label><br/>
          <input name="itemQuantity" type="number" onChange={event => setItemQuantity(Number(event.target.value))}
                 defaultValue={0}/>
        </div>
        <input type="submit" value="Create"/>
      </form>
    </div>
  );
}

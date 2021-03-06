import { db } from './firebase-admin';
import { compareAsc, compareDesc, parseISO } from 'date-fns';

export async function getAllProducts() {
  const snapshot = await db.collection('products').get();
  const products = [];

  snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

  return products;
}

export async function getUserProducts(uid) {
  const snapshot = await db
    .collection('products')
    .where('ownerId', '==', uid)
    .get();

  const products = [];

  snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

  products.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );
  return products;
}

export async function getOrderedProducts(uid) {
  return await db
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => {
      const { orderDetails } = doc.data();
      return orderDetails ? orderDetails : [];
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

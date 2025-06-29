import { credential } from 'firebase-admin';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';

const getFirebaseAdminApp = () => {
  if (getApps().length > 0) {
    return getApp();
  }

  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return initializeApp();
  }

  if (process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    return initializeApp({
      credential: credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }

  return initializeApp();
};

const app = getFirebaseAdminApp();

export { app };

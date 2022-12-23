import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: 'AIzaSyB04DRdkb19WZzJEEzUkgrA-TAqKseFB-A',
    authDomain: 'trrlloup.firebaseapp.com',
    projectId: 'trrlloup',
    storageBucket: 'trrlloup.appspot.com',
    messagingSenderId: '550772922347',
    appId: '1:550772922347:web:ecb6e0de705bc2a64d6bae',
}
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

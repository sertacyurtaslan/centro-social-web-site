import User from "../../domain/model/User";
import {firestore} from "./FirebaseConfig";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import CentroSocialRepository from "../../domain/repository/CentroSocialRepository";

class CentroSocialRepositoryImpl implements CentroSocialRepository {

    async createUser(userData: User): Promise<User> {
        if (userData.userId) {
            const userDocument = doc(firestore, "users", userData.userId);
            await setDoc(userDocument, userData);
        }
        return userData;
    }

    async getUser(userId: string): Promise<User | null> {
        const document = await getDoc(doc(firestore, "users", userId));
        return document.exists() ? (document.data() as User) : null;
    }

    async deleteUser(userId: string): Promise<void> {
        const userDocRef = doc(firestore, "users", userId);
        await deleteDoc(userDocRef);
    }
}

export default CentroSocialRepositoryImpl;

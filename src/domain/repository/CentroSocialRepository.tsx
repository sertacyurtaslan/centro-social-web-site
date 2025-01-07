import User from "../model/User";

interface CentroSocialRepository {
    createUser(userData: User): Promise<User>;
    getUser(userId: string): Promise<User | null>;
    deleteUser(userId: string): Promise<void>;
}

export default CentroSocialRepository
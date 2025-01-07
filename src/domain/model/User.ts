interface User {
    userId?: string;
    userName?: string;
    userEmail?: string;
    userCreationDate?: string;
}

export const defaultUser: User = {
    userId: undefined,
    userName: '',
    userEmail: '',
    userCreationDate: '',
};

export default User;

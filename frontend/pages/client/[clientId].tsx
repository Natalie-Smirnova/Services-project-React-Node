import {useRouter} from 'next/router';

export default function Client({users}: any) {
    const router = useRouter();

    return (
        <div>Client page {router.query.clientId}
            <ul>
                {users.map((user: Record<any, any>) => (<li key={user.id}>{user.id}. name : {user.name}, username: {user.username}</li>))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    return { props: { users } };
}
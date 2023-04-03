import { useRouter } from 'next/router';

export default function Client({ users }: any) {
    const router = useRouter();

    return (
        <div>
            Client page {router.query.clientId}
            <ul>
                {users && users.map((user: Record<any, any>) => (
                    <li key={user._id}>
                        {user.id}. name : {user.name}, phone: {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://127.0.0.1:3000/api/users`);
    const response = await res.json();
    const users = response && response.status === "success" ? response.data : [];
    return { props: { users } };
}

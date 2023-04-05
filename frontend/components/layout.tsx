import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectValue } from '../slices/counterSlice';

export default function Layout(props: { children: any }) {
    const count = useSelector(selectValue);
    const dispatch = useDispatch();
    return (
        <div>
            <Head>
                <title>Services Project</title>
                <link rel="icon" href="#" />
                <meta name="keywords" content="services, business" />
            </Head>
            <main>{props.children}</main>
            <h4>The value of count is {count}</h4>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

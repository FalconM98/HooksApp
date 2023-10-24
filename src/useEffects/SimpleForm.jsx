import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'strider',
        email: 'miguel@google.com'
    });

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setformState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('Use Effect');
    }, []);

    useEffect(() => {
        console.log('formState');
    }, [formState]);

    useEffect(() => {
        console.log('email change');
    }, [email]);


    return (
        <>
            <h1>Formulario</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
        </>

    )
}

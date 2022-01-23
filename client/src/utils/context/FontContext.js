import React, { createContext, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const FontContext = createContext();
const { Provider } = FontContext;

// Create a custom hook that allows easy access to our NameContext values
export const useName = () => useContext(FontContext);

// Creating our theme provider. Accepts an argument of "props"
export default function FontProvider(props) {
    const initialState = {
        weight: '500',
        loading: true,
    };

    return <Provider value={initialState} {...props} />;
}

import React, { createContext, useContext } from 'react';

// Create our theme context using React.CreateContext()
export const FontContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useFontContext = () => useContext(FontContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const FontProvider = ({ children }) => {
    const typeWeight = {
        weight: 500,
    };
    const pageTitles = [
        'outright*',
        'false front', 
        'amended', 
        'figures', 
        'liable leaders'
    ]; 
    const initialState = {
        name: 'outright*',
        titleWeight: 500,
    };
    // The value prop expects an initial state object
    return (
        <FontContext.Provider value={{ initialState }}>
            {/* We render children in our component so that any descendent can access the value from the provider */}
            {children}
        </FontContext.Provider>
    );
}

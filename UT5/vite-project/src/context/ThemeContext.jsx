import {checkContext, createContext, useState} from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [modoOscuro, setModoOscuro] = useState(true);

    function cambiarTema(){
        if(modoOscuro) {
            setModoOscuro(false);
        } else{
            setModoOscuro(true);
        }
    }

    return(
        <ThemeContext.Provider value={{modoOscuro, cambiarTema}}>
            {children}
        </ThemeContext.Provider>
    );
}
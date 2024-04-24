import { ChangeEvent, useState } from "react";

export function useLogin() {

    const [inputs, setInputs] = useState<ILoginAuth>({
        username: '',
        password: '',
    });

        /**
     * Maneja los cambios en los campos de entrada de un formulario de inicio de sesión,
     * actualizando el estado de los inputs con los nuevos valores.
     * 
     * @param e Evento de cambio en el input, proporcionando el nombre y el valor actualizado del input modificado.
     */
    const handlerLogin = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setInputs(inputs => ({
            ...inputs,
            [name]: value,
        }));
    };

    /**
     * Valida si los campos de entrada de inicio de sesión no están vacíos.
     *
     * @param e Objeto que contiene los campos de usuario y contraseña.
     * @return boolean Verdadero si ambos, el nombre de usuario y la contraseña, no están vacíos.
     */
    const isValidateInputs = (e: ILoginAuth): boolean => {
        return e.username !== "" && e.password !== "";
    }


    const validateLogin = (e: ILoginAuth, funcion: () => void): void => {
        if (e.username === "admin" && e.password === "admin") {
            const objectJson = { "username": e.username, "password": e.password };
            localStorage.setItem("credenciales", JSON.stringify(objectJson))
            window.location.reload()
        } else funcion();
    }

    return {
        inputs,
        handlerLogin,
        isValidateInputs,
        validateLogin
    }
}
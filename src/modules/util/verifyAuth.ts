const KEY_ITEM: string = 'credenciales'

export const isAuthenticated = (): boolean => {
    const cadenaJsonLocal = localStorage.getItem(KEY_ITEM);
    if (cadenaJsonLocal != null) {
        const json: { username: string, password: string } = JSON.parse(cadenaJsonLocal);
        return (json.username == "admin" && json.password == "admin");
    }
    return false;
}

export const removeCredentials = () => {
    const cadenaJsonLocal = localStorage.getItem(KEY_ITEM);
    if (cadenaJsonLocal != null) {
        localStorage.removeItem("credenciales");
        window.location.reload()
    }
}
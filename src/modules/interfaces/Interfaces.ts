interface IModal {
    isModalOpen: boolean,
    handleOk: (value: boolean) => void,
    character: any
}

interface IModalLocation {
    openModelLocation: boolean,
    setOpenModelLocation: (value: boolean) => void,
    location: any
}

interface ITableFovorite {
    setTab: (value: number) => void,
    isFavorite: boolean
}

interface ICardDash {
    setTab: (value: number) => void
    lstCharacter: any[],
    setNameFilter: (value: string) => void,
    setFilter: (value: boolean) => void,
    setOpenModel: (value: boolean) => void,
    setCharacter: (value: object) => void
}


interface IPaginated {
    setPage: (value: number) => void,
    setSkeleton: (value: boolean) => void,
    fetchCharacters: () => void
}

interface ILoginAuth {
    username: string;
    password: string;
}

interface IProtectedRouteProps {
    isAuthenticated: boolean; 
    redirectPath: string;
    children?: any;
}
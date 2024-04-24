import React, { useEffect, useState } from "react";
import { KEY_LOCAL } from "../util/constants/message-alert";
import { Table } from "antd";
import { COLUMNS_EPISODIE, COLUMNS_LOCALSTORAGE } from "./table/Columns";
import { useQueryGql } from "../graphql/gql";

export const TableComponent: React.FC<ITableFovorite> = ({ setTab, isFavorite }) => {

    const [lstTableLocal, setLstTableLocal] = useState<any[]>([])
    const { dataListTable } = useQueryGql();

    const loadAddFavoriteLocal = () => {
        const lstLocalStorage = localStorage.getItem(KEY_LOCAL)
        if (lstLocalStorage != null) {
            const { data } = JSON.parse(lstLocalStorage)
            setLstTableLocal(data)
        }
    }

    const loadEpisodie = async () => {
        try {
            const { results } = await dataListTable(1, false);        
            setLstTableLocal(results)
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    }

    useEffect(() => {
        if (isFavorite) loadAddFavoriteLocal();   
        else loadEpisodie()
    }, [])

    return (
        <div className="m-4">
            <span className="text-white h4 font-rick-morty">
                {isFavorite ? "List Characters Local Storage" : "List Episodies - Rick And Morty"}
            </span>
            <button style={{ float: 'right' }}
                className="btn btn-success font-rick-morty"
                onClick={() => setTab(0)}>Back INIT</button>
            <hr className="text-white" />
            <div className="table-inf">
                <Table columns={isFavorite ? COLUMNS_LOCALSTORAGE : COLUMNS_EPISODIE}
                    dataSource={lstTableLocal}
                    size="small" />
            </div>
        </div>
    )
}
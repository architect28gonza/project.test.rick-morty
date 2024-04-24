import { TableColumnsType } from "antd";

export const COLUMNS_LOCALSTORAGE: TableColumnsType<any> = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Specie', dataIndex: 'species' },
    { title: 'Status', dataIndex: 'status' },
    { title: 'Created', dataIndex: 'created' },
    { title: 'Gender', dataIndex: 'gender' },
    {
        title: 'image', dataIndex: 'image',
        render: (item: string, i: number) => {
            return <img src={item}
                style={{ height: 50, borderRadius: 100 }}
                className="img-fluid"
                alt={`${i}`} />
        }
    },
];

export const COLUMNS_EPISODIE: TableColumnsType<any> = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Air_date', dataIndex: 'air_date' },
    { title: 'Episode', dataIndex: 'episode' },
    { title: 'Created', dataIndex: 'created' }
];
import { useEffect, useState } from 'react';
import { useQueryGql } from '../../graphql/gql';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { LstItemsPanelLeft } from '../../util/LstPanelLeft';
import { STYLES_BUTTON_HEADER, STYLES_BUTTON_LOGOUT, STYLES_CONTENT } from '../../styles/home/styles.layout';
import { removeCredentials } from '../../util/verifyAuth';
import { CardDashboar } from '../../components/home/CardDashboar';
import { PaginatedComponent } from '../../components/home/Paginated';
import { TableComponent } from '../../components/Table';
import imgHeaderLayout from '../../../assets/img/Rick_and_Morty.svg.png'
import SkeletonComponent from '../../components/Skeleton';
import ModalComponent from '../../components/Modal';
const { Header, Sider, Content } = Layout

export const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [character, setCharacter] = useState<any>(null)
    const [lstCharacter, setLstCharacter] = useState<any[]>([])
    const { dataListCharacters } = useQueryGql();

    const [page, setPage] = useState<number>(1)
    const [tab, setTab] = useState<number>(0)
    const [isFilter, setFilter] = useState<boolean>(false)
    const [nameFilter, setNameFilter] = useState<string>("")
    const [skeleton, setSkeleton] = useState<boolean>(false)
    const [openModel, setOpenModel] = useState<boolean>(false)

    const fetchCharacters = async () => {
        try {
            const { results } = await dataListCharacters(page, isFilter, nameFilter);
            setLstCharacter(results);
            setSkeleton(false)
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    };

    const TabBody = () => {
        if (tab === 0) {
            return <div className="body-content">
                {!skeleton ? <CardDashboar
                    setTab={setTab}
                    setCharacter={setCharacter}
                    setOpenModel={setOpenModel}
                    setFilter={setFilter}
                    setNameFilter={setNameFilter}
                    lstCharacter={lstCharacter} /> : <SkeletonComponent />}
            </div>
        } else if (tab === 1) {
            return <TableComponent isFavorite={false} setTab={setTab} />
        } else {
            return <TableComponent isFavorite={true} setTab={setTab} />
        }
    }


    useEffect(() => {
        fetchCharacters()
    }, [fetchCharacters]);

    return (
        <div className="container-home-page">
            <Layout style={{ height: '100vh' }} >
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className='img-header-layout m-4'>
                        <img src={imgHeaderLayout} className='img-fluid' alt="img-header" />
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        style={{ fontFamily: 'get schwifty' }}
                        defaultSelectedKeys={['1']}
                        items={LstItemsPanelLeft}
                    />
                </Sider>
                <Layout>
                    <Header className='w-100' style={{ padding: 0, background: '#04142c' }}>
                        <Button type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={STYLES_BUTTON_HEADER}
                        />
                        <PaginatedComponent
                            setSkeleton={setSkeleton}
                            setPage={setPage}
                            fetchCharacters={fetchCharacters} />

                        <Button type="text"
                            onClick={removeCredentials}
                            style={STYLES_BUTTON_LOGOUT}>LogOut</Button>
                    </Header>
                    <Content
                        className='content-body'
                        style={STYLES_CONTENT}>
                            {TabBody()}
                    </Content>
                </Layout>
            </Layout>
            <ModalComponent
                character={character}
                isModalOpen={openModel}
                handleOk={setOpenModel} />
        </div>
    )
}
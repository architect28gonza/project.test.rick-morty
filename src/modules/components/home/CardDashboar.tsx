import { Col, Row, Card } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { showAlert } from '../../util/alerts/Swal-Alert';
import { KEY_LOCAL } from '../../util/constants/message-alert';
import { useQueryGql } from '../../graphql/gql';
import ModalLocationComponent from '../ModalLocation';

export const CardDashboar: React.FC<ICardDash> = ({
    setTab,
    lstCharacter,
    setNameFilter,
    setFilter,
    setOpenModel,
    setCharacter }) => {

    const { dataListTable } = useQueryGql();
    const [isLocationLoad, setIsLocationLoad] = useState<boolean>(false)
    const [openModelLocation, setOpenModelLocation] = useState<boolean>(false)
    const [location, setLocation] = useState<any>(null)

    const addFavoriteLocalStorage = (item: any) => {
        const lstFavoriteJSON = localStorage.getItem(KEY_LOCAL);
        let lstFavorite: any[] = [];
        if (lstFavoriteJSON !== null) {
            const { data } = JSON.parse(lstFavoriteJSON);
            lstFavorite = data;
        }
        lstFavorite.push(item);
        localStorage.setItem(KEY_LOCAL, JSON.stringify({ data: lstFavorite }));
    }

    const fetchLocation = async (id: number) => {
        setIsLocationLoad(true)
        try {
            const { results } = await dataListTable(id, true);
            setLocation(results)
            setOpenModelLocation(true)
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
        setIsLocationLoad(false)
    };



    const getListCharacters = () => {
        if (lstCharacter != null && lstCharacter.length != 0) {
            return lstCharacter.map((item: any) => {
                return <Col className="gutter-row" span={6}>
                    <div className='col-gutter' key={item.id} >
                        <img src={item.image} className='img-fluid img-avatar' alt={item.name} />
                        <hr />
                        <p className='font-rick-morty text-white'>Name : {item.name}</p>
                        <p className='font-rick-morty text-white'>Specie : {item.species}</p>
                        <p className='font-rick-morty text-white'>
                            Location : <button
                                onClick={async () => await fetchLocation(item.id)}
                                className='border-0'
                                style={{ borderRadius: 5 }}>
                                {!isLocationLoad ? "location" : <LoadingOutlined />}
                            </button>
                        </p>
                        <button onClick={() => onClickSeeInf(item)} className='btn btn-success font-rick-morty'>Information</button>
                        <button onClick={() => onClickAdd(item)} className='btn btn-primary text-white font-rick-morty m-1'>Add favorite</button>
                    </div>
                </Col>
            })
        }
        return null;
    }

    const onClickTabButton = () => {
        const lstNameButton: string[] = ['Episodes', 'Favorites']
        return lstNameButton.map((name: string, item: number) => {
            return <button
                key={item}
                onClick={() => setTab(item + 1)}
                className='btn btn-success m-1 font-rick-morty '
                style={{ float: 'right' }}>
                {name}
            </button>
        })
    }

    const onClickSeeInf = (item: any) => {
        setCharacter(item)
        setOpenModel(true)
    }

    const onClickAdd = (item: any) => {
        addFavoriteLocalStorage(item)
        showAlert("COMPLETE!", "Character Add LocalStorage")
    }

    const handleInputFilter = (value: string) => {
        setNameFilter(value)
        setFilter(true)
    }

    return (
        <>
            <div className="card-dashboar m-4">
                <Card className='card-dash'>
                    <label htmlFor="name-filter" className='font-rick-morty text-white p-1'
                        style={{ fontSize: 20 }}>Filter Name :</label>
                    <div className="container-filter">
                        <input className='form-control form-control-filter font-rick-morty m-1 w-25'
                            type="text"
                            id='name-filter'
                            autoComplete='off'
                            onChange={(e) => handleInputFilter(e.target.value)} />
                        <div className="card-footer">
                            <div className='w-100'>
                                {onClickTabButton()}
                            </div>
                        </div>
                    </div>
                </Card>
                <br />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {getListCharacters()}
                </Row>
            </div>
            <ModalLocationComponent
                openModelLocation={openModelLocation}
                setOpenModelLocation={setOpenModelLocation}
                location={location}
            />
        </>
    )
}
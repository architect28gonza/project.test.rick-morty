import { Modal } from 'antd';
const ModalLocationComponent: React.FC<IModalLocation> = ({
    openModelLocation,
    setOpenModelLocation,
    location }) => {

    return (
        <>
            {location != null ? <Modal
                closable={false}
                open={openModelLocation}
                onOk={() => setOpenModelLocation(false)}
                okText={"OK"}
                cancelText={null}
                onCancel={() => setOpenModelLocation(false)}>
                <div style={{ fontSize: 20 }}>
                    <p>INFORMATION OF LOCATION - RICK AND MORTY</p>
                    <hr />
                    <p>name : {location.name}</p>
                    <p>type : {location.type}</p>
                    <p>dimension : {location.dimension}</p>
                    <p>created : {location.created}</p>
                </div>
            </Modal> : null}
        </>
    );
};

export default ModalLocationComponent;
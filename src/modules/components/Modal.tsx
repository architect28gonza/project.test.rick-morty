import { Modal } from 'antd';

const ModalComponent: React.FC<IModal> = ({ handleOk, isModalOpen, character }) => {
    return (
        <>
            {character != null ? <Modal
                closable={false}
                open={isModalOpen}
                onOk={() => handleOk(false)}
                okText={"OK"}
                cancelText={null}
                onCancel={() => handleOk(false)}>
                <div style={{ fontSize: 20 }}>
                    <p>INFORMATION OF CHARACTER - RICK AND MORTY</p>
                    <hr />
                    <p>ID : {character.id}</p>
                    <p>NAME : {character.name}</p>
                    <p>STATUS : {character.status}</p>
                    <p>SPECIES : {character.species}</p>
                </div>
            </Modal> : null}
        </>
    );
};

export default ModalComponent;
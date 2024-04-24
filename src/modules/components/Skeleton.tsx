import React from 'react';
import { Card, Col, Row, Skeleton } from 'antd';

const SkeletonComponent: React.FC = () => {
    return (
        <div className="m-4">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {Array.from(Array(8).keys()).map((item: number) => <Col className="gutter-row p-3" span={6}>
                    <Card key={item} style={{ background: 'rgba(109, 109, 109, 0.35)', border: 'none' }}>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                </Col>)}
            </Row>

        </div>
    )
}

export default SkeletonComponent;
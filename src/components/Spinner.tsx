import React, { FC } from 'react';
import { Space, Spin } from 'antd';

export const Spinner: FC = () => {
	return (
		<Space>
			<Spin size='large' />
		</Space>
	);
};

import React, { FC } from 'react';
import { Alert } from 'antd';

const ErrorMessage: FC = () => {
	return (
		<Alert
			message='Error'
			description='This is an error message about copywriting.'
			type='error'
			showIcon
		/>
	);
};

export default ErrorMessage;

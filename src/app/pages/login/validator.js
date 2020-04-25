import * as Yup from 'yup';
import FIELD_LOGIN from './const';

const LoginSchema = Yup.object().shape({
    [FIELD_LOGIN.USER_NAME]: Yup.string().required('Username is required.'),
    [FIELD_LOGIN.PASSWORD]: Yup.string().required('Password is required.'),
});
export default LoginSchema;

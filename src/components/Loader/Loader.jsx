import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/contactsSlice';
import css from './Loader.module.css';

function Loader() {
  const loading = useSelector(selectLoading);

  return loading ? <div className={css.loader}>Loading...</div> : null;
}

export default Loader;

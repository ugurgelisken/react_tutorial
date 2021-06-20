import './Header.css';

import { withNamespaces } from 'react-i18next';

const Header = ( {t} ) => {
    return (
        <div className="Header" >
           {t('title')}
        </div>
    );
}
export default withNamespaces()(Header);
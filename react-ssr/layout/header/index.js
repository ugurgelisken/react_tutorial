import styles from '../../styles/Header.module.css'

import MenuButton from '../menu/button/'
export default function Header() {
    
    const menuData = [
        { name: "Ana Sayfa", url: "/" },
        { name: "Hakkında", url: "/about" },
        { name: "Ürünler", url: "/products" },
        { name: "İletişim", url: "/contact" }
    ]

    return (
        <div className={styles.Header} >
            {menuData.map(item => (
                <MenuButton key={item.url} {...item} />
            ))}
        </div>
    )
}
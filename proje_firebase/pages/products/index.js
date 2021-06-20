import styles from '../../styles/Products.module.css'

import { useRouter } from 'next/router'

export default function Products( {items} ) {
    
    const router = useRouter()

    const goToProduct = (item) => {
        window.product = item;
        router.push({ 
             pathname: '/product/[id]',
             query: {id: item.id}
        });
    }
  
    return (
        <div className={styles.Products} >
            {items.map(item => (
                <div className={styles.ProductsBox} key={item.id} onClick={() => goToProduct(item)} >
                    <h3>{item.volumeInfo.title}</h3>
                    <p>{item.volumeInfo.subtitle}</p>
                </div>
            ))}
        </div>
    )
}

Products.getInitialProps = async () =>  {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=u%C4%9Furgeli%C5%9Fken`)
    const data = await res.json()
    return { ...data }
}
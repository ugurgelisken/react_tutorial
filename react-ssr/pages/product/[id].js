const Product = () => {

  var productData = {};
  
  if (typeof window!== "undefined" && typeof window.product !== "undefined") {
    productData = window.product;
    window.product = null;
  }else{
    return null
  }
   
  return (
    <div style={{padding: '10px'}}>
      <img style={{float: 'right'}} src={productData.volumeInfo.imageLinks.thumbnail} alt={productData.volumeInfo.title} />
      <h1>{productData.volumeInfo.title}</h1>
      <h4>{productData.volumeInfo.authors}</h4>
      <span>Kategori: {productData.volumeInfo.categories}</span><br/>
      <span>Sayfa Sayısı: {productData.volumeInfo.pageCount}</span><br/>
      <span>Yayınlanma Tarihi: {productData.volumeInfo.publishedDate}</span><br/>
      <span>Fiyat: <b>{productData.saleInfo.listPrice.amount} {productData.saleInfo.listPrice.currencyCode} </b></span><br/>
      <button style={{margin:'4px'}} onClick={ () => { window.open( productData.accessInfo.webReaderLink, '_blank') } } >Oku</button>
      <button style={{margin:'4px'}} onClick={ () => { window.open( productData.saleInfo.buyLink, '_blank') } } >Satın Al</button>
      <p>{productData.volumeInfo.description}</p>
    </div>
  )
}

export default Product
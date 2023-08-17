export const getAll = () => {
  const arrItems = [
    {img: 'https://imgproxy.asket.com/e:1/width:1250/resize:fit/quality:85/aHR0cHM6Ly9kM212ZGhhb2wwNjJmeS5jbG91ZGZyb250Lm5ldC8wLzAvZS9hLzAwZWEyN2E4ZmY5YzdhYWVmNzMwZWMyYWRlYWQwMDcxMDE4YWZiZmVfYXNrZXRfdGVlX21hX3doaV9zbGlkZXNob3dfMDEuanBn.webp', title: 'T-SHIRT', price: 19.90, oldPrice: 25.90, id: 1, size: 'XL'},
    {img: 'https://i.insider.com/6463b0887224930019f31864?width=1000&format=jpeg&auto=webp', title: 'SHIRT', price: 29.90, oldPrice: 35.90, id: 2, size: 'XXL'},
    {img: 'https://n.nordstrommedia.com/id/0195ba73-401f-4e5f-89b5-c2b0a40706d2.jpeg?h=640&w=512', title: 'JEANS', price: 9.90, oldPrice: 15.90, id: 3, size: 'M'},
    {img: 'https://throughthestitch.com/wp-content/uploads/2020/03/knit-sweater-pattern-cable-sleeved-sweater-high-neck-sweater-knitting-pattern-1.jpg', title: 'SWEATER', price: 39.90, oldPrice: 40.90, id: 4, size: 'S'},
    {img: 'https://www.fruit.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_FRUIT/default/dwe45ea001/images/hi-res/PNG-CC23000-R4I-asset_model_front-5-retouched-full-body-3x4-psd.jpg?sw=1396&sh=1732&sm=fit&sfrm=png', title: 'HOODIES', price: 19.90, oldPrice: 25.90, id: 6, size: 'XS'},
    {img: 'https://oldnavy.gapcanada.ca/Asset_Archive/ONWeb/content/0029/712/750/assets/230301_98-M3068_Shorts_W_VIBanner_Denim.jpg', title: 'SHORTS', price: 29.90, oldPrice: 35.90, id: 7, size: 'ML'},
    {img: 'https://media.istockphoto.com/id/466848028/photo/nothing-says-style-like-my-sparkle.webp?b=1&s=170667a&w=0&k=20&c=zng5DjOzXGe-LTl8C5FLqzkU_FSrOXqf1wg5thV-V40=', title: 'DRESS  ', price: 49.90, oldPrice: 50.90, id: 5, size: 'XL'},
    {img: 'https://bestdress.lt/328042-large_default/short-skirt-model-177935-yups.jpg', title: 'SKIRT', price: 9.90, oldPrice: 15.90, id: 8, size: 'L'},
    {img: 'https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw87995f50/hi-res/OUR0027LST_MODEL_FRONT.jpg?sw=430&sh=538&sm=fit&q=42', title: 'COAT', price: 39.90, oldPrice: 40.90, id: 9, size: 'XL'},
    {img: 'https://www.telegram.com/gcdn/authoring/2014/02/19/NTEG/ghows-WT-0bdd981a-82a0-4193-9245-b5bc2e224ff0-7307242c.jpeg?width=660&height=987&fit=crop&format=pjpg&auto=webp', title: 'SWIMSUIT', price: 49.90, oldPrice: 50.90, id: 10, size: 'L'},
    {img: 'https://userdefenders.com/wp-content/uploads/2019/01/Snapback-Hat-Model.jpg', title: 'HAT', price: 19.90, oldPrice: 25.90, id: 11, size: 'XS'},
    {img: 'https://cdn.shopify.com/s/files/1/1115/6560/products/1_on_model_front-unlined_lace_bra-turmeric_grande.jpg?v=1662561490', title: 'BRA', price: 29.90, oldPrice: 35.90, id: 12, size: 'XXL'},
    {img: 'https://st3.depositphotos.com/4975243/35708/i/450/depositphotos_357081670-stock-photo-sickness-concept-woman-warm-blanket.jpg', title: 'SCARF', price: 9.90, oldPrice: 15.90, id: 13, size: 'S'},
    {img: 'https://media.istockphoto.com/id/1451741465/photo/black-loafers-on-female-legs-close-up.webp?b=1&s=170667a&w=0&k=20&c=2MwrO2uzkb9kpTf08vARKmTGJTpR-55Vlr3B4zXhlBg=', title: 'SHOES', price: 39.90, oldPrice: 40.90, id: 14, size: 'S'},
    {img: 'https://fusionworkwear.ie/wp-content/uploads/2021/09/AQ010-Asquith-Fox-Polo-Shirt-Model.jpg', title: 'POLO SHIRT', price: 49.90, oldPrice: 50.90, id: 15, size: 'L'},
    {img: 'https://media.gq.com/photos/56feab80b73a928e61bb4a26/1:1/w_1600,h_1600,c_limit/wtwt-gq-april-10.jpg', title: 'JACKET', price: 19.90, oldPrice: 25.90, id: 16, size: 'ML'},
  ];

  return arrItems;
}
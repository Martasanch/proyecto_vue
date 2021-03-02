import i18next from 'i18next';

fetch('http://localhost:8081/api/lang/es')
.then(res=>res.json())
.then(data=>{
    //console.log(data)
    i18next.addResources('es', 'translation', data)
})

export default i18next.init({
  fallbackLng: ['en', 'fr'],
  lng: 'es',
  debug: true, //Depurar
  resources: {
    en: {
        translation:{}
    },
    es: {
        translation:{}
},
    fr: {
        translation:{}
},
  }

})
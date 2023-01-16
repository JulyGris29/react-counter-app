import PropTypes from 'prop-types';
// const newMessage = {
//   message : 'Hola Mundo',
// tittle : 'Parcero'
// };

// const getValue = ( a,b) => {
//   return a+b;
// }
 

export  const FirstApp = ({title, subTitle,name }) => {
  //console.log (props);
  
  return (
    <>
    <h1 data-testid="test-title">{ title }</h1>
    {/* <code> {JSON.stringify(newMessage)  }</code> */}
    <p>{subTitle}</p>
    <p>{subTitle}</p>

    <p>{name}</p>
    </>
  )
  }


  FirstApp.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.string,

  }

  FirstApp.defaultProps = {
    name: "Julian Grisales",
    subTitle: 'No hay subtítulo',
    title: 'No hay título',
  }


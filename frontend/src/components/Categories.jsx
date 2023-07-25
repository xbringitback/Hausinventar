const Categories = ({name, imgPath}) => {
    return ( 
        <section>
            <img src={imgPath} alt={name} />
            <h3>{name}</h3>
        </section>
     );
}
 
export default Categories;
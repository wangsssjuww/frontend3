import Props from "../komponen/props";

const IndukProps = () => {
    const blok = 1;
    const kamar = "1A"
    return ( 
        <>
            <Props 
                blok= {blok}
                kamar= {kamar}
                penghuni = {true}/>
            <hr />
            <Props 
                blok= "A"
                kamar="1A"
                penghuni={false}/>
            <hr />
            <Props 
                blok= "B"
                kamar="1B"
                penghuni={true}/>
            <hr />
        </>
     );
}
 
export default IndukProps;
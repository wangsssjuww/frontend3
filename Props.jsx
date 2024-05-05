function Props(Props) {
    const {blok, kamar, penghuni} = Props;
    return ( 
        <>
        {penghuni ?
        <div>
            <h2>Pesan untuk Blok Unit : {blok}</h2>
            <p>Kamar Unit : {kamar}</p>
        </div>:
        <p> Anda bukan penghuni</p>
        }
        </>
     );
}

export default Props;
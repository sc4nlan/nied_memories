import TableUsers from "../others/TableUsers";

function Users(){
    return(
        <>
            <div className="p-4 sm:ml-64">
                <div>BUSCA</div>
                <div>FILTRO</div>
                <div className="bounded-lg dark:border-gray-700">
                    <TableUsers/>
                </div>
            </div>
        </>
    )
}

export default Users;
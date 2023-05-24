/*Icons:*/

import { FiEdit3 } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import { AiFillEye} from 'react-icons/ai'

function TableUsers(){
    return(
        <>
            <div className="flex flex-col">
            <div className="overflow-x-auto">
                

                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="border rounded-lg">
                        <table className="divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Usuário
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Categoria
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                                    >
                                        Ações
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        Maria Dias Cardoso
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Pesquisador(a)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-600 whitespace-nowrap">
                                        Ativo(a)
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                        <div className='flex'>
                                            <a
                                                className="hover:text-green-700 justify-between"
                                                href="#"
                                            >
                                                <FiEdit3 className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-green-800'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700 "
                                                href="#"
                                            >
                                                <FaTrash className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-red-600 justify-between'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700"
                                                href="#"
                                            >
                                                <AiFillEye className='flex-shrink-0 w-6 h-5 text-gray-500  dark:text-gray-700 hover:text-blue-800'/>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        Antonio Silva
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Bolsista
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-600 whitespace-nowrap">
                                        Inativo(a)
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                        <div className='flex'>
                                            <a
                                                className="hover:text-green-700 justify-between"
                                                href="#"
                                            >
                                                <FiEdit3 className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-green-800'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700 "
                                                href="#"
                                            >
                                                <FaTrash className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-red-600 justify-between'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700"
                                                href="#"
                                            >
                                                <AiFillEye className='flex-shrink-0 w-6 h-5 text-gray-500  dark:text-gray-700 hover:text-blue-800'/>
                                            </a>
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        Denilson Marcelo
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Pesquisador(a)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-600 whitespace-nowrap">
                                        Ativo(a)
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                        <div className='flex'>
                                            <a
                                                className="hover:text-green-700 justify-between"
                                                href="#"
                                            >
                                                <FiEdit3 className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-green-800'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700 "
                                                href="#"
                                            >
                                                <FaTrash className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-red-600 justify-between'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700"
                                                href="#"
                                            >
                                                <AiFillEye className='flex-shrink-0 w-6 h-5 text-gray-500  dark:text-gray-700 hover:text-blue-800'/>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        Edson Ribeiro
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Pesquisador(a)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-red-600 whitespace-nowrap">
                                        Inativo(a)
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                        <div className='flex'>
                                            <a
                                                className="hover:text-green-700 justify-between"
                                                href="#"
                                            >
                                                <FiEdit3 className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-green-800'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700 "
                                                href="#"
                                            >
                                                <FaTrash className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-red-600 justify-between'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700"
                                                href="#"
                                            >
                                                <AiFillEye className='flex-shrink-0 w-6 h-5 text-gray-500  dark:text-gray-700 hover:text-blue-800'/>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        Jhonatan Dias Silva
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Pesquisador(a)
                                    </td>
                                    <td className="px-6 py-4 text-sm text-green-600 whitespace-nowrap">
                                        Ativo(a)
                                    </td>

                                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap ">
                                        <div className='flex'>
                                            <a
                                                className="hover:text-green-700 justify-between"
                                                href="#"
                                            >
                                                <FiEdit3 className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-green-800'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700 "
                                                href="#"
                                            >
                                                <FaTrash className='flex-shrink-0 w-6 h-4 text-gray-500  dark:text-gray-700 hover:text-red-600 justify-between'/>
                                            </a>
                                            <a
                                                className="hover:text-red-700"
                                                href="#"
                                            >
                                                <AiFillEye className='flex-shrink-0 w-6 h-5 text-gray-500  dark:text-gray-700 hover:text-blue-800'/>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TableUsers;
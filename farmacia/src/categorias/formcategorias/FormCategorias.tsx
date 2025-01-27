import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categorias from "../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../service/Service";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
       
       await buscar(`/categorias/${id}`, setCategoria) 
       
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias/${id}`, categoria, setCategoria)
                alert('O categoria foi atualizado com sucesso!')
            } catch (error: any) {  
                    alert('Erro ao atualizar o categoria.')
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)
                alert('O categoria foi cadastrado com sucesso!')
            } catch (error: any) {                
                    alert('Erro ao cadastrar o categoria.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto" >
            <h1 className=" text-4xl text-center my-10" >
                {id === undefined ? 'Cadastrar categoria' : 'Editar categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
                <div className=" flex flex-col gap-2">
                    <label htmlFor="nome">Descrição do categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-red-600
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
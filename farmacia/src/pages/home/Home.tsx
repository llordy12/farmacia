
function Home() {
    return (
        <>
            <div className="bg-slate-800 flex justify-center">
                <div className='container grid grid-rows-1 text-black'>
                    <div className="flex flex-col gap-6 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            A melhor farmacia do mundo
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://media1.giphy.com/media/tDRYEbEX9jfeIhifk3/giphy.webp?cid=790b7611dxrinndz00piq21pxv3ow3uoxituxaosdbyiady8&ep=v1_gifs_search&rid=giphy.webp&ct=g"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
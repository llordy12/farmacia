
function Home() {
    return (
        <>
            <div className="bg-gray-800 flex justify-center">
                <div className='container grid-flow-dense text-black'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
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
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2N6b2R5N2dleTNhd21kbnJxa2s3cGJmcDJzbG15bHMyZWwwcnE2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tDRYEbEX9jfeIhifk3/giphy.gif"
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
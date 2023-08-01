import './banner.css'
import Header from '../Header';

export default function Banner() {
    return (
        <>
            <div className="display-flex w-100 p-3 text-center bg-max ">
                <Header />
                <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div class="col d-flex flex-column align-items-start gap-2 ms-5 p-5">
                        <h1 className='text-geral text-red'>Bem-vindo</h1>
                        <p className='text-geral fs-4 text-start'>Meu nome é <b className='text-red'>Natanael Alves da Costa</b>, conheça aqui um pouco sobre o meu trabalho e sobre mim</p>
                    </div>
                    <div class="col">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
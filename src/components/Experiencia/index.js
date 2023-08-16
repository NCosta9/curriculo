export default function Experiencia() {
    return (
        <>
            <div className="container mt-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-6">
                        <img src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/minhaFoto" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6 text-geral">
                        <h1 class="display-6 fw-bold text-light lh-1 mb-5">Experiencia Profissional</h1>
                        <div class="list-group">
                            {/* ---inicio div empresa--- */}
                            <div class="d-flex w-100 justify-content-between bg-transparent">
                                <h5 class="mb-1 text-red">Operador de Telemarketing Ativo   </h5>
                                <small>6 Meses</small>
                            </div>
                            <p class="mb-1">Trabalhava na venda de cartões de credito, e atuava com service desk prestando suporte tecnico em informatica interno para colaboradores da empresa</p>
                            <small className="fw-bold">S&J-Soluções Financeiras LTDA</small>
                            <hr className="mb-5" />
                            {/* ---inicio div empresa--- */}
                            <div class="d-flex w-100 justify-content-between bg-transparent">
                                <h5 class="mb-1 text-red">Operador de Maquina de produção</h5>
                                <small>8 Meses</small>
                            </div>
                            <p class="mb-1">Trabalhava na linha de produção interna. </p>
                            <small className="fw-bold">Seara Alimentos LTDA</small>
                            <hr className="mb-5" />
                            {/* ---inicio div empresa--- */}
                            <div class="d-flex w-100 justify-content-between bg-transparent">
                                <h5 class="mb-1 text-red"> Tecnico Instalador e Reparador de Redes Fibra Otica</h5>
                                <small>Desde de 05/2022- Atualmente </small>
                            </div>
                            <p class="mb-1">Atua  no suporte tecnico ao cliente com problemas na internet e na resolução de problemas tecnicos internos. 
                            Reliza provisionamento e desprovisionamento. Liberação de linha telefônica. reponsavél por todo o conteúdo do site da empresa, edição e analise. Formatação de Maquinas dos servidores, monitoramento de clientes. Congirações de onu router e roteadores. </p>
                            <small className="fw-bold">Netsim Provedor de Sistema de Integração a Midia LTDA </small>
                            <hr className="mb-5" />
                          

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
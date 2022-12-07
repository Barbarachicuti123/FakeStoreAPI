import Link from "next/link"

export const Lista = ({produtos}) => {
    return(
        <>
        <div className="container mt-2 mb-5">
                    <div className="row">
                        <div className="col-md-20">
                        {produtos.map((produto) => (
                            <div key={produto.id} className="row p-2 bg-white border rounded card-principal" style={{marginTop: '30px'}}>  
                            <div className="col-md-2 mt-1 image-center"><img className="img-fluid img-responsive rounded" src={produto.image} width={115} height={120} alt="Imagens de produtos fake api" priority/></div>
                                <div className="col-md-7 mt-1">
                                <h5 className="font-weight-bold" style={{marginBottom: '15px', paddingTop: '15px'}}>{produto.title}</h5>
                                    <div className="mt-1 mb-1 spec-1" style={{paddingTop: '5px'}}><span>{produto.category}</span></div>
                                    <p className="text-justify text-truncate para mb-0" style={{color: '#000'}}>{produto.description}<br /><br /></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-4">
                                <h6 className="text-success">Free shipping <i className="fas fa-plane-departure" style={{marginLeft: '5px'}}></i></h6>
                                <div className="d-flex flex-column mt-4"><Link className="btn btn-primary btn-sm btn-details d-flex align-items-center justify-content-center" type="button" href='/detalhes/[id]'as={`/detalhes/${produto.id}`} rel="stylesheet preload">Detalhes</Link>
                                <button className="btn btn-outline-primary btn-sm mt-2" type="button">Adicionar no carrinho</button></div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
        </>
    )
}
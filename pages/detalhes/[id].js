import axios from "axios";
import { useRouter } from 'next/router';
import { Topo } from '../../components/Topo'
import { Rodape } from '../../components/Rodape'

function Profile({ apidetalhes = {} }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

	return (
    <>
      <Topo />

      <div lang="pt-br">
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div key={apidetalhes.id} className="row">
                            <div className="col-md-6">
                                <div className="images p-3">
                                    <div className="text-center p-4"><img id="main-image" src={apidetalhes.image} width={280} height={350} alt="Imagens de produtos fake api" priority/> </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="product p-4">
                                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{apidetalhes.category}</span>
                                        <h5 className="text-uppercase">{apidetalhes.title}</h5>
                                        <div className="price d-flex flex-row align-items-center"> <span className="act-price">${apidetalhes.price}</span>
                                        </div>
                                    </div>
                                    <p className="about">{apidetalhes.description}</p>
                                    <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

      <Rodape />
    </>
  )
}

export async function getStaticProps(context){
    const response = await axios.get('https://fakestoreapi.com/products/' + context.params.id);
    const apidetalhes = await response.data;

	return{
		props: {apidetalhes},
	}
}

export async function getStaticPaths(){
	const response = await axios.get(
		'https://fakestoreapi.com/products'
	);
	const users = await response.data;
	const paths = users.map((user) => {
		return {params: {id: String(user.id)}};
	});
	return{ 
		paths,
		fallback: true, 
	};
}

export default Profile;
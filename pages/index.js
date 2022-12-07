import React from "react";
import axios from "axios";
import { Topo } from '../components/Topo.jsx';
import { Rodape } from '../components/Rodape';
import { Lista } from '../components/Lista';

function Users({users}){
  return(
    <div>
      <Topo>

      </Topo>
      <Lista 
        produtos = {users}
      />
  <Rodape>

  </Rodape>
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );
  const data = await response.data;

  return{
    props: {users:data},
  }
}

export default Users;
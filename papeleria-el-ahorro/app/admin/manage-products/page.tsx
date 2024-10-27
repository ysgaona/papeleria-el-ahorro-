import Container from "@/app/components/container/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/app/api/actions/getProducts";
import { getCurrentUser } from "@/app/api/actions/getCurrentUser";
import NullData from "@/app/components/status/NullData";

const MangeProducts = async() => {
  const products = await getProducts({category:null})
  const currentUser= await getCurrentUser()

  if(!currentUser||currentUser.role !== "ADMIN"){
    return <NullData title="Oops! Access denied"/>
  }
  return (
    <Container>
      <ManageProductsClient products={products}/>
    </Container>
  );
};

export default MangeProducts;

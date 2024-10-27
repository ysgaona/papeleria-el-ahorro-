import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import { getCurrentUser } from "@/actions/getCurrentUser";

interface IParams {
  productId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const product = await getProductById(params);
  const user = await getCurrentUser();

  if (!product)
    return <NullData title="Vaya, el producto con la identificación proporcionada no existe" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;

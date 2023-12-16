import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
      <ProductContainer>
        <ImageContainer>
        </ImageContainer>
        
        <ProductDetails>
          <h1>Camiseta X</h1>
          <span>R$ 79,90</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error blanditiis earum modi dolore quam quas distinctio nihil ipsa molestiae? Possimus quia sit corporis laboriosam. Nulla quisquam suscipit incidunt accusamus ipsam?</p>
          <button>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    )
}
"use client";

import { useRouter } from 'next/navigation';
import { Layout } from "../../shared/components/templates/layout/Layout";
import { Navbar } from "../../shared/components/molecules/navbar/Navbar";
import { BackButton } from "../../shared/components/molecules/buttons/back-button/BackButton";
import { ItemCard } from "../../shared/components/organisms/cards/item-card/ItemCard";
import { SummaryCard } from "../../shared/components/molecules/cards/summary-card/SummaryCard";
import { TextButton } from "../../shared/components/molecules/buttons/text-button/TextButton";
import { Heading, Subtitle } from "../../shared/components/atoms";
import { useCart } from "./hooks/useCart";
import { Footer } from '../../shared/components/molecules';

export function CartScreen() {
  const router = useRouter();
  const { cartDetail, removeItem } = useCart();

  const navbar = (
    <Navbar
      text="GamerShop"
      onTextClick={() => router.push('/')}
      onIconClick={() => router.push('/cart')}
    />
  );

  const footer = (
    <Footer/>
  );

  const summaryItems = cartDetail.items.map(item => ({
    title: item.name,
    price: item.price * item.quantity
  }));

  return (
    <Layout navbar={navbar} footer={footer}>
      <div className="py-6 md:py-12 px-4 md:px-8 lg:px-32">
        <div className="w-39">
          <BackButton
            text="Back to Catalog"
            color="primary800"
            onClick={() => router.back()}
          />
        </div>
        
        <div className="mt-8">
          <Heading
            variant="h1"
            fontWeight="bold"
            color="primary800"
          >
            Your Cart
          </Heading>
          
          <Subtitle
            variant="text-s1"
            fontWeight="regular"
            color="primary800"
            className="mt-3"
          >
            {cartDetail.totalItems} items
          </Subtitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mt-6 md:mt-12">
          <div className="space-y-4 md:space-y-6">
            {cartDetail.items.map((item, index) => (
              <div key={item.id}>
                <ItemCard
                  imageSrc={item.image}
                  imageAlt={item.name}
                  genre={item.genre}
                  title={item.name}
                  description={item.description}
                  price={`$${(item.price * item.quantity).toFixed(2)}`}
                  closeIconSrc="/icons/close.svg"
                  onCloseClick={() => removeItem(item.id)}
                  isNew={item.isNew}
                />
                {index < cartDetail.items.length - 1 && (
                  <div className="border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>

          <div>
            <SummaryCard
              title="Order Summary"
              items={summaryItems}
              color="primary800"
              fontWeight="medium"
            />
            
            <div className="mt-6">
              <TextButton
                variant="btn-filled"
                color="primary000"
                backgroundColor="primary600"
                text="Checkout"
                onClick={() => console.log("Checkout clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
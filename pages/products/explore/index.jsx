import ProductsShowcase from '@/components/products/productsShowcase'
import ProductFeatures from '@/components/products/productFeatures'
import React from 'react'
import ProductsTestimonials from '@/components/testimonials/productTestimonials'
import FaqComponent from '@/components/faq/faq'
// import { createClient } from 'next-sanity'

export default function index({ faqText }) {
  return (
    <div className='h-full'>
      <ProductsShowcase />
      <ProductFeatures />
      {/* <ProductsTestimonials /> */}
      <FaqComponent faqText={faqText} />
    </div>
  )
}
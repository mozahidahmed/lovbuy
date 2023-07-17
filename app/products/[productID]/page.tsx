import DetailSection from '@/components/product/detailPage/DetailSection'
import ImageSection from '@/components/product/detailPage/ImageSection'
import React from 'react'

type Props = {}

const PdPage = (props: Props) => {
  return (
    <div className="container mx-auto py-16">
      <div className="justify-around md:flex">
        {/* left side or Img section */}
        <ImageSection />

        {/* Right side or detail section */}
        <DetailSection />
      </div>
    </div>
  )
}

export default PdPage

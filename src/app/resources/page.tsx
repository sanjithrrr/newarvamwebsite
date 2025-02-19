import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Banner from '../components/Resources/Banner'
import ResourceContent from '../components/Resources/ResourceContent'

export default function Resources() {
  return (<>
        <Header />
        <Banner/>
        <div className="mb-20"> {/* Add this wrapper div with margin-bottom */}
        <ResourceContent />
      </div>
        <Footer />
      </>
      )
}

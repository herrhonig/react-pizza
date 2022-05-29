import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#fff9e9"
    foregroundColor="#ffc9a4"
  >
    <rect x="15" y="227" rx="11" ry="11" width="280" height="18" /> 
    <rect x="15" y="373" rx="10" ry="10" width="100" height="27" /> 
    <rect x="142" y="363" rx="19" ry="19" width="153" height="44" /> 
    <rect x="15" y="266" rx="19" ry="19" width="280" height="83" /> 
    <circle cx="154" cy="113" r="106" />
  </ContentLoader>
)

export default PizzaSkeleton


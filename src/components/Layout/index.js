import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({
  title = 'App de prueba de webpack y less', 
  subtitle = 'Esta app es para probar less y webpack, creada por Facundo Palombo', 
  children
}) => {
  return(
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={subtitle} />
      </Helmet>
      {children}
    </>
  )
}
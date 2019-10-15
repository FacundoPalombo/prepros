import React from 'react'
import { Layout } from './components/Layout'
import styles from './less/styles.less'
export const App = () => {
  return(
    <Layout>
      <h1>Hello world!</h1>
      <h1 className="title-grey">Grey</h1>
      <h2 className="title-dark">Grey-dark</h2>
      <h3 className="title-darker">Grey-darker</h3>
      <h2 className="title-light">Grey-light</h2>
      <h3 className="title-lighter">Grey-lighter</h3>
      <h4 className="title-substract">Sample</h4>
      <h4 className="title-add">Sample</h4>
      <h4 className="title-color">Sample</h4>
      <h4 className="title-color-desaturate">Sample</h4>
      <h4 className="title-color-spin">Sample</h4>
    </Layout>
  )
}
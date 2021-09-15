import * as React from "react"
import { Link } from "gatsby"

import Form from "../components/samform"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Intake" />
    <h1>SA Media Upload</h1>
    <p>Submit Media</p>
    <Form />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IntakePage

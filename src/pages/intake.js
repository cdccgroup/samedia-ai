import * as React from "react"
import { Link } from "gatsby"

import Form from "../components/samintake"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IntakePage = () => (
  <Layout>
    <Seo title="Intake" />
    <h1>SA Media Upload</h1>
    <p>Submit Media</p>
    <Form />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default IntakePage

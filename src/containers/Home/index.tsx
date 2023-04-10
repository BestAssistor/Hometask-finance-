import * as React from 'react';
import Layout from '../../components/Layout';
import Home from "../../components/Home";

function HomeContainer() {
    return (
        <Layout>
            {[<Home />]}
        </Layout>
    )
}

export default HomeContainer;
